<template>
  <div
    :class="`fixed ${!isOpen ? 'hidden' : ''} z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full`"
    v-if="isOpen"
    @click="close"
  >
    <div class="relative top-40 mx-auto shadow-lg rounded-md bg-white max-w-md zoom-page">
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

const isOpen = computed(() => {

  if (store.getters.active.index === '') {
    return false;
  }
  return store.getters.active.index === props.name;
});

const close = () => {
  store.dispatch(AllActionTypes.CLOSE_SCAN_PAGE_MODAL, props.name);
};

onUnmounted(() => {
  if (isOpen.value) {
    close();
  }
});
</script>

<style scoped>

.zoom-page {
  min-width: 40rem;
}
</style>