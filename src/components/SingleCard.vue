<script setup lang="ts">
import type { Card } from "@/api/tcgdex";

defineProps<{
  card: Card;
}>();
</script>

<template>
  <div
    class="bg-teal-100 w-64 p-6 rounded-lg shadow-xl/30 shadow-cyan-500/50 text-cyan-950"
  >
    <h2 class="text-center text-2xl mb-6">{{ card.name }}</h2>
    <img
      class="mb-6"
      :src="card.imageUrl"
      :alt="card.name"
      v-if="card.imageUrl"
    />
    <div>
      {{ card.description }}
    </div>
  </div>
</template>
