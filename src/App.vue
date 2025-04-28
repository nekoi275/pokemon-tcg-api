<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { fetchSomeCards, CardBrief } from "@/api/tcgdex";
import SingleCard from "@/components/SingleCard.vue";

const cards = ref<CardBrief[] | []>([]);
const isLoading = ref(false);
const error = ref<string | null>(null);
const pageNumber = ref<number>(1);
const perPage = ref<number>(12);
const hasMore = ref<boolean>(true);

const loadMoreCards = async () => {
  if (isLoading.value || !hasMore.value) return;

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
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  const isNearBottom = scrollTop + clientHeight >= scrollHeight - 500;

  if (isNearBottom) {
    loadMoreCards();
  }
};

onMounted(async () => {
  loadMoreCards();
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
    <div class="flex flex-wrap justify-center items-center gap-4">
      <SingleCard v-for="cardBrief in cards" :card="cardBrief" />
    </div>
    <div v-if="isLoading && cards.length > 0" class="text-center py-4">
      Loading more cards...
    </div>
    <div v-if="!hasMore && cards.length > 0" class="text-center py-4 text-gray-500">
      No more cards to load.
    </div>
  </div>
</template>
