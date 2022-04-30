<template>
  <div class="hourlyForecasts">
    <div v-for="forecast in dailyForecasts" :key="forecast.dt" class="hourly">
      <hourly-forecast :dt="forecast.dt" :temp="forecast.temp"/>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import HourlyForecast from './HourlyForecast.vue'

export default {
  name:'WeatherWidget',
  components:{
    HourlyForecast
  },
  mounted(){
    this.$store.dispatch('weather/getWeather', {lat: 10, lon: 10})
  },
  computed:{
      ...mapState({dailyForecasts : state => state.weather.dailyForecasts})
  },
  methods:{
  }
}
</script>

<style lang="scss">

</style>