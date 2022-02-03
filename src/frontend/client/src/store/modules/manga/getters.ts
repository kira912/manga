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
  getManga: (state: State) => (mangaId: string) => {
    return state.mangas?.find(manga => mangaId === manga.id) || state.manga
  },
  getSearchResult: (state: State) => {
    return state.resultSearch || [];
  },
  resultIsActive: (state: State) => {
    return state.resultSearchDisplayed
  }
};