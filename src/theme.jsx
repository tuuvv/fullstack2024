import { experimental_extendTheme as extendTheme } from "@mui/material/styles"
// Create a theme instance.
const theme = extendTheme({
  trelloCustom:{
    appBarHeight: '48px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#6698b3",
        },
        secondary: {
          main: "#1b4043",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#1330ec",
        },
        secondary: {
          main: "#2b7c74",
        },
      },
    },
  },
});

export default theme