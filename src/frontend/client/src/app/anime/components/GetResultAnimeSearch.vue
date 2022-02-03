<template>
  <div class="flex flex-wrap justify-center rounded-lg shadow-lg" v-if="store.getters.resultIsActive">
    <router-link
      v-for="anime in store.getters.getSearchResult"
      :key="anime.id"
      :to="{ name: 'MangaDetail', params: { id: anime.id } }"
      @click="store.dispatch(AllActionTypes.CLOSE_SEARCH_MANGA, mangaFactory)"
      class="hover:shadow-2xl w-50"
    >
      <div
        class="flex flex-col justify-center h-20 w-40 m-2 pb-5 pointer-events bg-white rounded-lg my-20"
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
import { AllActionTypes } from '../../../store/action-types';
import { MangaKey } from '../../../symbols';
import { injectStrict } from '../../../utils/injectTyped';
const mangaFactory = injectStrict(MangaKey);
const store = useStore();
</script>
