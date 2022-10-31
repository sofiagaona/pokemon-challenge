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
  type?: string;
  baseExperience?: string;
  habilite?: string;
};

export const CardPokemon = ({
  name,
  image,
  type,
  baseExperience,
  habilite,
}: CardsProps) => {
  const features = [
    ["Tipo", type],
    ["Base Experiencia", baseExperience],
    ["Habiliades", habilite],
  ];
  const classes = useStyles();
  return (
    <Card
      sx={{
        width: { xs: 200, sm: 200, md: 200, lg: 200, xl: 250 },
        marginY: { xs: "5%", sm: "5%", md: "5%", lg: "0%" },
        marginX: "1%",
        opacity: "0.4",
        boxShadow:
          "rgba(237, 237, 237, .4) 0px 50px 100px -20px, rgba(0, 0, 0, 0) 0px 30px 60px -30px, rgba(0, 0, 0, 0) 0px -2px 6px 0px inset",
        backgroundColor: "#F5F5F5",
        transform: "perspective(800px) rotateY(25deg)",
        height: { xs: 250, sm: 250, md: 250, lg: 250, xl: 310 },
        ":hover": {
          backgroundColor: "#EDEDED",
          transition: "0.9s",
          opacity: "0.9",
          transform: "perspective(800px) rotateY(0deg) scale(1.25)",
          height: { xs: 320, sm: 320, md: 320, lg: 320, xl: 420 },
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.image}
          image={image}
          alt="imagen de pokemon"
        />
        <CardContent sx={{ backgroundColor: "#4e34e109" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            {name}
          </Typography>
          {features.length !== 0 &&
            features.map((item) => {
              return (
                <Box key={item[1]} display="flex">
                  <Typography
                    sx={{
                      fontSize: ".8rem",
                      fontWeight: "bold",
                      color: "rgb(6, 6, 5)",
                      marginLeft: "5%",
                    }}
                  >
                    {`${item[0]}:`}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: ".8rem",
                      color: "rgb(6, 6, 5)",
                      marginLeft: "5%",
                    }}
                  >
                    {item[1]}
                  </Typography>
                </Box>
              );
            })}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
