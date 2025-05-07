<script lang="ts" setup>
import { PropType } from "vue";
import { Card } from "@/api/tcgdex";

defineProps({
  card: {
    type: Object as PropType<Card>,
    required: true,
  },
});

const booleanToYesNo = (value: boolean | undefined): string => {
  return value ? "Yes" : "No";
};
</script>

<template>
  <div class="min-h-screen bg-dark-50 py-8">
    <div
      class="max-w-4xl mx-auto bg-grey-50 rounded-xl shadow-md overflow-hidden"
    >
      <!-- Header with category and name -->
      <div class="bg-gradient-to-r from-cyan-50 to-cyan-100 p-6 text-white">
        <div class="flex justify-between items-start">
          <div>
            <span class="text-sm font-semibold uppercase tracking-wider">{{
              card.category
            }}</span>
            <h1 class="text-3xl font-bold mt-1">{{ card.name }}</h1>
            <div class="flex items-center mt-2 space-x-4">
              <span
                class="px-3 py-1 bg-white text-dark-50 bg-opacity-20 rounded-full text-sm"
              >
                {{ card.rarity }}
              </span>
              <span
                v-if="card.stage"
                class="px-3 py-1 bg-white text-dark-50 bg-opacity-20 rounded-full text-sm"
              >
                {{ card.stage }}
              </span>
            </div>
          </div>
          <div class="text-right" v-if="card.hp">
            <span class="text-sm block">HP</span>
            <span class="text-2xl font-bold block">{{ card.hp }}</span>
          </div>
        </div>
      </div>

      <!-- Main content -->
      <div class="md:flex">
        <!-- Left column - image -->
        <div class="md:w-1/2 p-6">
          <div
            class="border-2 border-gray-200 rounded-lg overflow-hidden text-cyan-50"
          >
            <img
              v-if="card.imageUrl"
              :src="card.imageUrl"
              :alt="card.name"
              class="w-full h-auto object-contain"
            />
            <img
              class="mb-6"
              src="@/assets/no_image.jpg"
              :alt="card.name"
              v-if="!card.imageUrl"
            />
          </div>

          <!-- Set information -->
          <div class="mt-6 bg-gray-50 p-4 rounded-lg">
            <h3 class="font-semibold text-lg mb-2">Set Information</h3>
            <div class="flex items-center space-x-3 mb-3">
              <div>
                <p class="font-medium">{{ card.set.name }}</p>
                <p class="text-sm text-gray-600">
                  Cards: {{ card.set.cardCount.official }} ({{
                    card.set.cardCount.total
                  }}
                  total)
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right column - details -->
        <div class="md:w-1/2 p-6">
          <!-- Basic info -->
          <div class="mb-6">
            <h3 class="font-semibold text-lg mb-3">Card Details</h3>
            <div class="grid grid-cols-2 gap-4 text-dark-50">
              <div v-if="card.illustrator">
                <p class="text-sm text-gray-500">Illustrator</p>
                <p class="capitalize">{{ card.illustrator }}</p>
              </div>
              <div v-if="card.regulationMark">
                <p class="text-sm text-gray-500">Regulation Mark</p>
                <p>{{ card.regulationMark }}</p>
              </div>
              <div v-if="card.evolveFrom">
                <p class="text-sm text-gray-500">Evolves From</p>
                <p>{{ card.evolveFrom }}</p>
              </div>
              <div v-if="card.retreat">
                <p class="text-sm text-gray-500">Retreat Cost</p>
                <p>{{ card.retreat }}</p>
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="mb-6" v-if="card.description">
            <h3 class="font-semibold text-lg mb-2">Description</h3>
            <p class="text-gray-700">{{ card.description }}</p>
          </div>

          <!-- Types -->
          <div class="mb-6 text-dark-50" v-if="card.types && card.types.length">
            <h3 class="font-semibold text-lg mb-2">Type</h3>
            <div class="flex space-x-2">
              <span
                v-for="type in card.types"
                :key="type"
                class="px-3 py-1 bg-gray-200 rounded-full text-sm capitalize"
              >
                {{ type }}
              </span>
            </div>
          </div>

          <!-- Weaknesses -->
          <div
            class="mb-6 text-dark-50"
            v-if="card.weaknesses && card.weaknesses.length"
          >
            <h3 class="font-semibold text-lg mb-2">Weaknesses</h3>
            <div class="flex space-x-4">
              <div
                v-for="weakness in card.weaknesses"
                :key="weakness.type"
                class="flex items-center"
              >
                <span class="capitalize">{{ weakness.type }}</span>
                <span class="ml-1 text-red-600 font-bold">{{
                  weakness.value
                }}</span>
              </div>
            </div>
          </div>

          <!-- Attacks -->
          <div class="mb-6" v-if="card.attacks && card.attacks.length">
            <h3 class="font-semibold text-lg mb-3 text-dark-50">Attacks</h3>
            <div class="space-y-4">
              <div
                v-for="(attack, index) in card.attacks"
                :key="index"
                class="border-l-4 border-blue-500 pl-4 py-2 bg-gray-50"
              >
                <div class="flex justify-between items-start mr-2">
                  <h4 class="font-medium text-cyan-100">{{ attack.name }}</h4>
                  <span class="text-red-600 font-bold" v-if="attack.damage"
                    >{{ attack.damage }} damage</span
                  >
                </div>
                <div
                  class="flex mt-1 mb-2"
                  v-if="attack.cost && attack.cost.length"
                >
                  <span
                    v-for="(cost, i) in attack.cost"
                    :key="i"
                    class="w-full h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs text-dark-50 mr-2 capitalize"
                  >
                    {{ cost }}
                  </span>
                </div>
                <p class="text-gray-700 text-sm" v-if="attack.effect">
                  {{ attack.effect }}
                </p>
              </div>
            </div>
          </div>

          <!-- Variants -->
          <div class="mb-6 text-dark-50" v-if="card.variants">
            <h3 class="font-semibold text-lg mb-2">Variants</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-500">Normal</p>
                <p>{{ booleanToYesNo(card.variants.normal) }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Holo</p>
                <p>{{ booleanToYesNo(card.variants.holo) }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Reverse</p>
                <p>{{ booleanToYesNo(card.variants.reverse) }}</p>
              </div>
              <div v-if="card.variants.firstEdition !== undefined">
                <p class="text-sm text-gray-500">First Edition</p>
                <p>{{ booleanToYesNo(card.variants.firstEdition) }}</p>
              </div>
              <div v-if="card.variants.wPromo !== undefined">
                <p class="text-sm text-gray-500">W Promo</p>
                <p>{{ booleanToYesNo(card.variants.wPromo) }}</p>
              </div>
            </div>
          </div>

          <!-- Legal -->
          <div v-if="card.legal" class="text-dark-50">
            <h3 class="font-semibold text-lg mb-2">Legality</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-500">Standard</p>
                <p>{{ booleanToYesNo(card.legal.standard) }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Expanded</p>
                <p>{{ booleanToYesNo(card.legal.expanded) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
