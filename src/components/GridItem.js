import { useState } from "react";
import useSwr from "swr";
import axios from "axios";
import { Link } from "react-router-dom";
import PokeSpinner from "./PokeSpinner";
import { Card } from "react-bootstrap";

function Overview({ pokemon }) {
  const fetcher = (url) => axios(url).then((res) => res.data);
  const { data, error } = useSwr(
    `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
    fetcher
  );

  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <>
      <div key={pokemon.name} className="mb-4">
        <Link
          className="text-decoration-none text-dark"
          to={`/detail/${pokemon.name}`}
        >
          <Card className="shadow">
            {data && data.sprites.front_default && (
              <Card.Img
                variant="top"
                src={data.sprites.front_default}
                className={`poke-img mx-auto mt-2 ${
                  imageLoaded ? "d-inline" : "d-none"
                }`}
                height="96px"
                alt={pokemon.name}
                onLoad={() => setImageLoaded(true)}
              ></Card.Img>
            )}
            {!imageLoaded && <PokeSpinner />}
            <Card.Body>
              <h5 className="card-title text-center text-secondary">
                {pokemon.name}
              </h5>
              {error && (
                <p className="text-center">Oops, something went wrong.</p>
              )}
            </Card.Body>
          </Card>
        </Link>
      </div>
    </>
  );
}

export default Overview;
