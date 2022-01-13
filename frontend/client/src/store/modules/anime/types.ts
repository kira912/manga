import {
    AnimeStateTypes,
    AnimeMutationsTypes,
    AnimeGettersTypes,
    AnimeActionsTypes
  } from "../../interfaces";
  import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";
  
  export type AnimeStoreModuleTypes<S = AnimeStateTypes> = Omit<
    VuexStore<S>,
    "commit" | "getters" | "dispatch"
  > & {
    commit<
      K extends keyof AnimeMutationsTypes,
      P extends Parameters<AnimeMutationsTypes[K]>[1]
    >(
      key: K,
      payload?: P,
      options?: CommitOptions
    ): ReturnType<AnimeMutationsTypes[K]>;
  } & {
    getters: {
      [K in keyof AnimeGettersTypes]: ReturnType<AnimeGettersTypes[K]>;
    };
  } & {
    dispatch<K extends keyof AnimeActionsTypes>(
      key: K,
      payload?: Parameters<AnimeActionsTypes[K]>[1],
      options?: DispatchOptions
    ): ReturnType<AnimeActionsTypes[K]>;
  };