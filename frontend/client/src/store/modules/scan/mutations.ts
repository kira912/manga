import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { ScanMutationsTypes, ScanStateTypes } from "../../interfaces";
import { ScanChapterPagesViewModel, ScanChaptersViewModel } from "clean-archi-manga/frontend/interface-adapter/Scan/ScrapChapters/ViewModel";

export const mutations: MutationTree<ScanStateTypes> &
ScanMutationsTypes = {
  [MutationTypes.SET_ANIME_SCAN_CHAPTERS](state: ScanStateTypes, payload: ScanChaptersViewModel[]) {
    state.chapters = payload;
  },
  [MutationTypes.SET_ANIME_SCAN_CHAPTER_PAGE](state: ScanStateTypes, payload: ScanChapterPagesViewModel[]) {
    state.pages = payload;
  },
};