import { ActionTree } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import {
  ActionsTypes,
  State,
} from "./interface";
import { injectStrict } from "../../../utils/injectTyped";
import { MangaKey } from "../../../symbols";
import { IRootState } from "../root";
import { MangaFactory } from "../../../../../interface-adapter";

export const actions: ActionTree<State, IRootState> &
ActionsTypes = {
  async [ActionTypes.GET_ALL_MANGA]({ commit }) {
    const manga = injectStrict(MangaKey);
    await manga.controller.getAllMangas();
    commit(MutationTypes.SET_ALL_MANGA, manga.viewModel.mangas);
  },
  async [ActionTypes.SEARCH_ANIME]({ commit }, payload: {searched: string, factory: MangaFactory}) {
    await payload.factory.controller.getSearchAnime(payload.searched)
    commit(MutationTypes.SET_SEARCH_ANIME, payload.factory.viewModel.resultAnimeSearch)
  },
  [ActionTypes.OPEN_SEARCH_ANIME]({ commit }, factory: MangaFactory) {
    factory.ui.showResultSearch();
    commit(MutationTypes.SET_OPEN_RESULT_SEARCH, true)
  },
  [ActionTypes.CLOSE_SEARCH_ANIME]({ commit }, factory: MangaFactory) {
    factory.ui.hideResultSearch();
    commit(MutationTypes.SET_CLOSE_RESULT_SEARCH, false)
  },
};