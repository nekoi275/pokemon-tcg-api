<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { fetchCard, Card } from '@/api/tcgdex';
import CardComponent from '@/components/SingleCard.vue';

const card = ref<Card | null>(null);
const isLoading = ref(false);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    isLoading.value = true;
    card.value = await fetchCard('swsh3-136');
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
    <CardComponent class="m-auto" v-else-if="card" :card="card" />
  </div>
</template>