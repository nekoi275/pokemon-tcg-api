<script setup lang="ts">
import type { CardBrief } from "@/api/tcgdex";

defineProps<{
  card: CardBrief;
}>();
</script>

<template>
  <div
    class="bg-grey-50 w-64 p-6 rounded-lg shadow-xl/30 border-6 border-cyan-100 shadow-cyan-50 text-dark-100 cursor-pointer"
  >
    <h2 class="text-center text-2xl mb-6">{{ card.name }}</h2>
    <img
      class="mb-6"
      :src="card.imageUrl"
      :alt="card.name"
      v-if="card.imageUrl"
    />
    <img
      class="mb-6"
      src="@/assets/no_image.jpg"
      :alt="card.name"
      v-if="!card.imageUrl"
    />
  </div>
</template>
