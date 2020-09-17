import React from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import { TableRow } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { getDailyDetails } from "../redux/forecast/forecastAction";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
  },
  table: {
    paddingRight: theme.spacing(8),
    paddingLeft: theme.spacing(8),
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
}));

const DailyDetails = ({ dailyDetails }) => {
  const classes = useStyles();

  return dailyDetails && dailyDetails.length > 0 ? (
    <Grid container className={classes.root}>
      <Grid item xs className={classes.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hour</TableCell>
              <TableCell>Weather</TableCell>
              <TableCell>T (°C)</TableCell>
              <TableCell>Humidity (%)</TableCell>
              <TableCell>Wind (km/h)</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dailyDetails.map((item) => (
              <TableRow key={item.dt}>
                <TableCell>{item.dt_txt.split(" ")[1].slice(0, 5)}</TableCell>
                <TableCell>
                  <Box className={classes.box}>
                    <Avatar
                      variant="square"
                      alt="ciao"
                      src={
                        "http://openweathermap.org/img/wn/" +
                        item.weather[0].icon +
                        "@2x.png"
                      }
                    />
                    <Typography>{item.weather[0].description}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{item.main.temp}</TableCell>
                <TableCell>{item.main.humidity}</TableCell>
                <TableCell>{item.wind.speed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  ) : (
    <Typography>Loading...</Typography>
  );
};

const mapStateToProps = (state) => {
  return {
    dailyDetails: state.forecasts.dailyDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDailyDetails: (date) => dispatch(getDailyDetails(date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyDetails);
