import { ActionTypes as AnimeTypes } from "./modules/anime/action-types";
import { ActionTypes as ScanTypes } from "./modules/scan/action-types";

export const AllActionTypes = { ...AnimeTypes, ...ScanTypes };