import { Module } from "vuex";
import { State } from "./interface";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";

const anime: Module<State, State> = {
  state,
  getters,
  mutations,
  actions
};

export default anime;
