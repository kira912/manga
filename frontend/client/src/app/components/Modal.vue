<template>
  <div
    :class="`fixed ${!isActive ? 'hidden' : ''} z-60 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full`"
    v-if="isOpen"
    @click="close"
  >
    <div class="relative top-40 mx-auto shadow-lg rounded-md bg-white max-w-md">
      <slot :close="close"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { onUnmounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import { AllActionTypes } from "../../store/action-types";

const props = defineProps({
  name: String,
});
const store = useStore();

const isActive = computed(() => {
  return store.getters.active === props.name;
});

const isOpen = computed(() => {
  return store.getters.allOpen.includes(props.name);
});

const close = () => {
  store.dispatch(AllActionTypes.CLOSE_MODAL, props.name);
};

const closeAllModal = () => {
  store.dispatch(AllActionTypes.CLOSE_ALL_MODAL);
};

onUnmounted(() => {
  if (isOpen.value) {
    close();
  }
});
</script>
