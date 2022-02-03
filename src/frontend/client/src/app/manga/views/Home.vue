<template>
    <div>
        <div class="w-full h-96">
            <img class="object-cover w-full h-full" :src="store.getters.getManga().image" />
        </div>
        <div class="flex flex-col gap-5">
            <div class="self-center">
                <div class="bg-neutral-800 rounded-lg shadow-lg">
                    <div class="items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg text-white">{{ store.getters.getManga().name }}</h1>
                    </div>
                </div>
            </div>
            <div class="p-5 self-start">
                <div class="bg-neutral-800 rounded-lg shadow-lg">
                    <div class="items-center justify-between leading-tight p-2 md:p-4">
                        <h1 class="text-lg text-white">{{ store.getters.getManga().description }}</h1>
                    </div>
                </div>
            </div>

            <div class="flex">
                <div class="flex flex-col gap-5 self-start">
                    <div>
                        <div class="bg-neutral-800 rounded-lg shadow-lg">
                            <div class="items-center justify-between leading-tight p-2 md:p-4">
                                <span class="text-lg text-white font-bold"> {{ viewModel.statusCardTitle }} </span>
                                <p class="text-white">{{ store.getters.getManga().status }}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="bg-neutral-800 rounded-lg shadow-lg">
                            <div class="items-center justify-between leading-tight p-2 md:p-4">
                                <span class="text-lg text-white font-bold"> {{ viewModel.yearCardTitle }} </span>
                                <p class="text-lg text-white">{{ store.getters.getManga().year }}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-center bg-neutral-800 rounded-lg shadow-lg">
                            <div class="flex-col self-center p-2 md:p-4">
                                <span class="text-lg text-white font-bold"> {{ viewModel.originalLangCardTitle }} </span>
                                <div class="self-center">
                                    <img class="w-10 object-center" :src="requireImage(`../../../assets/${store.getters.getManga().originalLang}.svg`)" :alt="store.getters.getManga().originalLang" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <GetAllMangaScan />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { onBeforeMount } from "@vue/runtime-core";
import { AllActionTypes } from "../../../store/action-types";
import { injectStrict } from "../../../../src/utils/injectTyped";
import { MangaKey } from "../../../../src/symbols";
import GetAllMangaScan from '../../scan/components/GetAllMangaScan.vue';

const store = useStore()
const route = useRoute()
const viewModel = injectStrict(MangaKey).viewModel
console.log(viewModel);


onBeforeMount(() => {
    store.dispatch(AllActionTypes.GET_MANGA, route.params.id);
})

const requireImage = (src: string) =>  {
    return new URL(src, import.meta.url).href
}

</script>
