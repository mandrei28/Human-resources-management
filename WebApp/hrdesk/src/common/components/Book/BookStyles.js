import { withTheme } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100vw",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  copyright: {
    position: "fixed",
    bottom: theme.spacing(2),
  },
});

export { styles };
