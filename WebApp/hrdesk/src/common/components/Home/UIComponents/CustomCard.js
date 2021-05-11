import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import employee from "../../../../media/employee.jpg";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    maxWidth: 370,
    position: "relative",
    height: 120,
  },
  media: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
  },
  fiCardContent: {
    color: "#ffffff",
    position: "relative",
    backgroundColor: "transparent",
  },
  fiCardText: {
    float: "right",
  },
}));

export default function CustomCard(props) {
  debugger;
  const classes = useStyles();
  return (
    <Box>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          media="picture"
          alt={props.title}
          image={employee}
          title={props.title}
        />
        <CardContent className={classes.fiCardContent}>
          <Typography gutterBottom variant="h5" component="h3">
            {props.title}
          </Typography>
          <Typography className={classes.fiCardText} variant="h3">
            {props.value}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
