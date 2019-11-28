import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POKEMONS = gql`
  query getAllPokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(POKEMONS, {
    variables: {
      first: 10
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.pokemons.map(item => (
    <div key={item.id}>
      <Link to={`/detail/${item.id}/${item.name}`}>
        <p>{item.name}</p>
        <img src={item.image} alt={item.image} />
      </Link>
    </div>
  ));
}

export default Home;
