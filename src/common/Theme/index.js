import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  color: {
    primary: "#7392b7",
    secondary: "#c5d5ea",
    error: "#e76f51",
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 4,
    backgroundColor: "#759EB8",
    textColor: "#FFFFFF",
    border: "#CCCCCC",
  },
});

export default theme;
