<script setup lang="ts">
import ErrorImage from "@/assets/error.gif"
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <img :src="ErrorImage" class="w-60 h-auto mb-8">
    <h1 class="text-6xl text-red-400 text-center max-w-3xl px-4">
      There's no pokemon here or server has a problem
    </h1>
  </div>
</template>