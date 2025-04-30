<script setup lang="ts">
import Slider from "@/components/Slider.vue";
import { ref } from "vue";
import Slide1 from "@/assets/slide_1.jpg";
import Slide2 from "@/assets/slide_2.jpg";
import Slide3 from "@/assets/slide_3.jpg";

const slides = ref([
  { 
    img: Slide1, 
    heading: "Welcome to the Pokemon TCG API Website!", 
    text: "This is a simple demo project built with Vue 3 and Tailwind CSS." 
  },
  { 
    img: Slide2, 
    heading: "This is a training/test project.", 
    text: "It was created to practice frontend development using Vue 3." 
  },
  { 
    img: Slide3, 
    heading: "This site is a frontend for the TCGdex API.", 
    text: "All card data comes from the API and is displayed for demonstration." 
  },
]);
</script>

<template>
  <Slider class="pt-20" :slides="slides" :auto-slide-interval="6000"></Slider>
</template>
