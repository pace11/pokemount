import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POKEMON = gql`
  query getDetailPokemon($id: String!, $name: String!) {
    pokemon(id: $id, name: $name) {
      id
      name
      image
    }
  }
`;

export default function Detail() {
  const { id, name } = useParams();
  const { loading, error, data } = useQuery(POKEMON, {
    variables: {
      id,
      name
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <img src={data.pokemon.image} alt={data.pokemon.image}/>
    </div>
  );
}
