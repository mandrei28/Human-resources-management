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
    this.state = {
      meetings: [],
      statistics: {
        employees: 0,
        board: 0,
        humanResource: 0,
        projectManager: 0,
        developers: 0,
        qualityAssurance: 0,
      },
    };
  }

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  async componentDidMount() {
    const meetings = await this.props.onGetUpcomingMeetings();
    const statistics = await this.props.onGetStatistics();
    await this.setState({ meetings, statistics });
  }

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
                <CustomCard
                  title="Employees"
                  value={this.state.statistics.employees}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <CustomCard title="Board" value={this.state.statistics.board} />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <CustomCard
                  title="Human Resource"
                  value={this.state.statistics.humanResource}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <CustomCard
                  title="Project Managers"
                  value={this.state.statistics.projectManager}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <CustomCard
                  title="Developers"
                  value={this.state.statistics.developers}
                />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <CustomCard
                  title="Quality assurance"
                  value={this.state.statistics.qualityAssurance}
                />
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Meetings meetings={this.state.meetings} />
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
