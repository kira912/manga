<template>
  <Modal :name="`page_${props.index}`">
    <img class="aspect-auto" :src="props.url" />
  </Modal>
</template>

<script setup lang="ts">
import Modal from '../../components/Modal.vue'
const props = defineProps({
  url: String,
  index: Number
})
</script>
