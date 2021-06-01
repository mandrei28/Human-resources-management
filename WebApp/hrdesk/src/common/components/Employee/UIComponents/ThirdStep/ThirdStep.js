import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { styles } from "./ThirdStepStyles";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { Paper, Container, CssBaseline } from "@material-ui/core";

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

class ThirdStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: [0, 1, 2, 3],
      right: [4, 5, 6, 7],
      checked: [],
      leftChecked: [],
      rightChecked: [],
    };
  }

  componentDidMount() {
    debugger;
    this.setState({ left: this.props.user.left, right: this.props.user.right });
  }

  handleToggle = (value) => () => {
    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checked: newChecked,
      leftChecked: intersection(newChecked, this.state.left),
      rightChecked: intersection(newChecked, this.state.right),
    });
  };

  handleAllRight = async () => {
    await this.setState({
      right: this.state.right.concat(this.state.left),
      left: [],
      leftChecked: [],
      rightChecked: [],
      checked: [],
    });
    this.props.handleChange(this.state.left, this.state.right);
  };

  handleCheckedRight = async () => {
    await this.setState({
      right: this.state.right.concat(this.state.leftChecked),
      left: not(this.state.left, this.state.leftChecked),
      checked: not(this.state.checked, this.state.leftChecked),
      leftChecked: [],
    });
    this.props.handleChange(this.state.left, this.state.right);
  };

  handleCheckedLeft = async () => {
    await this.setState({
      left: this.state.left.concat(this.state.rightChecked),
      right: not(this.state.right, this.state.rightChecked),
      checked: not(this.state.checked, this.state.rightChecked),
      rightChecked: [],
    });
    this.props.handleChange(this.state.left, this.state.right);
  };

  handleAllLeft = async () => {
    await this.setState({
      left: this.state.left.concat(this.state.right),
      right: [],
      rightChecked: [],
      leftChecked: [],
      checked: [],
    });
    this.props.handleChange(this.state.left, this.state.right);
  };

  customList = (items, classes, text) => (
    <Paper className={classes.paper}>
      <Typography variant="h6" className={classes.title}>
        {text}
      </Typography>
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={this.handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={this.state.checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Container maxWidth="md">
          <Grid
            container
            spacing={2}
            justify="center"
            alignItems="center"
            className={classes.root}
          >
            <Grid item>
              {this.customList(this.state.left, classes, "All permissions")}
            </Grid>
            <Grid item>
              <Grid container direction="column" alignItems="center">
                <Button
                  variant="outlined"
                  size="small"
                  className={classes.button}
                  onClick={this.handleAllRight}
                  disabled={this.state.left.length === 0}
                  aria-label="move all right"
                >
                  ≫
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  className={classes.button}
                  onClick={this.handleCheckedRight}
                  disabled={this.state.leftChecked.length === 0}
                  aria-label="move selected right"
                >
                  &gt;
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  className={classes.button}
                  onClick={this.handleCheckedLeft}
                  disabled={this.state.rightChecked.length === 0}
                  aria-label="move selected left"
                >
                  &lt;
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  className={classes.button}
                  onClick={this.handleAllLeft}
                  disabled={this.state.right.length === 0}
                  aria-label="move all left"
                >
                  ≪
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              {this.customList(this.state.right, classes, "Selected")}
            </Grid>
          </Grid>
          <div
            style={{
              display: "flex",
              marginTop: 50,
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              color="default"
              onClick={this.props.handleBack}
              style={{ marginRight: 10 }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="secondary"
              //onClick={handleSubmit}
            >
              Save
            </Button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(ThirdStep));
