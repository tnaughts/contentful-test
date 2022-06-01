import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { View, Text, Image } from "react-native-web";
import idx from "idx";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import {contentfulClient} from "../../Contentful"

import { style } from "./style";


export const Pokemon = function Pokemon(props) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
      setError(false);
      try {
        const result = await contentfulClient.getOneEntry() /* 
                                                           Question 2) How do I retrieve a single entry? We have our id param in the URL
                                                          That id can be accessed with this:
                                                          idx(props, _ => _.match.params.id) but we do not know
                                                          what the call in Contentful is to get just a single entry.                                                 
                                                          */
        setPokemon(result);

      } catch (error) {
        setError(true);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (!pokemon && loading) {
    return (
      <View style={style.loader}>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}/>
      </View>
    )
  }

  if (!pokemon || error) {
    return (
      <div>
        Unable to fetch Pokemon information, please try again or contact support
      </div>
    );
  }

  function renderEvolutions() {
    return (<div></div>)
    if (pokemon.fields.evolutionsCollection.items.length > 0) {
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
        <Text style={style.title}>{pokemon.fields.name}</Text>
        <Image source={pokemon.fields.image.fields.file.url} style={style.image} />
        <View>
          <Text style={style.pokemonText}># {pokemon.fields.number}</Text>
          <Text style={style.pokemonText}>Height: {pokemon.fields.height} ft</Text>
          <Text style={style.pokemonText}>Weight: {pokemon.fields.weight} lbs</Text>
          <Text style={style.pokemonText}>
            Classification: {pokemon.fields.classification}
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
