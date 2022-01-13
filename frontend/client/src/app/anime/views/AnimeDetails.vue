<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div v-for="(episode, index) in store.getters.getAnimeEpisodes" :key="index" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 ">
            <article class="overflow-hidden rounded-lg shadow-lg">
                <a :href="episode.url" target="_blank">
                    <img alt="Placeholder" class="block h-auto w-full" :src="episode.image">
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        {{ episode.title }}
                    </h1>
                    <p class="text-grey-darker text-sm">
                        {{ episode.site }}
                    </p>
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
const route = useRoute()

onBeforeMount(async () => {
  await store.dispatch(AllActionTypes.GET_ANIME_EPISODE, route.params.id);
})

</script>
