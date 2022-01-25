<template>
  <div class="flex flex-wrap justify-center">
    <router-link
      v-for="anime in store.getters.getAll"
      :key="anime.id"
      :to="{name: 'AnimeEpisodesDetail', params: {id: anime.id}}"
      class="h-98"
    >
      <div
        class="card-bg w-80 m-2 pointer-events shadow-lg rounded-lg mt-20 hover:shadow-2xl"
      >
        <div class="flex justify-center w-full">
          <img
            class="h-40 object-cover w-full rounded-2xl"
            :src="anime.image"
          />
        </div>
        <div class="flex flex-col p-4 h-52 self-end mt-auto">
          <h2 class="text-white text-lg font-semibold">{{ anime.name }}</h2>
          <p class="self-end text-white">{{ anime.description.slice(0, 150) + '...'}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { AllActionTypes } from "../../../store/action-types";
const store = useStore();

onBeforeMount(async () => {
  await store.dispatch(AllActionTypes.GET_ALL_ANIME);
})

const route = useRoute();
const props = defineProps({
  routerName: String,
})

</script>
