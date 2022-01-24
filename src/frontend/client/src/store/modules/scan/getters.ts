import { GetterTree } from "vuex";
import {
  GettersTypes,
  State
} from "./interface";

export const getters: GetterTree<GettersTypes, State> &
GettersTypes = {
  getChapters: (state: State) => {
    return state.chapters || [];
  },
  getChapterPages: (state: State) => {
    return state.pages || [];
  },
};