import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./DaysoffStyles";
import { withRouter } from "react-router-dom";
import { Paper, Grid, Container, CssBaseline } from "@material-ui/core";
import Chart from "react-google-charts";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "./DaysoffStyles.css";
import DaysoffDialog from "./UIComponents/DaysoffDialog";

class DaysoffGeneral extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      showNewDaysoffDialog: false,
      admins: [],
      dayoffs: [],
      chartData: {
        total: 0,
        used: 0,
      },
    };
    this.columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "description", headerName: "Description", width: 325 },
      {
        field: "startDate",
        type: "date",
        headerName: "Date",
        width: 150,
        valueFormatter: (params) => params.value.split("T")[0],
      },
      {
        field: "endDate",
        type: "string",
        headerName: "End date",
        width: 150,
        valueFormatter: (params) => params.value.split("T")[0],
      },
      {
        field: "status",
        headerName: "Status",
        width: 120,
        valueFormatter: (params) =>
          params.value === 0
            ? "Waiting"
            : params.value === 1
            ? "Refused"
            : "Approved",
      },
      { field: "verifiedBy", headerName: "Verified By", width: 260 },
      {
        field: "",
        width: 100,
        disableColumnMenu: true,
        sortable: false,
        align: "center",
        headerClassName: "custom-grid-header",
        renderHeader: (params) => {
          return (
            <Button
              disabled={this.state.disabled}
              variant="contained"
              color="primary"
              onClick={this.openNewDaysoffDialog}
            >
              NEW
            </Button>
          );
        },
        renderCell: (params) => {
          const onClick = () => {
            const api = params.api;
            const fields = api
              .getAllColumns()
              .map((c) => c.field)
              .filter((c) => c !== "__check__" && !!c);
            const thisRow = {};

            fields.forEach((f) => {
              thisRow[f] = params.getValue(f);
            });

            this.deleteDayoff(thisRow.id);
          };

          return (
            <div hidden={params.row.status === 1 || params.row.status === 2}>
              <DeleteIcon onClick={onClick} />
            </div>
          );
        },
      },
    ];
  }

  async componentDidMount() {
    const admins = await this.props.onGetAdmins();
    const dayoffs = await this.props.onGetDayoffs();
    const chartData = await this.props.onGetDayoffChartData();
    this.setState({
      disabled: chartData.used >= chartData.total,
      admins,
      dayoffs,
      chartData,
    });
  }

  openNewDaysoffDialog = () => {
    this.setState({ showNewDaysoffDialog: true });
  };

  closeNewDaysoffDialog = () => {
    this.setState({ showNewDaysoffDialog: false });
  };

  addDayoff = async (dayoff) => {
    if (
      dayoff.description !== "" &&
      dayoff.adminModel !== null &&
      dayoff.startDate <= dayoff.endDate
    ) {
      const dayoffModel = await this.props.onAddDayoff(dayoff);
      await this.setState((prevState) => ({
        dayoffs: [dayoffModel, ...prevState.dayoffs],
      }));
      this.closeNewDaysoffDialog();
    }
  };

  deleteDayoff = async (dayoffId) => {
    await this.props.onDeleteDayoff(dayoffId);
    this.setState({
      dayoffs: this.state.dayoffs.filter((dayoff, _) => dayoff.id !== dayoffId),
    });
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
              <Grid item xs={12} md={12} lg={12}>
                <Chart
                  width={"1100px"}
                  height={"120px"}
                  chartType="BarChart"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Daysoff", "2021 Available", "2021 Used"],
                    [
                      "",
                      this.state.chartData.total - this.state.chartData.used,
                      this.state.chartData.used,
                    ],
                  ]}
                  options={{
                    title: "Daysoff availability chart",
                    chartArea: { width: "70%" },
                    isStacked: true,
                    hAxis: {
                      viewWindow: {
                        min: 0,
                        max: this.state.chartData.total,
                      },
                      format: "0",
                    },
                    vAxis: {},
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Paper className={classes.paper}>
                  <div style={{ height: 560, width: "100%" }}>
                    <DataGrid
                      rows={this.state.dayoffs}
                      columns={this.columns}
                      pageSize={10}
                      rowHeight={45}
                      disableSelectionOnClick={true}
                    />
                  </div>
                </Paper>
              </Grid>
            </Grid>{" "}
            {this.state.showNewDaysoffDialog && (
              <DaysoffDialog
                onClose={this.closeNewDaysoffDialog}
                onAdd={this.addDayoff}
                admins={this.state.admins}
              />
            )}
          </Container>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(
  withRouter(DaysoffGeneral)
);
