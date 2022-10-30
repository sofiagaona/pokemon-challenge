//import { makeStyles } from "@mui/styles";

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  // root: {
  //   width: { xs: 300, sm: 300, md: 300, lg: 200 },
  //   height: { xs: 300, sm: 300, md: 300, lg: 200 },
  //   marginY: "5%",
  //   marginX: "2%",
  //   opacity: "0.6",
  //   transform: "perspective(800px) rotateY(25deg)",
  //   ":hover": {
  //     opacity: "0.9",
  //     transform: "perspective(800px) rotateY(0deg)",
  //   },
  // },
  image: {
    transform: "perspective(800px) rotateY(35deg)",
    transition: "0.5s",
    transformOrigin: "center",
    "&:hover": {
      transform: "perspective(800px) rotateY(0deg)",
      opacity: "1",
    },
  },
}));
