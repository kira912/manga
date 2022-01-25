import { ActionTree } from 'vuex';
import { ActionTypes } from './action-types';
import { MutationTypes } from './mutation-types';
import {
  ActionsTypes,
  State
} from './interface';
import { IRootState } from '../root';

export const actions: ActionTree<State, IRootState> &
ActionsTypes = {
  [ActionTypes.OPEN_SCAN_PAGE_MODAL]({ commit }, payload: {name: string, url: string}) {
    commit(MutationTypes.SET_OPEN_SCAN_MODAL, payload);
  },
  [ActionTypes.CLOSE_SCAN_PAGE_MODAL]({ commit }) {
    commit(MutationTypes.SET_CLOSE_SCAN_MODAL, undefined);
  },
};
