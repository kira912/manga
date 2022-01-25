import { MutationTypes as AnimeTypes } from "./modules/anime/mutation-types";
import { MutationTypes as ScanTypes } from "./modules/anime/mutation-types";
import { MutationTypes as ModalTypes } from "./modules/modal/mutation-types";
import { MutationTypes as MangaTypes } from "./modules/manga/mutation-types";

export const AllMutationTypes = {...AnimeTypes, ...ScanTypes, ...ModalTypes, ...MangaTypes };