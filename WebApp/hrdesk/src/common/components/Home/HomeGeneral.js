import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CustomCard from "./UIComponents/CustomCard";
import Meetings from "./UIComponents/Meetings";
import { styles } from "./HomeStyles";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Paper, Grid, Container, CssBaseline } from "@material-ui/core";

class HomeGeneral extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={4}>
                <CustomCard title="Employees" value="104" />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <CustomCard title="Board" value="4" />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <CustomCard title="Human Resource" value="5" />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <CustomCard title="Project Managers" value="5" />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <CustomCard title="Developers" value="100" />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <CustomCard title="Quality assurance" value="30" />
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Meetings />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(HomeGeneral));
