import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class FunctionDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFunction: {
        id: 0,
        description: "",
        name: "",
      },
    };
  }

  async componentDidMount() {
    if (this.props.functionModel) {
      await this.setState({ userFunction: this.props.functionModel });
    }
  }

  handleFunctionFieldChange = (event, field) => {
    this.setState((prevState) => {
      const { userFunction } = prevState;
      userFunction[field] = event.target.value;
      return { userFunction };
    });
  };

  addOrUpdateFunction = async () => {
    await this.props.onAddOrUpdate(this.state.userFunction);
  };

  render() {
    return (
      <div>
        <Dialog
          open
          onClose={this.props.onClose}
          aria-labelledby="form-dialog-title"
          fullWidth
          maxWidth="xs"
        >
          <DialogTitle id="form-dialog-title">
            {this.props.functionModel !== null
              ? "Update function"
              : "Create new function"}
          </DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
                </DialogContentText> */}
            <TextField
              error={this.state.userFunction.description.length === 0}
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              required
              onChange={(event) =>
                this.handleFunctionFieldChange(event, "description")
              }
              value={this.state.userFunction.description}
            />
            <TextField
              error={this.state.userFunction.name.length === 0}
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              required
              onChange={(event) =>
                this.handleFunctionFieldChange(event, "name")
              }
              value={this.state.userFunction.name}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.addOrUpdateFunction} color="primary">
              {this.props.functionModel !== null ? "Update" : "Add"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
