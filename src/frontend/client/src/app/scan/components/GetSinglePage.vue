<template>
  <Modal :name="store.getters.active.index">
    <img class="aspect-auto" :src="store.getters.active.url" />
  </Modal>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import Modal from '../../components/Modal.vue'

const store = useStore();
</script>
