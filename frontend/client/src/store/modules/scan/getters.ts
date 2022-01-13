import { GetterTree } from "vuex";
import {
  ScanGettersTypes,
  ScanStateTypes,
  IRootState
} from "../../interfaces";

export const getters: GetterTree<ScanGettersTypes, IRootState> &
ScanGettersTypes = {
  getChapters: (state: ScanStateTypes) => {
    return state.chapters || [];
  },
  getChapterPages: (state: ScanStateTypes) => {
    return state.pages || [];
  },
};