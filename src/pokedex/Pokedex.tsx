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
import { useNavigate } from "react-router-dom";

interface PokedexProps {}

export const Pokedex: React.FC<PokedexProps> = () => {
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<
    PokemonListInterface | undefined
  >(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    listPokemons().then((response) => setPokemons(response.results));
  }, []);

  function handleClick(pokemon: PokemonListInterface){
    navigate(`/pokemon/${pokemon.name}`);
  }

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
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg">
        <Box m={2}>
          <Grid container spacing={2}>
            {pokemons.map((pokemon, key) => (
              <>
                <Grid item xs={6} lg={3}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {pokemon.name}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        onClick={() => handleClick(pokemon)}
                        size="small"
                      >
                        Abrir
                      </Button>
                    </CardActions>
                  </Card>
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
