import { MutationTree } from 'vuex';
import { MutationTypes } from './mutation-types';
import { MutationsTypes, State } from './interface';
import { ChapterViewModel } from '../../../../../interface-adapter/Scan/Chapters/ViewModel';
import { ChapterPagesViewModel } from '../../../../../interface-adapter/Scan/Pages/ViewModel';

export const mutations: MutationTree<State> &
MutationsTypes = {
  [MutationTypes.SET_SCAN_CHAPTERS](state: State, payload: ChapterViewModel[]) {
    state.chapters = payload;
  },
  [MutationTypes.SET_SCAN_CHAPTER_PAGE](state: State, payload: ChapterPagesViewModel[]) {
    state.pages = payload;
  },
  [MutationTypes.SET_CLEAR_CHAPTERS](state: State) {
    state.chapters = [];
  },
};
