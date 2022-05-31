export const state = () => ({
  widgets: [],
})

export const actions = {
  async addWidget(context, { location }) {
    const weather = await this.$axios.get(
      `/api/weather/weatherData?lat=${location.lat}&lon=${location.lon}`
    )
    context.commit('ADD_WIDGET', { loc: location, data: weather.data })
  },
  deleteWidget(context, { widget }) {
    context.commit('DELETE_WIDGET', widget)
  },
  async reloadWidget(context, { widget }) {
    const weather = await this.$axios.get(
      `/api/weather/weatherData?lat=${widget.lat}&lon=${widget.lon}`
    )
    context.commit('RELOAD_WIDGET', { widget, weather: weather.data })
  },
}

export const mutations = {
  ADD_WIDGET(state, { loc, data }) {
    const widget = {
      cityName: loc.name,
      country: loc.country,
      state: loc.state,
      lat: loc.lat,
      lon: loc.lon,
      dailyForecasts: data.daily,
      hourlyForecasts: data.hourly,
      currentWeather: data.current,
    }
    state.widgets.push(widget)
  },
  DELETE_WIDGET(state, widget) {
    state.widgets = state.widgets.filter(
      (e) => e.lat !== widget.lat && e.lon !== widget.lon
    )
  },
  RELOAD_WIDGET(state, { widget, weather }) {
    widget.dailyForecasts = weather.daily
    widget.hourlyForecasts = weather.hourly
    widget.currentWeather = weather.current
    state.widgets = state.widgets.map(function (item) {
      return item.lat === widget.lat && item.lon === widget.lon ? widget : item
    })
  },
}
