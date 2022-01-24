import { ActionTree } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import {
  ActionsTypes,
  State
} from "./interface";
import { injectStrict } from "../../../utils/injectTyped";
import { ChapterPage, ScanKey } from "../../../symbols";

export const actions: ActionTree<State, State> &
ActionsTypes = {
  async [ActionTypes.GET_ANIME_SCAN_CHAPTERS]({ commit }, id: string) {
    const scan = injectStrict(ScanKey);
    await scan.controller.getChapters(id);

    commit(MutationTypes.SET_ANIME_SCAN_CHAPTERS, scan.viewModel.chapters);
  },
  async [ActionTypes.GET_ANIME_SCAN_CHAPTER_PAGE]({ commit }, id: string) {
    const scan = injectStrict(ChapterPage);
    await scan.controller.getChapterPages(id)

    commit(MutationTypes.SET_ANIME_SCAN_CHAPTER_PAGE, scan.viewModel.pages)
  }
};