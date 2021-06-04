import React, { Component } from "react";
import Chart from "react-google-charts";
import { Grid } from "@material-ui/core";

export default class CompanyChartsGeneral extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={12} md={12} lg={6} xl={4}>
            <Chart
              width={"565px"}
              height={"750px"}
              chartType="PieChart"
              loader={<div>Age chart</div>}
              data={[
                ["Task", "Hours per Day"],
                ["20-30", 40],
                ["30-40", 20],
                ["40-50", 10],
                ["50+", 20],
              ]}
              options={{
                title: "Age chart",
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6} xl={4}>
            <Chart
              width={"565px"}
              height={"750px"}
              chartType="PieChart"
              loader={<div>Functions chart</div>}
              data={[
                ["Task", "Hours per Day"],
                ["Developers", 213],
                ["Quality assurance", 137],
                ["Project managers", 24],
                ["Operational managers", 16],
                ["Board", 3],
                ["Functional manager", 1],
              ]}
              options={{
                title: "Functions chart",
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12} xl={4}>
            <Chart
              width={"565px"}
              height={"750px"}
              chartType="PieChart"
              loader={<div>Provenience chart</div>}
              data={[
                ["Task", "Hours per Day"],
                ["Romania", 40],
                ["France", 5],
                ["UK", 10],
                ["Spain", 20],
              ]}
              options={{
                title: "Provenience chart",
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
