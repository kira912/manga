import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { MutationsTypes, State } from "./interface";
import { AnimeEpisodesViewModel, AnimeSearchResultViewModel, AnimeViewModel } from "clean-archi-manga/frontend/interface-adapter/Anime/ViewModel";

export const mutations: MutationTree<State> &
  MutationsTypes = {
  [MutationTypes.SET_ALL_ANIME](state: State, payload: AnimeViewModel[]) {
    state.animes = payload;
  },
  [MutationTypes.SET_ANIME_EPISODES](state: State, payload: AnimeEpisodesViewModel[]) {
    state.episodes = payload;
  },
};