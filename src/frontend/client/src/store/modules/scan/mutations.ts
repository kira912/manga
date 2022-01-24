import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { MutationsTypes, State } from "./interface";
import { ChapterViewModel } from "clean-archi-manga/frontend/interface-adapter/Scan/Chapters/ViewModel";
import { ChapterPagesViewModel } from "clean-archi-manga/frontend/interface-adapter/Scan/Pages/ViewModel";

export const mutations: MutationTree<State> &
MutationsTypes = {
  [MutationTypes.SET_ANIME_SCAN_CHAPTERS](state: State, payload: ChapterViewModel[]) {
    state.chapters = payload;
  },
  [MutationTypes.SET_ANIME_SCAN_CHAPTER_PAGE](state: State, payload: ChapterPagesViewModel[]) {
    state.pages = payload;
  },
};