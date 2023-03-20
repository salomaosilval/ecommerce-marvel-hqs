import { useEffect, useState } from "react";
import { getComicList } from "../../API";
import { ComicCard } from "../../components/ComicCard/ComicCard";
import { Header } from "../../components/Header/Header";
import { Search } from "../../components/Search/Search";

export const Home = () => {
  const [comicList, setComicList] = useState([]);
  const [search, setSearch] = useState("");
  const [comicListFromAPI, setComicListFromAPI] = useState([]);

  useEffect(() => {
    async function fetchComicList() {
      const response = await getComicList();

      setComicList(response);
      setComicListFromAPI(response);
    }

    fetchComicList();
  }, []);

  useEffect(() => {
    const oldArray = [...comicListFromAPI];

    if (search) {
      const newArray = oldArray.filter((item) => {
        const searchCaps = search.toLowerCase();
        const itemTitleCaps = item.title.toLowerCase();

        return itemTitleCaps.startsWith(searchCaps);
      });

      setComicList(newArray);
    }

    if (!search) {
      setComicList(comicListFromAPI);
    }
  }, [search]);

  return (
    <>
      <Header />
      <Search setSearch={setSearch} />
      <ComicCard comicList={comicList} />
    </>
  );
};
