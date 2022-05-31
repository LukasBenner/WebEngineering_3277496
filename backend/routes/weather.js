const router = require('express').Router();
const axios = require('axios')

router.get('/geo', (req, res) => {
  let limit = 5;
  try {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?appid=${process.env.OPEN_WEATHER_MAP_TOKEN}&limit=${limit}&q=${req.query.q}`
      )
      .then((response) => {
        console.log(response);
        res.status(200).send(response.data);
      })
      .catch((err) => res.send(err))
  } catch (error) {
    console.error('GG', error)
  }
})


router.get('/weatherData', async (req, res) => {
  try {
    let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${req.query.lat}&lon=${req.query.lon}&exclude=minutely,alerts&lang=de&appid=${process.env.OPEN_WEATHER_MAP_TOKEN}&units=metric`
      )
      .catch((err) => res.send(err))

    let resData = parseResponse(response.data);
    res.status(200).send(resData);

  } 
  catch (error) {
    console.error('GG', error)
  }
})

function parseResponse(json){

  const conditions = new Object();
  const current = new Object();
  current.sunrise = new Intl.DateTimeFormat('de-DE', { timeStyle: "short" }).format(new Date(json.current.sunrise * 1000));
  current.sunset = new Intl.DateTimeFormat('de-DE', { timeStyle: "short" }).format(new Date(json.current.sunset * 1000));
  current.temperature = Math.round(json.current.temp);
  current.temperature_feels_like = Math.round(json.current.feels_like);
  current.icon = `http://openweathermap.org/img/wn/${json.current.weather[0].icon}@2x.png`;

  conditions.current = current;

  let days = json.daily.slice(1)
  let dailyForecasts = [];

  for(let index in days) {
      const day_forecast = days[index];
      const day = new Object(); 
      day.icon = `http://openweathermap.org/img/wn/${day_forecast.weather[0].icon}@2x.png`;
      day.temperature = Math.round(day_forecast.temp.day);
      day.temperatureMax = Math.round(day_forecast.temp.max);
      day.temperatureMin = Math.round(day_forecast.temp.min);
      day.description = day_forecast.weather[0].description;
      day.id = index;
      day.day = new Intl.DateTimeFormat('de-DE', { weekday: 'short' }).format(new Date(day_forecast.dt * 1000));

      dailyForecasts.push(day);
  }
  conditions.daily = dailyForecasts;

  let hours = json.hourly.slice(1,24);
  let hourlyForecasts = [];

  for(let index in hours) {
      const hour_forecast = hours[index];
      const hour = new Object(); 
      hour.icon = `http://openweathermap.org/img/wn/${hour_forecast.weather[0].icon}@2x.png`;
      hour.temperature = Math.round(hour_forecast.temp);
      hour.feelsLike = Math.round(hour_forecast.feels_like);
      hour.description = hour_forecast.weather[0].description;
      hour.id = index;
      hour.time = new Intl.DateTimeFormat('de-DE', {hour: "2-digit"}).format(new Date(hour_forecast.dt * 1000));

      hourlyForecasts.push(hour);
  }
  conditions.hourly = hourlyForecasts;


  return conditions;
}

module.exports = router;