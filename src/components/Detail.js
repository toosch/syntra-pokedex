import React from "react";
import useSwr from "swr";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
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
  return (
    <>
      <Container className="p-0">
        <Link to="/">
          <Button className="d-block mx-auto mb-4">Back to overview</Button>
        </Link>
        <Card>
          {data && (
            <>
              <Card.Img
                className="poke-img border shadow d-flex mx-auto my-3"
                src={data.sprites.front_default}
                alt={pokemon}
              ></Card.Img>
              <Card.Body className="text-secondary text-center">
                {console.log(data)}
                {data && <h3>{pokemon}</h3>}
                <ListGroup className="">
                  <ListGroup.Item>weight: {data.weight}</ListGroup.Item>
                  <ListGroup.Item>height: {data.height}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </>
          )}
          {error && <p>Oops, something went wrong.</p>}
        </Card>
        <Link to="/">
          <Button className="d-block mx-auto mt-4">Back to overview</Button>
        </Link>
      </Container>
    </>
  );
}

export default Overview;
