import { GetterTree } from "vuex";
import { IRootState } from "../root";
import {
  GettersTypes,
  State
} from "./interface";

export const getters: GetterTree<GettersTypes, IRootState> &
  GettersTypes = {
  active: (state: State) => {
    return state.scanPageOpen;
  },
};