import { listPokemons } from "../pokemon/services/listPokemons";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import { Button, CircularProgress, Grid, LinearProgress } from "@mui/material";
import PokedexCard from "./components/PokedexCard";
import { useQuery } from "react-query";

interface PokedexProps {}

export const Pokedex: React.FC<PokedexProps> = () => {
  const { data, isLoading, isRefetching, refetch, isStale } = useQuery(
    `listPokemons`,
    listPokemons,
    {
      onSuccess: (data) => console.log(`Sucesso!`),
      onError: (error) => console.log(`Erro!`),
      onSettled: (data) => console.log(`Settled!`),
    }
  );

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
          {isRefetching && (
            <LinearProgress variant="indeterminate" color="secondary" />
          )}
        </AppBar>
      </Box>

      <Container maxWidth="lg">
        <div style={{ marginTop: "1em", marginBottom: "1em" }}>
          {isStale && (
            <Button variant="outlined" onClick={() => refetch}>
              Refetch
            </Button>
          )}
        </div>
        {!isLoading ? (
          <Box m={2}>
            <Grid container spacing={2}>
              {data?.results.map((pokemon, key) => (
                <>
                  <Grid item xs={6} lg={3}>
                    <PokedexCard pokemon={pokemon} />
                  </Grid>
                </>
              ))}
            </Grid>
          </Box>
        ) : (
          <div>
            <CircularProgress />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Pokedex;
