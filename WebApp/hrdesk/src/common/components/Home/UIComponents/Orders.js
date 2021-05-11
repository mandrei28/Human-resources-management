import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, start, end, room, description) {
  return { id, date, start, end, room, description };
}

const rows = [
  createData(0, "16 Mar, 2019", "10:00", "11:00", "M1", "Refinement"),
  createData(0, "16 Mar, 2019", "10:00", "11:00", "M1", "Refinement"),
  createData(0, "16 Mar, 2019", "10:00", "11:00", "M1", "Refinement"),
  createData(0, "16 Mar, 2019", "10:00", "11:00", "M1", "Refinement"),
  createData(0, "16 Mar, 2019", "10:00", "11:00", "M1", "Refinement"),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Upcoming meetings</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Start</TableCell>
            <TableCell>End</TableCell>
            <TableCell>Meeting room</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.start}</TableCell>
              <TableCell>{row.end}</TableCell>
              <TableCell>{row.room}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more meetings
        </Link>
      </div>
    </React.Fragment>
  );
}
