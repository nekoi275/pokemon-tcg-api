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
type ScrollContainer = HTMLDivElement | null;

const scrollContainer = ref<ScrollContainer>(null);
const scrollToTop = (): void => {
  if (!scrollContainer.value) return;

  scrollContainer.value.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <div
    class="h-screen w-full overflow-y-scroll snap-y snap-mandatory"
    ref="scrollContainer"
  >
    <Slider
      class="pt-20 h-screen w-full snap-start"
      :slides="slides"
      :auto-slide-interval="6000"
    ></Slider>
    <section
      class="w-full snap-start h-screen sm:block md:grid px-10 pt-30 md:p-30 grid-cols-3 gap-8"
    >
      <div>
        <img :src="Landing1" class="w-3/4 m-auto" />
        <h1 class="text-2xl sm:text-left md:text-center py-6">
          The Multilingual Pokemon TCG API
        </h1>
        <p class="pb-6 hidden md:block">
          Every bit of informations from your Cards freely available and open
          source!
        </p>
      </div>
      <div class="hidden md:block">
        <h1 class="text-2xl py-6">10 languages and counting</h1>
        <p class="pb-6">
          The whole API is available in more than 10 languages !
        </p>
        <img :src="Landing2" class="w-3/4 m-auto" />
      </div>
      <div>
        <img :src="Landing3" class="w-3/4 m-auto" />
        <h1 class="text-2xl py-6 sm:text-left md:text-center">
          A JSON REST API
        </h1>
        <p class="hidden md:block">
          A full featured JSON REST API fo get any card informations.
        </p>
      </div>
    </section>
    <section
      class="grid gap-4 grid-cols-2 lg:grid-cols-4 h-screen w-full snap-start bg-grey-50 text-dark-100 py-25 px-4"
    >
      <a
        class="lg:col-span-1 lg:row-span-2 col-span-2 text-xl border-8 border-cyan-50 text-center p-2 rounded-xl cursor-pointer border-double hover:border-cyan-100 hover:shadow-2xl"
        href="https://tcgdex.dev/"
        target="_blank"
        >Check out the API</a
      >
      <router-link
        class="text-xl border-8 border-cyan-50 text-center p-2 rounded-xl cursor-pointer border-dashed hover:border-cyan-100 hover:shadow-2xl"
        to="/cards"
        >Check out the cards</router-link
      >
      <router-link
        to="/about"
        class="text-xl border-8 border-cyan-50 text-center p-2 rounded-xl cursor-pointer border-dotted hover:border-cyan-100 hover:shadow-2xl"
        >Find out more info</router-link
      >
      <router-link
        to="/contact"
        class="lg:row-span-2 border-8 text-xl border-cyan-100 text-center p-2 rounded-xl cursor-pointer hover:border-cyan-50 hover:shadow-2xl"
        >Contact me</router-link
      >
      <button
        @click="scrollToTop"
        class="lg:col-span-2 cursor-pointer bg-cyan-50 text-white rounded-lg shadow-lg hover:bg-cyan-100 transition-all duration-300 flex items-center group"
      >
        <svg
          class="w-5 h-5 m-auto group-hover:translate-y-[-3px] transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </section>
  </div>
</template>
