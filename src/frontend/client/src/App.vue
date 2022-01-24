<script setup lang="ts">
</script>

<template>
<div>
  <div>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex flex items-center justify-center sm:items-stretch sm:justify-start">
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <router-link to="/anime" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Anime</router-link>
                <router-link to="/scan" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Scan</router-link>
                <!-- <router-link to="/wishlist" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Liste personnel</router-link> -->
              </div>
            </div>
          </div>
          <SearchAnime />
        </div>
      </div>
    </nav>
    <GetResultAnimeSearchVue />
  </div>
  <router-view />
</div>
</template>

<script setup lang="ts">
import SearchAnime from './app/anime/components/SearchAnime.vue';
import GetResultAnimeSearchVue from './app/anime/components/GetResultAnimeSearch.vue';
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
