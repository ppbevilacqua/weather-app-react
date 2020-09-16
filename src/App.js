import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import WeekForecast from "./components/WeekForecast";
import DailyDetails from "./components/DailyDetails";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const App = () => {
  return (
    <Container maxWidth={false} fixed disableGutters>
      <Grid container direction="column" spacing={0}>
        <Grid item>
          <NavBar />
        </Grid>

        <main>
          <WeekForecast />
          <Grid item>
            <DailyDetails />
          </Grid>
        </main>
      </Grid>
    </Container>
  );
};

export default App;
