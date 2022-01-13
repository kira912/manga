import { ActionTree } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import {
  AnimeActionsTypes,
  AnimeStateTypes,
  IRootState
} from "../../interfaces";
import { injectStrict } from "../../../utils/injectTyped";
import { AnimeKey } from "../../../symbols";

export const actions: ActionTree<AnimeStateTypes, IRootState> &
AnimeActionsTypes = {
  async [ActionTypes.GET_ALL_ANIME]({ commit }) {
    const anime = injectStrict(AnimeKey);
    await anime.controller.getAllAnimes();

    commit(MutationTypes.SET_ALL_ANIME, anime.viewModel.animes);
  },
  async [ActionTypes.GET_ANIME_EPISODE]({ commit }, id: number) {
    const anime = injectStrict(AnimeKey);
    await anime.controller.getEpisodes(id)

    commit(MutationTypes.SET_ANIME_EPISODES, anime.viewModel.episodes)
  }
};