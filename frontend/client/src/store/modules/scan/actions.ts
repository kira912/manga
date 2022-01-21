import { ActionTree } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import {
  AnimeActionsTypes,
  ScanStateTypes,
  IRootState
} from "../../interfaces";
import { injectStrict } from "../../../utils/injectTyped";
import { ChapterPage, ScanKey } from "../../../symbols";

export const actions: ActionTree<ScanStateTypes, IRootState> &
AnimeActionsTypes = {
  async [ActionTypes.GET_ANIME_SCAN_CHAPTERS]({ commit }, id: string) {
    const scan = injectStrict(ScanKey);
    await scan.controller.getChapters(id);

    commit(MutationTypes.SET_ANIME_SCAN_CHAPTERS, scan.viewModel.chapters);
  },
  async [ActionTypes.GET_ANIME_SCAN_CHAPTER_PAGE]({ commit }, id: number) {
    const scan = injectStrict(ChapterPage);
    await scan.controller.getChapterPages(id)

    commit(MutationTypes.SET_ANIME_SCAN_CHAPTER_PAGE, scan.viewModel.pages)
  }
};