const styles = (theme) => ({
  root: {
    display: "flex",
    width: "100vw",
  },
  appBarSpacer: {
    paddingTop: "35px",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
});

export { styles };
