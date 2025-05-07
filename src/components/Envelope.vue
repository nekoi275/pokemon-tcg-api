<script setup lang="ts"></script>

<template>
  <div class="relative flex justify-center z-0 bg-grey-50 h-[13rem] w-[18rem]">
    <div
      class="origin-top delay-750 absolute h-full w-full top-0 left-0 border-x-[9rem] border-transparent border-b-[6rem] border-t-[6rem] border-t-cyan-50 z-3 animate-open-envelope-1"
    ></div>
    <div
      class="origin-top delay-500 absolute h-full w-full top-0 left-0 border-x-[9rem] border-transparent border-b-[6rem] border-t-[6rem] border-t-cyan-50 z-1 animate-open-envelope-2"
    ></div>
    <div
      class="absolute h-full w-full top-0 left-0 border-t-[6rem] border-t-transparent border-x-[9rem] border-l-grey-50 border-r-cyan-100 border-b-[10rem] border-b-cyan-100 z-3"
    ></div>
    <ul
      class="text-dark-50 p-2 text-xl text-center absolute top-0 w-[80%] h-[80%] bg-teal-50 rounded-md z-2 animate-show-letter"
    >
      <li>
        <a href="https://nekoi-portfolio.pages.dev/" target="_blank"
          >My website</a>
      </li>
    </ul>
  </div>
</template>
