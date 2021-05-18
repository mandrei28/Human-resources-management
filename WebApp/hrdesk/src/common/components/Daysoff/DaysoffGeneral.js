import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CustomCard from "../Home/UIComponents/CustomCard";
import Orders from "../Home/UIComponents/Orders";
import { styles } from "./DaysoffStyles";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Paper, Grid, Container, CssBaseline } from "@material-ui/core";
import Chart from "react-google-charts";
import { DataGrid, GridApi } from "@material-ui/data-grid";
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
    };
    this.columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "description", headerName: "Description", width: 250 },
      {
        field: "startDate",
        type: "date",
        headerName: "Start date",
        width: 210,
      },
      { field: "endDate", type: "date", headerName: "End date", width: 210 },
      { field: "status", headerName: "Status", width: 150 },
      { field: "verified", headerName: "Verified By", width: 200 },
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
            debugger;
            const fields = api
              .getAllColumns()
              .map((c) => c.field)
              .filter((c) => c !== "__check__" && !!c);
            const thisRow = {};

            fields.forEach((f) => {
              thisRow[f] = params.getValue(f);
            });

            return alert(JSON.stringify(thisRow, null, 4));
          };

          return (
            <div hidden={params.row.id === 1}>
              <DeleteIcon onClick={onClick} />
            </div>
          );
        },
      },
    ];

    this.rows = [
      {
        id: 1,
        description: "Snow",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
        command: <Button />,
      },
      {
        id: 2,
        description: "Lannister",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 3,
        description: "Lannister",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 4,
        description: "Stark",
        startDate: new Date(),
        endDate: new Date(),
        status: null,
        verified: null,
      },
      {
        id: 5,
        description: "Targaryen",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 6,
        description: "Melisandre",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: "Admin",
      },
      {
        id: 7,
        description: "Clifford",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 8,
        description: "Frances",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 9,
        description: "Roxie",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
      },
      {
        id: 10,
        description: "Roxie",
        startDate: new Date(),
        endDate: new Date(),
        status: "Approved",
        verified: null,
        command: <Button />,
      },
    ];
  }
  componentDidMount() {
    this.setState({ disabled: false });
  }

  openNewDaysoffDialog = () => {
    this.setState({ showNewDaysoffDialog: true });
  };

  closeNewDaysoffDialog = () => {
    this.setState({ showNewDaysoffDialog: false });
  };

  addNewDayoff = () => {};

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
                    [
                      "Daysoff",
                      "2021 Available daysoff",
                      "2021 Unavailable daysoff",
                    ],
                    ["", parseInt(15), parseInt(10)],
                  ]}
                  options={{
                    title: "Daysoff availability chart",
                    chartArea: { width: "70%" },
                    isStacked: true,
                    hAxis: {
                      viewWindow: {
                        min: 0,
                        max: 25,
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
                      rows={this.rows}
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
                onAdd={this.addNewDayoff}
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
