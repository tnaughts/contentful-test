import React from "react";
import { useQuery, gql } from "@apollo/client";
import { View, Text, Image } from "react-native-web";
import idx from "idx";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

import { style } from "./style";

const POKEMON = gql`
  query pokemon($id: String!) {
    pokemon(id: $id) {
      name
      sys {
        id
      }
      image {
        url
      }
      number
      resistant
      height
      weight
      classification
      evolutionsCollection {
        items {
          name
          sys {
            id
          }
        }
      }
    }
  }
`;

export const Pokemon = function Pokemon(props) {
  const { loading, error, data } = useQuery(POKEMON, {
    variables: { id: idx(props, _ => _.match.params.id) }
  });
  const pokemon = idx(data, _ => _.pokemon);

  if (!data && loading) {
    return (
      <View style={style.loader}>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </View>
    );
  }

  if (!data || error) {
    return (
      <div>
        Unable to fetch course information, please try again or contact support
      </div>
    );
  }

  function renderEvolutions() {
    if (pokemon.evolutionsCollection.items.length > 0) {
      return (
        <>
          <Text style={style.pokemonText}>Evolutions: </Text>
          {pokemon.evolutionsCollection.items.map(p => {
            return (
              <Link to={`/pokemon/${p.sys.id}`} key={p.sys.id}>
                {p.name}
              </Link>
            );
          })}
        </>
      );
    }
    return null;
  }

  function renderPokemon() {
    return (
      <View style={style.container}>
        <Text style={style.title}>{pokemon.name}</Text>
        <Image source={pokemon.image.url} style={style.image} />
        <View>
          <Text style={style.pokemonText}># {pokemon.number}</Text>
          <Text style={style.pokemonText}>Height: {pokemon.height} ft</Text>
          <Text style={style.pokemonText}>Weight: {pokemon.weight} lbs</Text>
          <Text style={style.pokemonText}>
            Classification: {pokemon.classification}
          </Text>
          <Text style={style.pokemonText}>
            {pokemon.resistant
              ? `Resistant: ${pokemon.resistant.join(", ")}`
              : "No resistance"}
          </Text>
          {renderEvolutions()}
        </View>
      </View>
    );
  }

  return (
    <>
      <Link to="/">Back</Link>
      {renderPokemon()}
    </>
  );
};
