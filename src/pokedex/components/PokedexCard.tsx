import React from "react";
import styled from "styled-components";
import { PokemonListInterface } from "../../pokemon/services/listPokemons";
import { useNavigate } from "react-router-dom";

interface PokedexCardProps {
  pokemon: PokemonListInterface;
}

const Card = styled.section`
  padding: 4em;
  border-radius: 0.5em;
  background: papayawhip;
`;

const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  function handleClick(pokemon: PokemonListInterface) {
    navigate(`/pokemon/${pokemon.name}`);
  }

  return (
    <>
      <Card onClick={() => handleClick(pokemon)}>{pokemon.name}</Card>
    </>
  );
};

export default PokedexCard;
