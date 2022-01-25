export class Manga {
  constructor(
    public readonly id: number,
    public readonly description: string = '',
    public readonly name: string = '',
    public readonly image: string  = '',
    public readonly originalLang: string  = '',
    public readonly years: number,
    public readonly status: string  = '',
  ) {}
}
