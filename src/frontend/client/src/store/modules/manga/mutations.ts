import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { MutationsTypes, State } from "./interface";
import { MangaSearchResultViewModel, MangaViewModel } from "../../../../../interface-adapter/manga/ViewModel";

export const mutations: MutationTree<State> &
  MutationsTypes = {
  [MutationTypes.SET_ALL_MANGA](state: State, payload: MangaViewModel[]) {
    state.mangas = payload;
  },
  [MutationTypes.SET_MANGA](state: State, payload: MangaViewModel) {
    state.manga = payload;
  },
  [MutationTypes.SET_SEARCH_MANGA](state: State, payload: MangaSearchResultViewModel[]) {
    state.resultSearch = payload;
  },
  [MutationTypes.SET_OPEN_RESULT_SEARCH](state: State) {
    state.resultSearchDisplayed = true;
  },
  [MutationTypes.SET_CLOSE_RESULT_SEARCH](state: State) {
    state.resultSearchDisplayed = false;
  },
};