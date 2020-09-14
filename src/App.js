import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import WeekForecast from "./components/WeekForecast";
import DailyDetails from "./components/DailyDetails";
import Container from "@material-ui/core/Container";

const App = () => {
  return (
    <Container maxWidth={false} fixed disableGutters>
      <NavBar />
      <main>
        <WeekForecast />
        <DailyDetails />
      </main>
    </Container>
  );
};

export default App;
