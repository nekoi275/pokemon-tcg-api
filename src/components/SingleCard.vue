<script setup lang="ts">
import type { CardBrief } from "@/api/tcgdex";

defineProps<{
  cardBrief: CardBrief;
}>();
</script>

<template>
  <router-link
    :to="{ name: 'CardDetail', params: { id: cardBrief.id } }"
    class="bg-grey-50 w-64 p-6 rounded-lg shadow-xl/30 border-6 border-cyan-100 shadow-cyan-50 text-dark-100 cursor-pointer"
  >
    <h2 class="text-center text-2xl mb-6">{{ cardBrief.name }}</h2>
    <img
      class="mb-6"
      :src="cardBrief.imageUrl"
      :alt="cardBrief.name"
      v-if="cardBrief.imageUrl"
    />
    <img
      class="mb-6"
      src="@/assets/no_image.jpg"
      :alt="cardBrief.name"
      v-if="!cardBrief.imageUrl"
    />
  </router-link>
</template>
