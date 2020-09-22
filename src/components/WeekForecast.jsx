import React, { useEffect } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import {
  fetchForecasts,
  getDailyDetails,
} from "../redux/forecast/forecastAction";
import { connect } from "react-redux";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
    alignItems: "stretch",
    justifyContent: "space-between",
  },
  cardStyle: {
    alignContent: "center",
    maxWidth: 150,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const WeekForecast = ({ forecasts, fetchForecasts, changeDetails }) => {
  useEffect(() => {
    fetchForecasts();
  }, []);

  const classes = useStyles();

  return (
    <Grid item container spacing={2} className={classes.root}>
      {forecasts.map((data) => (
        <Grid item xl md sm={4} xs={6} key={data.id}>
          <Card className={classes.cardStyle}>
            <CardActionArea onClick={() => changeDetails(data.id)}>
              <CardHeader
                title={data.dateToDisplay}
                subheader={data.dayOfWeek}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
              />

              <CardMedia
                className={classes.media}
                image={
                  "http://openweathermap.org/img/wn/" + data.icon + "@2x.png"
                }
                title={data.description}
              />

              <CardContent className={classes.content}>
                <Typography>{data.temp_max + "°"}</Typography>
                <Typography color="textSecondary">
                  {data.temp_min + "°"}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    forecasts: state.forecasts.forecasts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchForecasts: () => dispatch(fetchForecasts()),
    changeDetails: (date) => dispatch(getDailyDetails(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekForecast);
