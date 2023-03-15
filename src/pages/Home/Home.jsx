import { useEffect, useState } from "react";
import { getComicList } from "../../API";
import { ComicCard } from "../../components/ComicCard/ComicCard";
import { Header } from "../../components/Header/Header";
import { Search } from "../../components/Search/Search";

export const Home = () => {
  const [comicList, setComicList] = useState([]);

  useEffect(() => {
    async function fetchComicList() {
      const response = await getComicList();

      console.log(response);

      setComicList(response);
    }

    fetchComicList();
  }, []);

  return (
    <>
      <Header />
      <Search />
      <ComicCard comicList={comicList} />
    </>
  );
};
