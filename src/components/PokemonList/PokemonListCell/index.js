import React from "react";
import { View, Text, ImageBackground } from "react-native-web";
import idx from "idx";
import { Link } from "react-router-dom";
import { style } from "./style";

export const PokemonListCell = function PokemonListCell(props) {
  const { pokemon } = props;
  return (
    <View style={style.cell}>
      <Link style={{ flex: 1 }} to={`/pokemon/${pokemon.sys.id}`}>
        <ImageBackground source={pokemon.image.url} style={style.pokemonImage}>
          <View style={style.pokemonBio}>
            <Text style={style.pokemonTitle}>{pokemon.name}</Text>
            <Text style={style.pokemonText}>Height: {pokemon.height} ft</Text>
            <Text style={style.pokemonText}>Weight: {pokemon.weight} lbs</Text>
            <Text style={style.pokemonText}>
              Classification: {pokemon.classification}
            </Text>
            <Text style={style.pokemonText}># {pokemon.number}</Text>
          </View>
        </ImageBackground>
      </Link>
    </View>
  );
};
