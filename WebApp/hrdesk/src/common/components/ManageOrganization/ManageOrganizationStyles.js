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
  tabText: {
    fontSize: "0.9rem",
    fontWeight: "600",
  },
});

export { styles };
