import React, { useEffect, useState } from "react";
import {
  listPokemons,
  PokemonListInterface,
} from "../pokemon/services/listPokemons";
import { getPokemonsDetails } from "../pokemon/services/getPokemonDetails";
import { PokemonDetail } from "../pokemon/interfaces/PokemonDetail";
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

import PokedexCard from "./components/PokedexCard";

interface PokedexProps {}

export const Pokedex: React.FC<PokedexProps> = () => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<
    PokemonListInterface | undefined
  >(undefined);


  useEffect(() => {
    listPokemons().then((response) => setPokemons(response.results));
  }, []);



  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
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
              Pokedex
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg">
        <Box m={2}>
          <Grid container spacing={2}>
            {pokemons.map((pokemon, key) => (
              <>
                <Grid item xs={6} lg={3}>
                  <PokedexCard pokemon={pokemon}/>
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Pokedex;
