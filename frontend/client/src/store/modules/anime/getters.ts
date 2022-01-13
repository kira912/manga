import { animeFactory } from "../../../../../interface-adapter";
import { GetterTree } from "vuex";
import {
  AnimeGettersTypes,
  AnimeStateTypes,
  IRootState
} from "./../../interfaces";

export const getters: GetterTree<AnimeGettersTypes, IRootState> &
  AnimeGettersTypes = {
  getAll: (state: AnimeStateTypes) => {
    return state.anime || [];
  },
  getAnimeEpisodes: (state: AnimeStateTypes) => {
    return state.episodes || [];
  },
};