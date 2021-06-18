import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Table,
  Link,
} from "@material-ui/core";

const styles = (theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
});

class Meetings extends React.Component {
  onSeeMoreMeetingsClick = () => {
    this.props.history.push("/meetings");
  };
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Upcoming meetings
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Meeting room</TableCell>
              <TableCell align="right">Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.meetings.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.title}</TableCell>
                <TableCell>
                  {row.startDate.replace("T", " ").split(".")[0]}
                </TableCell>
                <TableCell>
                  {row.endDate.replace("T", " ").split(".")[0]}
                </TableCell>
                <TableCell>{row.roomName}</TableCell>
                <TableCell align="right">{row.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <Link color="primary" onClick={this.onSeeMoreMeetingsClick}>
            See more meetings
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(Meetings));
