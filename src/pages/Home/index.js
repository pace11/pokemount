import React from "react";
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
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.pokemons.map(item => (
    <div key={item.id}>
      <p>{item.name}</p>
      <img src={item.image} alt={item.image} />
    </div>
  ));
}

export default Home;
