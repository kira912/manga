import { animeFactory, mangaScanFactory } from '../../../interface-adapter';

const factories = {
  install: (Vue: any) => {
    Vue.provide('anime', animeFactory)
    Vue.provide('scan', mangaScanFactory)
  },
};

export default factories;