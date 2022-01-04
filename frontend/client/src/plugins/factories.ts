import { animeFactory } from '../../../interface-adapter';

const factories = {
  install: (Vue: any) => {
    Vue.provide('anime', animeFactory)
  },
};

export default factories;