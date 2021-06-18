import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class TeamDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {
        id: 0,
        name: "",
        description: "",
      },
    };
  }

  async componentDidMount() {
    if (this.props.team) {
      await this.setState({ team: this.props.team });
    }
  }

  handleTeamFieldChange = (event, field) => {
    this.setState((prevState) => {
      const { team } = prevState;
      team[field] = event.target.value;
      return { team };
    });
  };

  addOrUpdateTeam = async () => {
    await this.props.onAddOrUpdate(this.state.team);
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
            {" "}
            {this.props.team !== null ? "Update team" : "Create new team"}
          </DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
                </DialogContentText> */}
            <TextField
              error={this.state.team.description.length === 0}
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              type="text"
              fullWidth
              required
              onChange={(event) =>
                this.handleTeamFieldChange(event, "description")
              }
              value={this.state.team.description}
            />
            <TextField
              error={this.state.team.name.length === 0}
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              required
              onChange={(event) => this.handleTeamFieldChange(event, "name")}
              value={this.state.team.name}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.addOrUpdateTeam} color="primary">
              {this.props.team !== null ? "Update" : "Add"}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
