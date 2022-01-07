<template>
  <div class="flex flex-wrap">
    <router-link
      v-for="anime in viewModel.animes"
      :key="anime.id"
      :to="{name: props.routerName, params: {id: route.name === 'ScanPage' ? anime.name.split(' ').join('-').toLowerCase() : anime.id}}"
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
          <p class="mt-2 text-gray-600">{{ anime.description.slice(0, 150) }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { AnimeFactory } from '../../../../../interface-adapter';
import { inject } from 'vue'
import { useRoute } from "vue-router";

const $anime: AnimeFactory | undefined = inject('anime');
const viewModel = $anime.viewModel;

onMounted(async () => {
  await $anime.controller.refreshSummary();
})

const route = useRoute()

const props = defineProps({
  routerName: String,
  urlParamValue: String,
})
</script>
