import React, { Component } from "react";
import Chart from "react-google-charts";
import { Grid } from "@material-ui/core";

export default class CompanyChartsGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ageData: [["Task", "Hours per Day"]],
      functionData: [["Task", "Hours per Day"]],
      countryData: [["Task", "Hours per Day"]],
    };
  }

  async componentDidMount() {
    const ageChart = await this.props.onGetAgeChart();
    const functionChart = await this.props.onGetFunctionChart();
    const countryChart = await this.props.onGetCountryChart();
    await this.setAgeChartData(ageChart);
    await this.setFunctionChartData(functionChart);
    await this.setCountryChartData(countryChart);
  }

  setAgeChartData = async (ageChart) => {
    await this.setState((prevState) => {
      var { ageData } = prevState;
      ageChart.forEach((age) => {
        var newAge = [];
        newAge[0] = age.key;
        newAge[1] = age.value;
        ageData = [...ageData, newAge];
      });
      return { ageData };
    });
  };

  setFunctionChartData = async (functionChart) => {
    await this.setState((prevState) => {
      var { functionData } = prevState;
      functionChart.forEach((fct) => {
        var newFunction = [];
        newFunction[0] = fct.key;
        newFunction[1] = fct.value;
        functionData = [...functionData, newFunction];
      });
      return { functionData };
    });
  };

  setCountryChartData = async (countryChart) => {
    await this.setState((prevState) => {
      var { countryData } = prevState;
      countryChart.forEach((country) => {
        var newCountry = [];
        newCountry[0] = country.key;
        newCountry[1] = country.value;
        countryData = [...countryData, newCountry];
      });
      return { countryData };
    });
  };

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
              data={this.state.ageData}
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
              data={this.state.functionData}
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
              data={this.state.countryData}
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
