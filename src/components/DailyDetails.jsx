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
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  table: {
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      paddingRight: theme.spacing(16),
      paddingLeft: theme.spacing(16),
    },
  },
  box: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  cell: {
    textAlign: "center",
    padding: 0,
  },
  cellBox: {
    padding: theme.spacing(1),
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
              <TableCell className={classes.cell}>Hour</TableCell>
              <TableCell className={classes.cell}>Weather</TableCell>
              <TableCell className={classes.cell}>T (°C)</TableCell>
              <TableCell className={classes.cell}>Humidity (%)</TableCell>
              <TableCell className={classes.cell}>Wind (km/h)</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dailyDetails.map((item) => (
              <TableRow key={item.dt}>
                <TableCell className={classes.cell}>
                  {item.dt_txt.split(" ")[1].slice(0, 5)}
                </TableCell>
                <TableCell className={classes.cellBox}>
                  <Box className={classes.box}>
                    <Avatar
                      variant="square"
                      alt="iconWeather"
                      src={
                        "http://openweathermap.org/img/wn/" +
                        item.weather[0].icon +
                        "@2x.png"
                      }
                    />
                    <Typography>{item.weather[0].description}</Typography>
                  </Box>
                </TableCell>
                <TableCell className={classes.cell}>{item.main.temp}</TableCell>
                <TableCell className={classes.cell}>
                  {item.main.humidity}
                </TableCell>
                <TableCell className={classes.cell}>
                  {(item.wind.speed * 3.6).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  ) : (
    <Grid container justify={"center"}>
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    dailyDetails: state.forecasts.dailyDetails,
  };
};

export default connect(mapStateToProps)(DailyDetails);
