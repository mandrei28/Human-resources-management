import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import defaultuser from "../../../../media/defaultuser.jpg";
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
            image={
              this.props.user.imageSrc !== null
                ? this.props.user.imageSrc
                : defaultuser
            }
            title="User photo"
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h6" variant="h6">
                {this.props.user.lastName + " " + this.props.user.firstName}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {this.props.user.officeName}
              </Typography>
              <Typography
                className={classes.bottomText}
                variant="subtitle1"
                color="textSecondary"
              >
                {this.props.user.functionName}
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
