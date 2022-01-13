import {
    ScanStateTypes,
    ScanMutationsTypes,
    ScanGettersTypes,
    ScanActionsTypes
  } from "../../interfaces";
  import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";
  
  export type ScanStoreModuleTypes<S = ScanStateTypes> = Omit<
    VuexStore<S>,
    "commit" | "getters" | "dispatch"
  > & {
    commit<
      K extends keyof ScanMutationsTypes,
      P extends Parameters<ScanMutationsTypes[K]>[1]
    >(
      key: K,
      payload?: P,
      options?: CommitOptions
    ): ReturnType<ScanMutationsTypes[K]>;
  } & {
    getters: {
      [K in keyof ScanGettersTypes]: ReturnType<ScanGettersTypes[K]>;
    };
  } & {
    dispatch<K extends keyof ScanActionsTypes>(
      key: K,
      payload?: Parameters<ScanActionsTypes[K]>[1],
      options?: DispatchOptions
    ): ReturnType<ScanActionsTypes[K]>;
  };