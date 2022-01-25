import { ActionTree } from 'vuex';
import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types';
import {
  ActionsTypes,
  State
} from './interface';
import { injectStrict } from '../../../utils/injectTyped';
import { ChapterPage, ScanKey } from '../../../symbols';
import { IRootState } from '../root';

export const actions: ActionTree<State, IRootState> &
ActionsTypes = {
  async [ActionTypes.GET_SCAN_CHAPTERS]({ commit }, id: string) {
    const scan = injectStrict(ScanKey);
    await scan.controller.getChapters(id);

    commit(MutationTypes.SET_SCAN_CHAPTERS, scan.viewModel.chapters);
  },
  async [ActionTypes.GET_SCAN_CHAPTER_PAGE]({ commit }, id: string) {
    const scan = injectStrict(ChapterPage);
    await scan.controller.getChapterPages(id);

    commit(MutationTypes.SET_SCAN_CHAPTER_PAGE, scan.viewModel.pages);
  },
  [ActionTypes.GET_CLEAR_CHAPTERS]({ commit }) {
    commit(MutationTypes.SET_CLEAR_CHAPTERS, undefined);
  },
};
