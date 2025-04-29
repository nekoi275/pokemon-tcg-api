<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Slide1 from "@/assets/slide_1.jpg";
import Slide2 from "@/assets/slide_2.jpg";
import Slide3 from "@/assets/slide_3.jpg";

const originalSlides = [Slide1, Slide2, Slide3];
const slides = [...originalSlides, originalSlides[0]];
const currentSlide = ref(0);
let intervalId: number;
const isTransitioning = ref(true);

const nextSlide = () => {
  isTransitioning.value = true;
  currentSlide.value = currentSlide.value + 1;
  
  if (currentSlide.value === slides.length - 1) {
    setTimeout(() => {
      isTransitioning.value = false;
      currentSlide.value = 0;
    }, 500);
  }
};

const prevSlide = () => {
  isTransitioning.value = true;
  currentSlide.value = currentSlide.value - 1;
  
  if (currentSlide.value < 0) {
    setTimeout(() => {
      isTransitioning.value = false;
      currentSlide.value = originalSlides.length - 1;
    }, 500);
  }
};

const goToSlide = (index: number) => {
  isTransitioning.value = true;
  currentSlide.value = index;
};

const startAutoSlide = () => {
  intervalId = window.setInterval(nextSlide, 5000);
};

const stopAutoSlide = () => {
  clearInterval(intervalId);
};

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  stopAutoSlide();
});
</script>

<template>
  <div class="relative h-screen overflow-hidden">
    <div 
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ 
        transform: `translateX(-${currentSlide * 100}%)`,
        transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
      }"
    >
      <section 
        v-for="(_, index) in slides" 
        :key="index"
        :style="{ backgroundImage: `url(${slides[index]})` }" 
        class="h-screen w-full flex-shrink-0 bg-cover bg-center"
      ></section>
    </div>

    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
      <button
        v-for="(_, index) in originalSlides"
        :key="index"
        @click="goToSlide(index)"
        @mouseenter="stopAutoSlide"
        @mouseleave="startAutoSlide"
        class="w-3 h-3 rounded-full transition-colors cursor-pointer"
        :class="{
          'bg-white': currentSlide % originalSlides.length === index,
          'bg-white/50': currentSlide % originalSlides.length !== index
        }"
        :aria-label="`Перейти к слайду ${index + 1}`"
      ></button>
    </div>

    <button
      @click="prevSlide"
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-10 cursor-pointer"
    >
      &lt;
    </button>
    <button
      @click="nextSlide"
      @mouseenter="stopAutoSlide"
      @mouseleave="startAutoSlide"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-10 cursor-pointer"
    >
      &gt;
    </button>
  </div>
</template>