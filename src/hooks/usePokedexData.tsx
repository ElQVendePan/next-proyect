import useFetch from '@/hooks/useFetch';

interface PokemonData {
  name: string;
  id: number;
  image: string;
  types: any[];
}

const usePokedexData = async (url: string) => {
  const PokedexList: PokemonData[] = [];
  const response = await useFetch(url);
  const pokemonsList = response.results;

  await Promise.all(pokemonsList.map(async (pokemon: any) => {
    const pokemonInfo = await useFetch(pokemon.url);
    const pokemonData: PokemonData = {
      name: pokemonInfo.name,
      id: pokemonInfo.id,
      image: pokemonInfo.sprites.other["official-artwork"].front_default,
      types: pokemonInfo.types
    }
    PokedexList.push(pokemonData);
  }));

  return {
    PokedexList
  }
}

export default usePokedexData;
