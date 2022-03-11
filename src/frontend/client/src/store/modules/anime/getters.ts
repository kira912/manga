import { GetterTree } from "vuex";
import { IRootState } from "../root";
import {
  GettersTypes,
  State
} from "./interface";

export const getters: GetterTree<GettersTypes, IRootState> &
  GettersTypes = {
  getAll: (state: State) => {
    return state.animes || [];
  },
  getAnimeEpisodes: (state: State) => {
    return state.episodes || [];
  },
  getCurrentListPage: (state: State) => {
    return state.currentListPage;
  }
};