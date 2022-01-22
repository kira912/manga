import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { AnimeMutationsTypes, AnimeStateTypes } from "./../../interfaces";
import { AnimeEpisodesViewModel, AnimeViewModel } from "clean-archi-manga/frontend/interface-adapter/Anime/ViewModel";

export const mutations: MutationTree<AnimeStateTypes> &
  AnimeMutationsTypes = {
  [MutationTypes.SET_ALL_ANIME](state: AnimeStateTypes, payload: AnimeViewModel[]) {
    state.anime = payload;
  },
  [MutationTypes.SET_ANIME_EPISODES](state: AnimeStateTypes, payload: AnimeEpisodesViewModel[]) {
    state.episodes = payload;
  },
};