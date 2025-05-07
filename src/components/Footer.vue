<script setup lang="ts">
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="bg-cyan-100 text-gray-50 py-4 px-6">
    <div
      class="container mx-auto flex flex-col md:flex-row justify-between items-center"
    >
      <nav class="mb-4 md:mb-0">
        <router-link
          to="/"
          class="inline text-dark-100 p-2 mr-4 hover:text-grey-50 cursor-pointer"
          >Home</router-link
        >
        <router-link
          to="/cards"
          class="inline text-dark-100 p-2 mr-4 hover:text-grey-50 cursor-pointer"
          >Cards</router-link
        >
        <router-link
          to="/about"
          class="inline text-dark-100 p-2 mr-4 hover:text-grey-50 cursor-pointer"
          >About</router-link
        >
        <router-link
          to="/contact"
          class="inline text-dark-100 p-2 mr-4 hover:text-grey-50 cursor-pointer"
          >Contact</router-link
        >
      </nav>
      <div class="text-center md:text-right">
        <div class="mb-2">
          <a
            href="mailto:nekoi275@gmail.com"
            class="hover:text-cyan-200 transition-colors"
          >
            nekoi275@gmail.com
          </a>
        </div>
        <div>
          <span>© {{ currentYear }} - Built with Vue 3 and Tailwind CSS</span>
        </div>
      </div>
    </div>
  </footer>
</template>
