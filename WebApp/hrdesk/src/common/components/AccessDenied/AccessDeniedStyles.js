import { withTheme } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100vw",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
});

export { styles };
