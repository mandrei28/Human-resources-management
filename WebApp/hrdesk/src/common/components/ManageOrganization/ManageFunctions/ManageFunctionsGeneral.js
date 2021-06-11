import React, { Component } from "react";
import {
  DataGrid,
  GridApi,
  GridToolbarContainer,
  GridToolbarExport,
} from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Container, CssBaseline } from "@material-ui/core";
import { styles } from "./ManageFunctionsStyles";
import EditIcon from "@material-ui/icons/Edit";
import FunctionDialog from "./UIElements/FunctionDialog";

class ManageFunctionsGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFunctionDialog: false,
      functions: [],
      functionModel: null,
    };
    this.columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "name", headerName: "Name", width: 220 },
      { field: "description", headerName: "Description", width: 600 },
      {
        field: "creationDate",
        headerName: "Creation date",
        width: 210,
        valueFormatter: (params) => params.value.split("T")[0],
      },
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
              onClick={this.openFunctionDialog}
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

            this.editFunction(thisRow);
          };
          const onDelete = () => {
            const api = params.api;
            const fields = api
              .getAllColumns()
              .map((c) => c.field)
              .filter((c) => c !== "__check__" && !!c);
            const thisRow = {};

            fields.forEach((f) => {
              thisRow[f] = params.getValue(f);
            });

            this.deleteFunction(thisRow.id);
          };

          return (
            <React.Fragment>
              <div style={{ paddingTop: "10px", cursor: "pointer" }}>
                <EditIcon onClick={onClick} />
              </div>
              <div
                style={{
                  paddingTop: "10px",
                  paddingLeft: "5px",
                  cursor: "pointer",
                }}
              >
                <DeleteIcon onClick={onDelete} />
              </div>
            </React.Fragment>
          );
        },
      },
    ];
  }

  async componentDidMount() {
    const functions = await this.props.onGetFunctions();
    this.setState({ functions });
    debugger;
  }

  openFunctionDialog = () => {
    this.setState({ showFunctionDialog: true });
  };

  closeFunctionDialog = () => {
    this.setState({ showFunctionDialog: false, functionModel: null });
  };

  deleteFunction = async (functionId) => {
    await this.props.onDeleteFunction(functionId);
    this.setState({
      functions: this.state.functions.filter(
        (functionModel, _) => functionModel.id !== functionId
      ),
    });
  };

  editFunction = async (functionModel) => {
    debugger;
    await this.setState({ functionModel: functionModel });
    this.openFunctionDialog();
  };

  addOrUpdateFunction = async (functionModel) => {
    console.info(this.state);
    debugger;
    if (this.state.functionModel === null) {
      var newFunction = await this.props.onAddFunction(functionModel);
      await this.setState({
        functions: [...this.state.functions, newFunction],
      });
    } else {
      await this.props.onUpdateFunction(functionModel);
      var index = this.state.functions.findIndex(
        (f) => f.id === functionModel.id
      );
      debugger;
      await this.setState((prevState) => {
        let functions = [...prevState.functions];
        functions[index] = functionModel;
        return {
          functions,
          functionModel: null,
        };
      });
    }
    this.closeFunctionDialog();
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: "40px" }}>
          <Paper className={classes.paper}>
            <div style={{ height: 560, width: "100%" }}>
              <DataGrid
                rows={this.state.functions}
                columns={this.columns}
                pageSize={10}
                rowHeight={45}
                disableSelectionOnClick={true}
              />
            </div>
          </Paper>
        </Grid>
        {this.state.showFunctionDialog && (
          <FunctionDialog
            onClose={this.closeFunctionDialog}
            functionModel={this.state.functionModel}
            onAddOrUpdate={this.addOrUpdateFunction}
          />
        )}
      </React.Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(
  withRouter(ManageFunctionsGeneral)
);
