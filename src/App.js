import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import WeekForecast from "./components/WeekForecast";
import DailyDetails from "./components/DailyDetails";

const App = () => {
  return (
    <div className="App container-fluid p-0">
      <NavBar/>
      <WeekForecast/>
      <DailyDetails/>
    </div>
  );
}

export default App;
