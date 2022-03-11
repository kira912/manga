import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { MutationsTypes, State } from "./interface";
import { AnimeEpisodesViewModel, AnimeViewModel } from "../../../../../interface-adapter/anime/ViewModel";

export const mutations: MutationTree<State> &
  MutationsTypes = {
  [MutationTypes.SET_ALL_ANIME](state: State, payload: AnimeViewModel[]) {
    state.animes = payload;
  },
  [MutationTypes.SET_ANIME_EPISODES](state: State, payload: AnimeEpisodesViewModel[]) {
    state.episodes = payload;
  },
  [MutationTypes.SET_NEW_ANIME_LIST_PAGE](state: State, payload: number) {
    state.currentListPage = payload;
  },
};