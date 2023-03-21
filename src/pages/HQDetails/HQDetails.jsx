import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

import { publicKey, hash, ts } from "../../API";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Header } from "../../components/Header/Header";

import { DESCRIPTION } from "../../constants/index";

import { HQContainer, BackToHomeButton } from "./styles";

import { CartContext } from "../../contexts/CartContext";

export const HQDetails = () => {
  const { id } = useParams();
  const [hq, setHQ] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(hq);
  };

  useEffect(() => {
    async function fetchHQ() {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/comics/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
      );

      setHQ(response.data.data.results[0]);
      setIsLoading(false);
    }

    fetchHQ();
  }, [id]);

  return (
    <div>
      {isLoading && <AiOutlineLoading3Quarters />}
      {!isLoading && (
        <div>
          <Header />
          <Link to={"/"}>
            <BackToHomeButton />
          </Link>
          <HQContainer>
            <img src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`} alt={hq.title} />
            <div>
              <h1>{hq.title}</h1>
              <p>{!hq.description ? DESCRIPTION : hq.description}</p>
              <button onClick={() => handleAddToCart()}>Comprar</button>
            </div>
          </HQContainer>
        </div>
      )}
    </div>
  );
};
