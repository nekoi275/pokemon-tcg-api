<script setup lang="ts">
import Slider from "@/components/Slider.vue";
import { ref } from "vue";
import Slide1 from "@/assets/slide_1.jpg";
import Slide2 from "@/assets/slide_2.jpg";
import Slide3 from "@/assets/slide_3.jpg";
import Landing1 from "@/assets/landing_1.jpg";
import Landing2 from "@/assets/landing_2.jpg";
import Landing3 from "@/assets/landing_3.jpg";

const slides = ref([
  {
    img: Slide1,
    heading: "Welcome to the Pokemon TCG API Website!",
    text: "This is a simple demo project built with Vue 3 and Tailwind CSS.",
  },
  {
    img: Slide2,
    heading: "This is a training/test project.",
    text: "It was created to practice frontend development using Vue 3.",
  },
  {
    img: Slide3,
    heading: "This site is a frontend for the TCGdex API.",
    text: "All card data comes from the API and is displayed for demonstration.",
  },
]);
</script>

<template>
  <Slider class="pt-20" :slides="slides" :auto-slide-interval="6000"></Slider>
  <section class="h-screen grid p-30 grid-cols-3 gap-8">
    <div>
      <img :src="Landing1" class="w-3/4 m-auto" />
      <h1 class="text-2xl text-center py-6">
        The Multilingual Pokemon TCG API
      </h1>
      <p>
        Every bit of informations from your Cards freely available and open
        source!
      </p>
    </div>
    <div>
      <h1 class="text-2xl text-center py-6">10 languages and counting</h1>
      <p class="pb-6">The whole API is available in more than 10 languages !</p>
      <img :src="Landing2" class="w-3/4 m-auto" />
    </div>
    <div>
      <img :src="Landing3" class="w-3/4 m-auto" />
      <h1 class="text-2xl text-center py-6">A JSON REST API</h1>
      <p>A full featured JSON REST API fo get any card informations.</p>
    </div>
  </section>
  <section
    class="bg-grey-50 text-dark-100 h-screen grid grid-flow-col grid-rows-3 p-30 gap-8"
  >
    <a
      class="row-span-3 text-2xl w-3/4 border-8 border-cyan-50 p-10 rounded-xl cursor-pointer border-double hover:border-cyan-100 hover:shadow-2xl"
      href="https://tcgdex.dev/"
      target="_blank"
      >Check out the API</a
    >
    <router-link class="col-span-2 text-2xl w-3/4 border-8 border-cyan-50 p-4 rounded-xl cursor-pointer border-dashed hover:border-cyan-100 hover:shadow-2xl" to="/cards"
      >Check out the cards</router-link
    >
    <router-link class="col-span-2 row-span-2 text-2xl w-3/4 border-8 border-cyan-50 p-10 rounded-xl cursor-pointer border-dotted hover:border-cyan-100 hover:shadow-2xl">Find out more info</router-link>
    <router-link class="col-span-2 row-span-3 text-2xl w-3/4 border-8 border-cyan-100 p-10 rounded-xl cursor-pointer hover:border-cyan-50 hover:shadow-2xl">Contact me</router-link>
  </section>
</template>
