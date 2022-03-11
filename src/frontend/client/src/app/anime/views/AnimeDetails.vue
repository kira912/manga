<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div v-for="(episode, index) of store.getters.getAnimeEpisodes" :key="index" class="card-bg w-80 m-2 pointer-events shadow-lg rounded-lg mt-20 hover:shadow-2xl">
            <article class="overflow-hidden rounded-lg shadow-lg">
                <a :href="episode.url" target="_blank">
                    <img alt="Placeholder" class="block h-auto w-full" :src="episode.image">
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg text-white">
                        {{ episode.name }}
                    </h1>
                </header>
            </article>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onBeforeMount } from "@vue/runtime-core";
import { useStore } from 'vuex';
import { AllActionTypes } from '../../../store/action-types';
const store = useStore();
const route = useRoute();

onBeforeMount(async () => {
  await store.dispatch(AllActionTypes.GET_ANIME_EPISODE, route.params.id);
})

</script>
