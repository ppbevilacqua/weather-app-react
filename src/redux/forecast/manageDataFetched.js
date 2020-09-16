export const manageDataFetched = (fetchedData) => {
  // con la funzione groupBy i dati presi dalla richiesta API vengono raggruppati
  // per data, per avere i dati da visualizzare nelle card delle previsioni settimanali
  // {
  //  "2020-09-16" : [ {obj1}, {obj2}...],
  //  "2020-09-17" : [ {obj1}, {obj2}...],
  // }
  const forecastsByDay = groupBy("dt_txt")(fetchedData[0].list);

  // per ogni giorno viene creato un nuovo oggetto con i dati
  // da visualizzare nel riepilogo settimanale :
  // { id, temp_min, temp_max, description, icon}

  return Object.keys(forecastsByDay).map((key) => {
    const dailyDetail = forecastsByDay[key];

    // conversione da timestamp a oggetto Date
    const dateObj = new Date(dailyDetail[0].dt * 1000);

    let dateToDisplay = dateObj.toDateString().split(" ");
    dateToDisplay = dateToDisplay[2] + " " + dateToDisplay[1];

    return {
      id: key,
      dateToDisplay,
      dayOfWeek: daysWeek[dateObj.getDay()],
      temp_min: dailyDetail.reduce(
        (min, item) => (item.main.temp_min < min ? item.main.temp_min : min),
        dailyDetail[0].main.temp_min
      ),
      temp_max: dailyDetail.reduce(
        (max, item) => (item.main.temp_max > max ? item.main.temp_max : max),
        dailyDetail[0].main.temp_max
      ),
      // se il giorno corrente ha i dati delle 8 fasce orarie vengono prese le previsioni
      // delle ore 12 presenti all'indice 4. Altrimenti vengono prese le previsioni
      // della prima fascia oraria disponibile
      description:
        dailyDetail.length === 8
          ? dailyDetail[4].weather[0].description
          : dailyDetail[0].weather[0].description,
      icon:
        dailyDetail.length === 8
          ? dailyDetail[4].weather[0].icon
          : dailyDetail[0].weather[0].icon,
    };
  });
};

// https://gist.github.com/JamieMason/0566f8412af9fe6a1d470aa1e089a752
const groupBy = (key) => (array) =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key].split(" ")[0];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

const daysWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
