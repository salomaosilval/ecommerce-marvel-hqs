import axios from "axios";
import md5 from "md5";

export const publicKey = "3c75759d4276fb2d46a10634eeac878b";
const privateKey = "067b45042caf8ffa44c1821331cea779e847fd39";
export const ts = Number(new Date());
export const hash = md5(ts + privateKey + publicKey);

export const getComicList = () => {
  const response = axios
    .get(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=50`)
    .then((response) => {
      const comics = response.data.data.results.filter(
        (comic) =>
          comic.thumbnail && comic.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
      );

      return comics;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};
