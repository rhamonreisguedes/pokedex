import React from "react";
import { PokemonListInterface } from "../../pokemon/services/listPokemons";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PokemonDetail } from "../../pokemon/interfaces/PokemonDetail";
import PokemonDetails from "../../pokemon/services/PokemonDetails";
import { Chip } from "@mui/material";
import { Box } from "@mui/system";

interface PokedexCardProps {
  pokemon: PokemonDetail;
}

// const Card = styled.section`
//   padding: 4em;
//   border-radius: 0.5em;
//   background: papayawhip;
// `;

const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  function handleClick(pokemon: PokemonDetail) {
    navigate(`/pokemon/${pokemon.name}`);
  }

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={() => handleClick(pokemon)}>
        <CardHeader
          title={pokemon.name}
          subheader={pokemon.types.map((type) => (
              <Chip label={type.type.name} variant="outlined" />
          ))}
        />
        <CardMedia
          component="img"
          height="194"
          image={pokemon.sprites.front_default}
          alt="Paella dish"
        />
      </Card>
    </>
  );
};

export default PokedexCard;
