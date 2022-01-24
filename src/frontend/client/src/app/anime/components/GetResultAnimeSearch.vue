<template>
  <div class="flex justify-center" v-if="store.getters.resultIsActive">
    <router-link
      v-for="anime in store.getters.getSearchResult"
      :key="anime.id"
      :to="{ name: 'AnimeScanDetail', params: { id: anime.id } }"
    >
      <div
        class="max-w-md p-4 m-2 pointer-events bg-white shadow-lg rounded-lg my-20 hover:shadow-2xl"
      >
        <div class="flex justify-center md:justify-end -mt-16">
          <img
            class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            :src="anime.image"
          />
        </div>
        <div>
          <h2 class="text-gray-800 text-xl font-semibold">{{ anime.name }}</h2>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { watch } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();

// watch(store, (current, prev) => {
//   console.log(current, prev);
// });
</script>
