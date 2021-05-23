import React, { Component } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import employee from "../../../../media/employee.jpg";
import PersonDialog from "./PersonDialog";

const styles = (theme) => ({
  root: {
    display: "flex",
    cursor: "pointer",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    paddingBottom: "10px !important",
  },
  cover: {
    width: 150,
  },
  bottomText: {
    paddingTop: "20px",
  },
});

class CustomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPersonDialog: false,
    };
  }

  showPersonDialog = () => {
    this.setState({ showPersonDialog: true });
  };

  closePersonDialog = () => {
    this.setState({ showPersonDialog: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Card className={classes.root} onClick={this.showPersonDialog}>
          <CardMedia
            className={classes.cover}
            image={employee}
            title="User photo"
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h6" variant="h6">
                {this.props.user.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {this.props.user.room}
              </Typography>
              <Typography
                className={classes.bottomText}
                variant="subtitle1"
                color="textSecondary"
              >
                {this.props.user.function}
              </Typography>
            </CardContent>
          </div>
        </Card>
        {this.state.showPersonDialog && (
          <PersonDialog
            user={this.props.user}
            closeDialog={this.closePersonDialog}
          />
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(CustomCard));
