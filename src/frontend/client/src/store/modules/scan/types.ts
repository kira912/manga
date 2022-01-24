import { State, MutationsTypes, GettersTypes, ActionsTypes } from './interface';
import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';

export type StoreModuleTypes<S = State> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof MutationsTypes,
    P extends Parameters<MutationsTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions,
  ): ReturnType<MutationsTypes[K]>;
} & {
  getters: {
    [K in keyof GettersTypes]: ReturnType<GettersTypes[K]>;
  };
} & {
  dispatch<K extends keyof ActionsTypes>(
    key: K,
    payload?: Parameters<ActionsTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ActionsTypes[K]>;
};
