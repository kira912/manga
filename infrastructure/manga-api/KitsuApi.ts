import { AnimeApiInterface } from "../../manga/domain/Anime/UseCase/AnimeApiInterface";
import { Anime } from '../../manga/domain/Anime/Entity/Anime'

interface AnimeJson {
  id: string;
  type: string;
  description: string;
  title: string;
  image: string;
}

export class AnimeKitsuApi implements AnimeApiInterface {
  private baseUri = "https://kitsu.io/api/edge";

  async getAllAnime(): Promise<Anime[]> {
    const response = await fetch(`${this.baseUri}/anime`)
    
    let animeArray = Array();
    const responseData = await response.json();

    for (const data of responseData.data) {
      animeArray.push(new Anime(
        data.id,
        data.type,
        data.attributes.description,
        data.attributes.synopsis,
        data.attributes.slug,
        data.attributes.posterImage.tiny
        )
      );
    }
    
    return animeArray;
  }
}