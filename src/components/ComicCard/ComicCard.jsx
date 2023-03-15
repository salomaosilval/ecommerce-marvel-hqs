import { HQSContainer, HQSList } from "./styles";

export const ComicCard = (props) => {
  const { comicList } = props;

  return (
    <HQSContainer>
      <HQSList>
        {comicList.map((comic) => (
          <div key={comic.id}>
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
            <span>{comic.title}</span>
            <footer>
              <span>R$4,99</span>
              <button>Comprar</button>
            </footer>
          </div>
        ))}
      </HQSList>
    </HQSContainer>
  );
};
