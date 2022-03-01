import { GetterTree } from "vuex";
import { IRootState } from "../root";
import {
  GettersTypes,
  State
} from "./interface";

export const getters: GetterTree<GettersTypes, IRootState> &
GettersTypes = {
  getChapters: (state: State) => {
    return state.chapters || [];
  },
  getChapterPages: (state: State) => {
    return state.pages || [];
  },
  haveChapters: (state: State) => {
    return state.chapters.length !== 0;
  },
  getChapterViewModel: (state: State) => {
    return state.viewModel;
  },
  getChapterViewerUrl: (state: State) => (chapterId: string): string|null => {
    const chapter = state.chapters.find(chapter => { return chapter.viewerId === chapterId });

    console.log(chapter);
    
    if (typeof chapter === 'undefined') {
      return null;
    }

    return chapter.viewerUrl;
  }
};
