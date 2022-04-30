const router = require('express').Router();
const axios = require('axios')

router.get('/geo', (req, res) => {
  try {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?appid=${req.query.appid}&q=${req.query.q}`
      )
      .then((response) => {
        res.status(200).send(response.data[0])
      })
      .catch((err) => res.send(err))
  } catch (error) {
    console.error('GG', error)
  }
})


router.get('/weatherData', (req, res) => {
  try {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${req.query.lat}&lon=${req.query.lon}&exclude=minutely,alerts&appid=${req.query.appid}&units=metric`
      )
      .then((response) => {
        res.status(200).send(response.data)
      })
      .catch((err) => res.send(err))
  } catch (error) {
    console.error('GG', error)
  }
})

module.exports = router;