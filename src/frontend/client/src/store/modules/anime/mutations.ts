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
  [MutationTypes.SET_SEARCH_ANIME](state: State, payload: AnimeSearchResultViewModel[]) {
    state.resultSearch = payload;
  },
  [MutationTypes.SET_OPEN_RESULT_SEARCH](state: State) {
    state.resultSearchDisplayed = true;
  },
  [MutationTypes.SET_CLOSE_RESULT_SEARCH](state: State) {
    state.resultSearchDisplayed = false;
  },
};