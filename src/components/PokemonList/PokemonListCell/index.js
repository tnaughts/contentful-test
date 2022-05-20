import React from "react";
import { View, Text, ImageBackground } from "react-native-web";
import idx from "idx";
import { Link } from "react-router-dom";
import { style } from "./style";

export const PokemonListCell = function PokemonListCell(props) {
  const { pokemon } = props;
  console.log(pokemon.fields.image, "poke")
  return (
    <View style={style.cell}>
      <Link style={{ flex: 1 }} to={`/pokemon/${pokemon.sys.id}`}>
        <ImageBackground source={pokemon.fields.image.fields.file.url} style={style.pokemonImage}>
          <View style={style.pokemonBio}>
            <Text style={style.pokemonTitle}>{pokemon.fields.name}</Text>
            <Text style={style.pokemonText}>Height: {pokemon.fields.height} ft</Text>
            <Text style={style.pokemonText}>Weight: {pokemon.fields.weight} lbs</Text>
            <Text style={style.pokemonText}>
              Classification: {pokemon.fields.classification}
            </Text>
            <Text style={style.pokemonText}># {pokemon.fields.number}</Text>
          </View>
        </ImageBackground>
      </Link>
    </View>
  );
};
