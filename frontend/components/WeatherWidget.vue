<template>
  <div class="container">
    <div class="widget">
      <div v-if="currentWeather" class="current">
        <img class="icon" :src="currentWeather.icon"/>
        <div class="real_temp">
          {{ currentWeather.temperature }} °C
        </div>
        <div class="suntimes">
          <div class="suntime">
            <label for="sunrise">
              <img class="icon" id="sun" src="icons/sunrise.png"/>
            </label>
            <p id="sunrise">{{currentWeather.sunrise}}</p>
          </div>
          <div class="suntime">
            <label for="sunset">
               <img class="icon" id="sun" src="icons/sunset.png"/>
            </label>
            <p id="sunset">{{currentWeather.sunset}}</p>
          </div>
        </div>
      </div>
      <div class="dailyForecasts">
        <div v-for="forecast in dailyForecasts" :key="forecast.id" class="daily">
          <daily-forecast :forecast="forecast"/>
        </div>
      </div>
      <div class="hourlyForecasts">
        <div v-for="forecast in hourlyForecasts" :key="forecast.id" class="hourly">
          <hourly-forecast :forecast="forecast"/>
        </div>
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
  computed:{
      ...mapState({dailyForecasts : state => state.weather.dailyForecasts}),
      ...mapState({hourlyForecasts: state => state.weather.hourlyForecasts}),
      ...mapState({currentWeather: state => state.weather.currentWeather })
  },
  mounted(){
    this.$store.dispatch('weather/getWeather', {lat: 48.7784485, lon: 9.1800132})
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>

.dailyForecasts{
  display: grid;
  padding: 0.5rem;
  max-width: 400px;
  margin: auto;
}

.hourlyForecasts{
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0.5rem;
  border-top: 1px solid;

  .hourly{
    flex: 0 0 auto;
  }
}

.widget{
  border-radius: 10px;
  margin-inline: auto;
  padding-inline: 0.5rem;
  width: min(100%, 500px);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.current{
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: 2;

  .real_temp{
    grid-column: 1;
    grid-row: 2;
    font-size: 50px;
    font-weight: 700;
    justify-self: center;
  }
  .icon{
    grid-row:1;
    justify-self: center;
  }
  .suntimes{
    grid-column: 2;
    grid-row:2;
    justify-self: center;

    .suntime{
      display: flex;
      align-items: center;
    }

    p{
      margin-left: 1rem
    }

  }

  #sun{
    height: 2em;
  }

}

</style>