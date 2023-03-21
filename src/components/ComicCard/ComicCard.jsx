import { useContext } from "react";
import { Link } from "react-router-dom";
import { FormatCurrency } from "../../utils/formatCurrency";
import { HQSContainer, HQSList } from "./styles";
import { CartContext } from "../../contexts/CartContext";

export const ComicCard = (props) => {
  const { comicList } = props;
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e, comic) => {
    e.preventDefault();
    addToCart(comic);
  };

  return (
    <HQSContainer>
      <HQSList>
        {comicList.map((comic) => (
          <Link to={`/hq/${comic.id}`} key={comic.id}>
            <div>
              <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
              <span>{comic.title}</span>
              <footer>
                <span>{comic.prices[0].price === 0 ? "Grátis" : FormatCurrency(comic.prices[0].price)}</span>
                <button onClick={(e) => handleAddToCart(e, comic)}>Comprar</button>
              </footer>
            </div>
          </Link>
        ))}
      </HQSList>
    </HQSContainer>
  );
};
