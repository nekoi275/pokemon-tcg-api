<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import { fetchSomeCards, CardBrief, searchCards } from "@/api/tcgdex";
import SingleCard from "@/components/SingleCard.vue";

const props = defineProps<{
  searchParams?: Record<string, string>;
}>();

const cards = ref<CardBrief[]>([]);
const isLoading = ref(false);
const error = ref<string | null>(null);
const pageNumber = ref<number>(1);
const perPage = ref<number>(12);
const hasMore = ref<boolean>(true);
const isSearchMode = ref(false);

watch(() => props.searchParams, async (newParams) => {
  if (newParams && Object.values(newParams).some(v => v)) {
    await executeSearch(newParams);
  } else {
    resetAndLoad();
  }
}, { deep: true });

const resetState = () => {
  cards.value = [];
  pageNumber.value = 1;
  hasMore.value = true;
  error.value = null;
  isSearchMode.value = false;
};

const resetAndLoad = async () => {
  resetState();
  await loadMoreCards();
};

const executeSearch = async (params: Record<string, string>) => {
  resetState();
  isSearchMode.value = true;
  
  isLoading.value = true;
  try {
    const cleanParams = Object.fromEntries(
      Object.entries(params).filter(([_, value]) => value !== '')
    );
    
    const searchResults = await searchCards(cleanParams);
    cards.value = searchResults;
    hasMore.value = false;
  } catch (err) {
    error.value = err instanceof Error ? err.message : "Unknown error";
  } finally {
    isLoading.value = false;
  }
};

const loadMoreCards = async () => {
  if (isLoading.value || !hasMore.value || isSearchMode.value) return;

  isLoading.value = true;
  try {
    const newCards = await fetchSomeCards(pageNumber.value, perPage.value);
    
    if (newCards.length === 0) {
      hasMore.value = false;
      return;
    }

    cards.value = [...cards.value, ...newCards];
    pageNumber.value += 1;
  } catch (err) {
    error.value = err instanceof Error ? err.message : "Unknown error";
  } finally {
    isLoading.value = false;
  }
};

const handleScroll = () => {
  if (isSearchMode.value) return;

  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  const isNearBottom = scrollTop + clientHeight >= scrollHeight - 500;

  if (isNearBottom) {
    loadMoreCards();
  }
};

onMounted(async () => {
  if (!props.searchParams || !Object.values(props.searchParams).some(v => v)) {
    await loadMoreCards();
  }
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="pt-16">
    <div v-if="isLoading">Loading card data...</div>
    <div v-else-if="error" class="error-message">{{ error }}</div>
    <div v-else-if="cards.length === 0 && !isLoading" class="text-center py-8">
      No cards found
    </div>
    <div class="flex flex-wrap justify-center items-center gap-4">
      <SingleCard v-for="cardBrief in cards" :key="cardBrief.id" :cardBrief="cardBrief" />
    </div>
  </div>
</template>