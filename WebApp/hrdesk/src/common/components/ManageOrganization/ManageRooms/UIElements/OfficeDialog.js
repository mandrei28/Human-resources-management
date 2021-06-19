import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class OfficeDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      office: {
        id: 0,
        name: "",
        number: 0,
        location: "",
        capacity: 0,
      },
    };
  }

  async componentDidMount() {
    if (this.props.office) {
      await this.setState({ office: this.props.office });
    }
  }

  handleOfficeFieldChange = (event, field) => {
    this.setState((prevState) => {
      const { office } = prevState;
      office[field] = event.target.value;
      return { office };
    });
  };

  addOrUpdateOffice = async () => {
    await this.props.onAddOrUpdate(this.state.office);
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
            {this.props.office !== null ? "Update office" : "Create new office"}
          </DialogTitle>
          <DialogContent>
            <TextField
              error={this.state.office.name.length === 0}
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              required
              onChange={(event) => this.handleOfficeFieldChange(event, "name")}
              value={this.state.office.name}
            />
            <TextField
              error={this.state.office.number === null}
              margin="dense"
              id="number"
              label="Number"
              type="number"
              fullWidth
              required
              onChange={(event) =>
                this.handleOfficeFieldChange(event, "number")
              }
              value={this.state.office.number}
            />
            <TextField
              error={this.state.office.location.length === 0}
              margin="dense"
              id="location"
              label="Location"
              type="text"
              fullWidth
              required
              onChange={(event) =>
                this.handleOfficeFieldChange(event, "location")
              }
              value={this.state.office.location}
            />
            <TextField
              error={this.state.office.capacity === null}
              margin="dense"
              id="capacity"
              label="Capacity"
              type="text"
              fullWidth
              required
              onChange={(event) =>
                this.handleOfficeFieldChange(event, "capacity")
              }
              value={this.state.office.capacity}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.addOrUpdateOffice} color="primary">
              {this.props.office !== null ? "Update" : "Add"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
