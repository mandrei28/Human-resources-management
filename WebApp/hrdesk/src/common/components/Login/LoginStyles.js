import hrDeskImage from "../../../media/HrDesk.jpg";

const styles = (theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${hrDeskImage})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  copyright: {
    position: "fixed",
    bottom: theme.spacing(2),
  },
});

export { styles };
