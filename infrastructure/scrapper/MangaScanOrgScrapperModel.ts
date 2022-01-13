import { Cheerio } from "cheerio";

export class MangaOrgPageModel {
    constructor(
        public readonly id: string,
        public readonly url: string,
        public readonly nextBtn: any) {}
}