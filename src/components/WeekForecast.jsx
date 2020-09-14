import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
  title: {
    fontSize: 14,
    alignContent: "center",
  },
}));

const arrayData = ["Title", "Title", "Title", "Title", "Title"];
let idCount = 1;

const WeekForecast = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      {arrayData.map((data) => (
        <Grid item xs key={idCount++}>
          <Card>
            <CardContent>
              <Typography className={classes.title}>data</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default WeekForecast;
