import { Page } from "./Page";

export class Chapter {
    constructor(
      public readonly id: string,
      public readonly name: string,
      public readonly bookUrl: string,
      public readonly pages: Page[]) {
    }
  }