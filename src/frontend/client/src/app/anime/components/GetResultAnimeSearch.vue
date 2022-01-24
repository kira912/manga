<template>
  <div class="flex flex-wrap justify-center" v-if="store.getters.resultIsActive">
    <router-link
      v-for="anime in store.getters.getSearchResult"
      :key="anime.id"
      :to="{ name: 'AnimeScanDetail', params: { id: anime.id } }"
    >
      <div
        class="flex flex-col justify-center h-20 w-40 m-2 pointer-events bg-white shadow-lg rounded-lg my-20 hover:shadow-2xl"
      >
        <div class="-mt-16 self-center">
          <img
            class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            :src="anime.image"
          />
        </div>
        <h2 class="text-gray-800 text-xs self-center font-semibold mt-auto">{{ anime.name }}</h2>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();
</script>
