import React from "react";
import useSwr from "swr";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function Overview() {
  const pokemon = useParams().name;
  const fetcher = (url) => axios(url).then((res) => res.data);
  const { data, error } = useSwr(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    fetcher
  );
  return (
    <>
      <Link to="/">Back to homepage</Link>
      {data && <p>{pokemon}</p>}
      {data && <img src={data.sprites.front_default} alt={pokemon}></img>}
      {error && <p>Oops, something went wrong.</p>}
    </>
  );
}

export default Overview;
