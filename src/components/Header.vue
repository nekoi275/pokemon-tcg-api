<script setup lang="ts">
import Logo from "@/assets/logo.png";
</script>

<template>
  <header class="w-full h-20 p-4 bg-cyan-50 border-b-4 border-cyan-100 fixed z-20 grid justify-items-end items-center">
    <router-link to="/"
      ><img :src="Logo" class="absolute left-4 top-0 h-20 cursor-pointer"
    /></router-link>
    <router-link to="/cards" class="text-dark-100 p-2 mr-4 border-b-4 border-cyan-100 hover:text-cyan-100 hover:border-dark-50 cursor-pointer">Cards</router-link>
  </header>
</template>
