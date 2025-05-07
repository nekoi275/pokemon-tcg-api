<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { fetchCard } from "@/api/tcgdex";
import type { Card } from "@/api/tcgdex";
import CardDetails from "@/components/CardDetails.vue";
import Footer from "@/components/Footer.vue";
import Error from "@/components/Error.vue";

const route = useRoute();
const card = ref<Card | null>(null);
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  try {
    const cardId = route.params.id as string;
    card.value = await fetchCard(cardId);
  } catch (err) {
    error.value = true
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section class="min-h-screen">
    <div v-if="loading" class="text-center py-8">Loading card details...</div>
    <Error v-else-if="error"/>
    <CardDetails class="py-30" v-else-if="card" :card="card" />
  </section>
  <Footer />
</template>
