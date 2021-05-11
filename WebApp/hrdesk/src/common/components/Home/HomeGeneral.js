import React from "react";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import CustomCard from "./UIComponents/CustomCard";
import Orders from "./UIComponents/Orders";
import { styles } from "./HomeStyles";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

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
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    debugger;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={4} lg={4}>
                {/* <Paper className={fixedHeightPaper}> */}
                {/* <Chart /> <Card /> */}
                <CustomCard title="Employees" value="104" />
                {/* </Paper> */}
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={4}>
                {/* <Paper className={fixedHeightPaper}> */}
                <CustomCard title="Board" value="4" />
                {/* </Paper> */}
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                {/* <Paper className={fixedHeightPaper}> */}
                <CustomCard title="Human Resource" value="5" />
                {/* </Paper> */}
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                {/* <Paper className={fixedHeightPaper}> */}
                {/* <Chart /> <Card /> */}
                <CustomCard title="Project Managers" value="5" />
                {/* </Paper> */}
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={4}>
                {/* <Paper className={fixedHeightPaper}> */}
                <CustomCard title="Developers" value="100" />
                {/* </Paper> */}
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                {/* <Paper className={fixedHeightPaper}> */}
                <CustomCard title="Quality assurance" value="30" />
                {/* </Paper> */}
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Orders />
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
