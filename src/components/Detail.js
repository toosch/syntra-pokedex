import useSwr from "swr";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import PokeSpinner from "./PokeSpinner";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Overview() {
  const pokemon = useParams().name;
  const fetcher = (url) => axios(url).then((res) => res.data);
  const { data, error } = useSwr(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    fetcher
  );
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <>
      <Container className="p-0 pb-5">
        <Link to="/" className="text-decoration-none">
          <Button className="d-block mx-auto mb-4">Back to overview</Button>
        </Link>
        {!data && !error && <PokeSpinner className="m-auto" />}
        {error && <p className="text-center">Oops, something went wrong.</p>}
        {data && (
          <Card className="shadow">
            <>
              {!imageLoaded && <PokeSpinner />}
              <Card.Img
                src={data.sprites.front_default}
                alt={pokemon}
                className={`poke-img mx-auto mt-2 ${
                  imageLoaded ? "d-inline" : "d-none"
                }`}
                onLoad={() => setImageLoaded(true)}
              ></Card.Img>
              <Card.Body className="text-secondary text-center">
                {data && <h3>{pokemon}</h3>}
                <ListGroup className="w-25 mx-auto shadow-sm">
                  <ListGroup.Item>weight: {data.weight}</ListGroup.Item>
                  <ListGroup.Item>height: {data.height}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </>
          </Card>
        )}
        <Link to="/" className="text-decoration-none">
          <Button className="d-block mx-auto mt-4">Back to overview</Button>
        </Link>
      </Container>
    </>
  );
}

export default Overview;
