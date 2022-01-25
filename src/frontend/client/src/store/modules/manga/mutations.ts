import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { MutationsTypes, State } from "./interface";
import { MangaViewModel } from "frontend/interface-adapter/Manga/ViewModel";

export const mutations: MutationTree<State> &
  MutationsTypes = {
  [MutationTypes.SET_ALL_MANGA](state: State, payload: MangaViewModel[]) {
    state.mangas = payload;
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