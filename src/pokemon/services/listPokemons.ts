import axios from "axios";
import { PokemonDetail } from "../interfaces/PokemonDetail";
import { getPokemonsDetails } from "./getPokemonDetails";

export interface PokemonListInterface {
  name: string;
  url: string;
}

interface listPokemonsInterface {
  count: number;
  next: null | string;
  previous: null | string;
  results: PokemonDetail[];
}

export async function listPokemons(): Promise<listPokemonsInterface> {
  const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon`;

  const response = await axios.get<listPokemonsInterface>(endpoint);

  const promiseArr = await response.data.results.map(({ name }) =>
    getPokemonsDetails(name)
  )

  const resultsPromise = await Promise.all(promiseArr)

  return {
    ...response.data,
    results: resultsPromise
  };
}
