import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import { TableRow } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
  },
  table: {
    paddingRight: theme.spacing(8),
    paddingLeft: theme.spacing(8),
  },
}));

const DailyDetails = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Orari</TableCell>
              <TableCell>dato 1</TableCell>
              <TableCell>dato 2</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow key={1}>
              <TableCell>1</TableCell>
              <TableCell>aaa</TableCell>
              <TableCell>bbb</TableCell>
            </TableRow>
            <TableRow key={2}>
              <TableCell>2</TableCell>
              <TableCell>ccc</TableCell>
              <TableCell>ddd</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default DailyDetails;
