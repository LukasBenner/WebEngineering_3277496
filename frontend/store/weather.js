export const state = () => ({
  dailyForecasts: [],
  hourlyForecasts: []
})


export const getters = {
  getDailyForecasts: (state) => state.dailyForecasts
}


export const actions = {
  async getWeather(context, {lat, lon}){
    const {data} = await this.$axios.get(`/api/weather/weatherData?lat=${lat}&lon=${lon}`);
    context.commit('setDailyForecasts', data.daily);
    context.commit('setHourlyForecasts', data.hourly)
  }
}

export const mutations = {
  setDailyForecasts(state, payload){
    state.dailyForecasts = [];
    for (const key in payload) {
      if (Object.hasOwnProperty.call(payload, key)) {
        const forecast = payload[key];
        state.dailyForecasts.push(forecast);
      }
    }
  },
  setHourlyForecasts(state, payload){
    state.hourlyForecasts = [];
    for (const key in payload) {
      if (Object.hasOwnProperty.call(payload, key)) {
        const forecast = payload[key];
        state.hourlyForecasts.push(forecast);
      }
    }
  }
}