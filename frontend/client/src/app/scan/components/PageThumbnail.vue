<template>
    <div x-data="imageSlider" class="bg-gray-100 rounded-md max-w-2xl mx-auto relative p-2 sm:p-4 overflow-hidden">

        <div class="rounded-full bg-gray-600 text-white absolute top-5 right-5 text-sm px-2 text-center z-10">
            <span x-text="currentIndex"></span>/<span x-text="images.length"></span>
        </div>

        <button @click="previous()"
            class="absolute left-5 top-1/2 -translate-y-1/2 bg-gray-100 rounded-full w-11 h-11 flex justify-center items-center shadow-md z-10">
            <svg class="w-8 h-8 font-bold text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7">
                </path>
            </svg>
        </button>

        <button @click="forward()"
            class="absolute right-5 top-1/2 -translate-y-1/2 bg-gray-100 rounded-full w-11 h-11 flex justify-center items-center shadow-md z-10">
            <svg class="w-8 h-8 font-bold text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
            </svg>
        </button>

        <div class="relative h-80" style="width: 30rem;">
            <template x-for="(image, index) in images">
                <div x-show="currentIndex == index + 1" x-transition:enter="transition transform duration-300"
                    x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
                    x-transition:leave="transition transform duration-300" x-transition:leave-start="opacity-100"
                    x-transition:leave-end="opacity-0" class="absolute top-0">
                    <img :src="image" alt="image" class="rounded-sm">
                </div>
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
