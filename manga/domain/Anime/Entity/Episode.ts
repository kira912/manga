export class Episode {
  constructor(
    public readonly id: string,
    public readonly type: string,
    public readonly description: string,
    public readonly title: string,
    public readonly image: string) {

  }
}