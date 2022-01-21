<template>
  <div class="flex flex-wrap">
    <router-link
      v-for="anime in store.getters.getAll"
      :key="anime.id"
      :to="{name: props.routerName, params: {id: anime.id}}"
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
