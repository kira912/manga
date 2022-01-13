import { MutationTypes as AnimeTypes } from "./modules/anime/mutation-types";
import { MutationTypes as ScanTypes } from "./modules/anime/mutation-types";

export const AllMutationTypes = {...AnimeTypes, ...ScanTypes };