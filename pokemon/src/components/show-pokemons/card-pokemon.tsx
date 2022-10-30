import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CardsPokemon } from "./cards-pokemns";
import { Box } from "@mui/system";
import { useStyles } from "./style";

type CardsProps = {
  name?: string;
  image?: string;
};

export const CardPokemon = ({ name, image }: CardsProps) => {
  const classes = useStyles();
  return (
    <Card
      sx={{
        width: { xs: 300, sm: 300, md: 300, lg: 200 },
        marginY: { xs: "5%", sm: "5%", md: "5%", lg: "0%" },
        marginX: "1%",
        opacity: "0.4",
        boxShadow:
          "rgba(237, 237, 237, .4) 0px 50px 100px -20px, rgba(0, 0, 0, 0) 0px 30px 60px -30px, rgba(0, 0, 0, 0) 0px -2px 6px 0px inset",
        backgroundColor: "#F5F5F5",
        transform: "perspective(800px) rotateY(25deg)",
        ":hover": {
          backgroundColor: "#EDEDED",
          transition: "0.9s",
          opacity: "0.9",
          transform: "perspective(800px) rotateY(0deg)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.image}
          //sx={{ padding: "10px", transition: "1.0s", willChange: "transform" }}
          image={image}
          alt="imagen de pokemon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            descripcion
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
