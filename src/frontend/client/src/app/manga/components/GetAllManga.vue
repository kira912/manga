<template>
  <div class="flex flex-wrap justify-center">
    <router-link
      v-for="manga of getAllManga"
      :key="manga.id"
      :to="{name: props.toNamePage, params: {id: manga.id}}"
      class="h-98"
    >
      <div
        class="card-bg w-80 m-2 pointer-events shadow-lg rounded-lg mt-20 hover:shadow-2xl"
      >
        <div class="flex justify-center w-full">
          <img
            class="h-40 object-cover w-full rounded-2xl"
            :src="manga.image"
          />
        </div>
        <div class="flex flex-col p-4 h-52 self-end mt-auto">
          <h2 class="text-white text-lg font-semibold">{{ manga.name }}</h2>
          <p class="self-end text-white">{{ manga.description !== undefined ? manga.description.slice(0, 150) + '...' : ''}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount } from "@vue/runtime-core";
import { useStore } from "vuex";
import { AllActionTypes } from "../../../store/action-types";
import { mapGetters } from "../../../plugins/lib";
const store = useStore();
const { getAllManga } = mapGetters();

onBeforeMount(() => {
  store.dispatch(AllActionTypes.GET_ALL_MANGA);
});

const props = defineProps({
  toNamePage: String
})

</script>