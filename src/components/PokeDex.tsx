import React from 'react';
import PokemonCard from './PokemonCard';

interface PokemonType {
  type: {
    name: string;
  };
}

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: PokemonType[];
}

interface PokeDexProps {
  pokemons: Pokemon[];
}

const PokeDex: React.FC<PokeDexProps> = ({ pokemons }) => {
  return (
    <div className="grid grid-cols-4 gap-5 mt-7 mb-7">
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} name={pokemon.name} id={pokemon.id} image={pokemon.image} types={pokemon.types} />
      ))}
    </div>
  );
};

export default PokeDex;
