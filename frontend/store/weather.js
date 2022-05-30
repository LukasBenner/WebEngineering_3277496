export const state = () => ({
  widgets: []
})

export const actions = {
  async addWidget(context, {cityName}){
    const location = await this.$axios.get(`/api/weather/geo?q=${cityName}`);
    const weather = await this.$axios.get(`/api/weather/weatherData?lat=${location.data.lat}&lon=${location.data.lon}`);
    context.commit('addWidget', {loc: location.data, data:weather.data});
  }
}

export const mutations = {
  addWidget(state, {loc, data}){
    const widget = 
    { 
      cityName: loc.name,
      lat: loc.lat,
      lon: loc.lon,
      dailyForecasts: data.daily,
      hourlyForecasts: data.hourly,
      currentWeather: data.current
    }
    state.widgets.push(widget);
    console.log(widget);
    
  }
}