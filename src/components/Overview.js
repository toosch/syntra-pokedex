import useSwr from "swr";
import axios from "axios";
import { useState } from "react";

import GridItem from "./GridItem";
import PokeSpinner from "./PokeSpinner";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Overview() {
  const [offset, setOffset] = useState(0);
  const fetcher = (url) => axios(url).then((res) => res.data);
  const { data, error } = useSwr(
    `https://pokeapi.co/api/v2/pokemon?limit=24&offset=${offset}`,
    fetcher
  );
  return (
    <>
      <Container className="p-0 mb-4 d-flex">
        {data && data.previous && (
          <Button
            variant="primary"
            className="d-block mr-auto"
            type="button"
            onClick={() => {
              setOffset(offset - 24);
            }}
          >
            Show previous
          </Button>
        )}
        {data && data.next && (
          <Button
            variant="primary"
            className="d-block ml-auto"
            type="button"
            onClick={() => {
              setOffset(offset + 24);
            }}
          >
            Show next
          </Button>
        )}
      </Container>
      <Container className="p-0">
        {error && (
          <>
            <p className="text-center">Oops, something went wrong.</p>
            <a>
              <Button className="d-block mx-auto w-25" href="/">
                Try reloading this page
              </Button>
            </a>
          </>
        )}
        {!data && !error && (
          <Row>
            <PokeSpinner className="m-auto" />
          </Row>
        )}
        {/* dirty fix --> TODO: make component to build grid */}
        <Row className="p-0">
          <Col>
            {data &&
              data.results
                .filter((el, index) => index % 4 === 0)
                .map((pokemon) => (
                  <GridItem pokemon={pokemon} key={pokemon.name} />
                ))}
          </Col>
          <Col>
            {data &&
              data.results
                .filter((el, index) => index % 4 === 1)
                .map((pokemon) => (
                  <GridItem pokemon={pokemon} key={pokemon.name} />
                ))}
          </Col>
          <Col>
            {data &&
              data.results
                .filter((el, index) => index % 4 === 2)
                .map((pokemon) => (
                  <GridItem pokemon={pokemon} key={pokemon.name} />
                ))}
          </Col>
          <Col>
            {data &&
              data.results
                .filter((el, index) => index % 4 === 3)
                .map((pokemon) => (
                  <GridItem pokemon={pokemon} key={pokemon.name} />
                ))}
          </Col>
        </Row>
      </Container>
      <Container className="p-0 pb-5 d-flex">
        {data && data.previous && (
          <Button
            variant="primary"
            className="d-block mr-auto"
            type="button"
            onClick={() => {
              setOffset(offset - 24);
            }}
          >
            Show previous
          </Button>
        )}
        {data && data.next && (
          <Button
            variant="primary"
            className="d-block ml-auto"
            type="button"
            onClick={() => {
              setOffset(offset + 24);
            }}
          >
            Show next
          </Button>
        )}
      </Container>
    </>
  );
}

export default Overview;
