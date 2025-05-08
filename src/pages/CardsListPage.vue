<script setup lang="ts">
import { ref, computed } from "vue";
import CardsContainer from "@/components/CardsContainer.vue";

const searchParams = ref<Record<string, string>>({});
const isExpanded = ref(false);
const collapseContent = ref<HTMLDivElement | null>(null);

const collapseStyle = computed(() => {
  if (!collapseContent.value) {
    return {
      maxHeight: "0",
      opacity: "0",
      marginTop: "0",
    };
  }

  return {
    maxHeight: isExpanded.value
      ? `${collapseContent.value.scrollHeight}px`
      : "0",
    opacity: isExpanded.value ? "1" : "0",
    marginTop: isExpanded.value ? "1rem" : "0",
  };
});

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};

const handleSearch = () => {
  const params = Object.fromEntries(
    Object.entries(searchParams.value).filter(([_, value]) => value !== "")
  );
  searchParams.value = params;
};
</script>

<template>
  <section class="py-25 px-10">
    <div class="search-form p-4 bg-grey-50 text-dark-50 rounded-lg mb-4">
      <div
        @click="toggleExpanded"
        class="flex justify-between items-center cursor-pointer"
      >
        <h2 class="text-xl font-bold">Search Cards</h2>
        <svg
          class="w-5 h-5 transition-transform duration-300"
          :class="{ 'transform rotate-180': isExpanded }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <div
        ref="collapseContent"
        class="overflow-hidden transition-all duration-300 ease-in-out"
        :style="collapseStyle"
      >
        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="form-group">
            <label class="block mb-1">Name</label>
            <input
              v-model="searchParams.name"
              class="w-full p-2 border rounded"
            />
          </div>

          <div class="form-group">
            <label class="block mb-1">Category</label>
            <input
              v-model="searchParams.category"
              class="w-full p-2 border rounded"
            />
          </div>

          <div class="form-group">
            <label class="block mb-1">Illustrator</label>
            <input
              v-model="searchParams.illustrator"
              class="w-full p-2 border rounded"
            />
          </div>

          <div class="form-group">
            <label class="block mb-1">Rarity</label>
            <input
              v-model="searchParams.rarity"
              class="w-full p-2 border rounded"
            />
          </div>

          <div class="form-group">
            <label class="block mb-1">HP</label>
            <input
              v-model.number="searchParams.hp"
              type="number"
              class="w-full p-2 border rounded"
            />
          </div>

          <div class="form-group">
            <label class="block mb-1">Types</label>
            <input
              v-model="searchParams.types"
              class="w-full p-2 border rounded"
            />
          </div>

          <div class="form-group">
            <label class="block mb-1">Evolve From</label>
            <input
              v-model="searchParams.evolveFrom"
              class="w-full p-2 border rounded"
            />
          </div>

          <div class="form-group">
            <label class="block mb-1">Description</label>
            <input
              v-model="searchParams.description"
              class="w-full p-2 border rounded"
            />
          </div>

          <div class="form-group">
            <label class="block mb-1">Stage</label>
            <input
              v-model="searchParams.stage"
              class="w-full p-2 border rounded"
            />
          </div>
        </div>

        <button
          @click="handleSearch"
          class="cursor-pointer mt-4 px-4 py-2 bg-cyan-100 text-dark-50 rounded hover:bg-cyan-50"
        >
          Search
        </button>
      </div>
    </div>

    <CardsContainer :searchParams="searchParams" />
  </section>
</template>
