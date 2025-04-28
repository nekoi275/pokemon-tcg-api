<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { fetchAllCards, CardBrief } from '@/api/tcgdex';
import SingleCard from '@/components/SingleCard.vue';

const cards = ref<CardBrief[] | []>([]);
const isLoading = ref(false);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    isLoading.value = true;
    cards.value = await fetchAllCards();
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error';
    console.error('Failed to fetch card:', err);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="pt-16">
    <div v-if="isLoading">Loading card data...</div>
    <div v-else-if="error" class="error-message">{{ error }}</div>
    <div class="flex flex-wrap justify-center items-center gap-4">
      <SingleCard v-for="cardBrief in cards" :card="cardBrief" />
    </div>
  </div>
</template>