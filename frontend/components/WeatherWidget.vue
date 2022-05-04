<template>
  <div class="widget">
    <div class="current">

    </div>
    <div class="dailyForecasts">
      <div v-for="forecast in dailyForecasts" :key="forecast.id" class="daily">
        <daily-forecast :day="forecast.day" :temp="forecast.temperature" :icon="forecast.icon" :description="forecast.description"/>
      </div>
    </div>
    <div class="hourlyForecasts">
      <div v-for="forecast in hourlyForecasts" :key="forecast.id" class="hourly">
        <hourly-forecast :time="forecast.time" :temp="forecast.temperature" :icon="forecast.icon"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import DailyForecast from './DailyForecast.vue'
import HourlyForecast from './HourlyForecast.vue'

export default {
  name:'WeatherWidget',
  components:{
    HourlyForecast,
    DailyForecast
  },
  mounted(){
    this.$store.dispatch('weather/getWeather', {lat: 48.7784485, lon: 9.1800132})
  },
  computed:{
      ...mapState({dailyForecasts : state => state.weather.dailyForecasts}),
      ...mapState({hourlyForecasts: state => state.weather.hourlyForecasts})
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>

.dailyForecasts{
  display: grid;
  padding: 0.5rem;
  background-color: gray;
  border-radius: 10px;
}

.hourlyForecasts{
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0.5rem;
  background-color: gray;
  border-radius: 10px;

  .hourly{
    flex: 0 0 auto;
  }
}

.widget{
  margin-inline: auto;
  padding-inline: 0.5rem;
  width: min(100%, 500px);
}

</style>