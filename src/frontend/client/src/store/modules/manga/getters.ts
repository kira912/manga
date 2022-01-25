import { GetterTree } from "vuex";
import { IRootState } from "../root";
import {
  GettersTypes,
  State
} from "./interface";

export const getters: GetterTree<GettersTypes, IRootState> &
  GettersTypes = {
  getAllManga: (state: State) => {
    return state.mangas || [];
  },
  getSearchResult: (state: State) => {
    return state.resultSearch || [];
  },
  resultIsActive: (state: State) => {
    return state.resultSearchDisplayed
  }
};