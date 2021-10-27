import { createUseStyles } from "react-jss";
import { Theme } from "./types";

const useStyles = createUseStyles((theme: Theme) => ({
  background: {
    padding: theme.background,
  },
  button: {
    display: "block",
    color: theme.buttonColor,
    fontWeight: theme.fontWeight,
    fontStyle: theme.fontFamily,
    fontSize: 12,
  },
  font: {
    fontFamily: theme.fontFamily,
    fontSize: 16,
  },
}));

export default useStyles;
