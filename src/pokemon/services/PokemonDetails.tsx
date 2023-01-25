import React, { useState, useEffect } from "react";
import { PokemonDetail } from "../interfaces/PokemonDetail";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonsDetails } from "./getPokemonDetails";
import { useQuery } from "react-query";


interface PokemonDetailsProps {}


export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const { data } = useQuery(`getPokemonDetails-${name}`, () =>
    getPokemonsDetails(name)
  );
  const selectedPokemonDetails = data;

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokemon Selecionado: {name}
          </Typography>
          <Button onClick={() => navigate("/")}>
            <Typography style={{ color: "white" }}>Voltar</Typography>
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Box m={2}>
          <img
            width="100%"
            height="auto"
            src={selectedPokemonDetails?.sprites.front_default}
            alt=""
          />
          {/* {JSON.stringify(selectedPokemonDetails?.sprites.front_default, undefined, 2)} */}
        </Box>
        <Typography variant="h3">{selectedPokemonDetails?.name}</Typography>
        <Typography>
          {selectedPokemonDetails?.types.map((type) => (
            <Typography>{type.type.name}</Typography>
          ))}

          <Box display="flex" justifyContent="row">
            <Typography>Espécie:</Typography>
            <Typography>{selectedPokemonDetails?.species.name}</Typography>
          </Box>

          <Box display="flex" justifyContent="row">
            <Typography>Altura:</Typography>
            <Typography>{selectedPokemonDetails?.height}</Typography>
          </Box>

          <Box display="flex" justifyContent="row">
            <Typography>Peso:</Typography>
            <Typography>{selectedPokemonDetails?.weight}</Typography>
          </Box>

          <Box display="flex" justifyContent="row">
            <Typography>Habilidades:</Typography>
            <Typography>
              {" "}
              {selectedPokemonDetails?.abilities.map((ability) => (
                <Typography>{ability.ability.name}</Typography>
              ))}
            </Typography>
          </Box>
        </Typography>
      </Container>
    </>
  );
};

export default PokemonDetails;
