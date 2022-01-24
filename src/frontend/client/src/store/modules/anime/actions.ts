import { ActionTree } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import {
  ActionsTypes,
  State
} from "./interface";
import { injectStrict } from "../../../utils/injectTyped";
import { AnimeKey } from "../../../symbols";
import { AnimeFactory } from "../../../../../interface-adapter";

export const actions: ActionTree<State, State> &
ActionsTypes = {
  async [ActionTypes.GET_ALL_ANIME]({ commit }) {
    const anime = injectStrict(AnimeKey);
    await anime.controller.getAllAnimes();

    commit(MutationTypes.SET_ALL_ANIME, anime.viewModel.animes);
  },
  async [ActionTypes.GET_ANIME_EPISODE]({ commit }, id: number) {
    const anime = injectStrict(AnimeKey);
    await anime.controller.getEpisodes(id)

    commit(MutationTypes.SET_ANIME_EPISODES, anime.viewModel.episodes)
  },
  async [ActionTypes.SEARCH_ANIME]({ commit }, payload: {searched: string, factory: AnimeFactory}) {
    await payload.factory.controller.getSearchAnime(payload.searched)
    console.log(payload.factory);
    

    commit(MutationTypes.SET_SEARCH_ANIME, payload.factory.viewModel.resultAnimeSearch)
  },
  [ActionTypes.OPEN_SEARCH_ANIME]({ commit }, factory: AnimeFactory) {
    factory.ui.showResultSearch();
    commit(MutationTypes.SET_OPEN_RESULT_SEARCH, true)
  },
  [ActionTypes.CLOSE_SEARCH_ANIME]({ commit }, factory: AnimeFactory) {
    factory.ui.hideResultSearch();
    commit(MutationTypes.SET_CLOSE_RESULT_SEARCH, false)
  }
};