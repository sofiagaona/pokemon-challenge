import { createTheme, responsiveFontSizes } from "@mui/material";

export const theme = responsiveFontSizes(
  createTheme({
    spacing: 4,
    typography: {
      fontFamily: "Inter, sans-serif",
      h1: {
        fontSize: "5rem",
      },
      h2: {
        fontSize: "2.5rem",
      },
      h3: {
        fontSize: "2rem",
      },
      h4: {
        fontSize: "1.2rem",

        fontWeight: 200,
      },
      body1: {
        fontSize: "1rem",
      },
    },
    palette: {
      background: {
        default: "#009900", //green
      },
      primary: {
        main: "#EDEDED", //purpure
        contrastText: "#212121",
      },
      secondary: {
        main: "#ffffff", //white
      },

      text: {
        primary: "#4e34e1", //purpure
        secondary: "#616161", //gray
      },
      action: {
        disabled: "#ffffff",
      },
    },
  })
);
