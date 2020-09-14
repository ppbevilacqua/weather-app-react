import React from "react";
import DayCard from "./DayCard";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    flexDirection: "row",
  },
  title: {
    fontSize: 14,
  },
  cardContainer: {
    width: "80%",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
  },
}));

const WeekForecast = () => {
  const classes = useStyles();

  return (
    /*<div className="row m-0 justify-content-center">
            <div className={classes.cardContainer} >*/
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item spacing={2}>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title}>Title</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item spacing={2}>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title}>Title</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item spacing={2}>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title}>Title</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item spacing={2}>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title}>Title</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item spacing={2}>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title}>Title</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WeekForecast;
