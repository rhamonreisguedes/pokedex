import axios from "axios";
import { PokemonDetail } from "../interfaces/PokemonDetail";

export async function getPokemonsDetails(name: string | undefined): Promise<PokemonDetail> {
  const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon/${name}`;

  const response = await axios.get<PokemonDetail>(endpoint);

  //await 2 seconds to simulate a bad connection

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return response.data;
}
