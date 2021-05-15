import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CustomCard from "../Home/UIComponents/CustomCard";
import Orders from "../Home/UIComponents/Orders";
import { styles } from "./DaysoffStyles";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Paper, Grid, Container, CssBaseline } from "@material-ui/core";

class DaysoffGeneral extends React.Component {
  componentDidMount() {
    debugger;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <div>Daysoff</div>
          </Container>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  withRouter(DaysoffGeneral)
);
