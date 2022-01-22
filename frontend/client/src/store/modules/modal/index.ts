import { Module } from "vuex";
import { State } from "./interface";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";
import { IRootState } from "../../interfaces";

const anime: Module<State, IRootState> = {
  state,
  getters,
  mutations,
  actions
};

export default anime;
