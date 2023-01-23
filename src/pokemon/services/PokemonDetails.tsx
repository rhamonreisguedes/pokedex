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
import {useParams} from 'react-router-dom';
import { getPokemonsDetails } from "./getPokemonDetails";

interface PokemonDetailsProps {}


export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
  const { name } = useParams();
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<
    PokemonDetail | undefined
  >(undefined);

  useEffect(() => {
    if (!name) return;

    getPokemonsDetails(name).then((response) =>
      setSelectedPokemonDetails(response)
    );
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pokemon Selecionado: {name}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box m={2}>
          Pokemons:
          <h2>
            Pokemon Selecionado: {name}
          </h2>
          <img src={selectedPokemonDetails?.sprites.front_default} alt=""/>
          {/* {JSON.stringify(selectedPokemonDetails, undefined, 2)} */}
          {JSON.stringify(selectedPokemonDetails?.sprites.front_default, undefined, 2)}
        </Box>
      </Container>
    </div>
  );
};

export default PokemonDetails;
