import { GetterTree } from "vuex";
import {
  GettersTypes,
  State
} from "./interface";

export const getters: GetterTree<GettersTypes, State> &
  GettersTypes = {
  getAll: (state: State) => {
    return state.animes || [];
  },
  getAnimeEpisodes: (state: State) => {
    return state.episodes || [];
  },
  getSearchResult: (state: State) => {
    return state.resultSearch || [];
  },
  resultIsActive: (state: State) => {
    return state.resultSearchDisplayed
  }
};