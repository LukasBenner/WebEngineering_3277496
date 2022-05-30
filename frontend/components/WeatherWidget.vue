<template>
    <div class="widget">
      <div v-if="data.currentWeather" class="current">
        <img class="icon" :src="data.currentWeather.icon"/>
        <div class="location">
          <label for="cityName">
            <img src="icons/pin.png" id="pin" class="icon">
          </label>
          <p id="cityName">{{data.cityName}}</p>
        </div>
        <div class="real_temp">
          {{ data.currentWeather.temperature }} °C
        </div>
        <div class="suntimes">
          <div class="suntime">
            <label for="sunrise">
              <img class="icon" id="sun" src="icons/sunrise.png"/>
            </label>
            <p id="sunrise">{{data.currentWeather.sunrise}}</p>
          </div>
          <div class="suntime">
            <label for="sunset">
               <img class="icon" id="sun" src="icons/sunset.png"/>
            </label>
            <p id="sunset">{{data.currentWeather.sunset}}</p>
          </div>
        </div>
      </div>
      <div class="dailyForecasts">
        <div v-for="forecast in data.dailyForecasts" :key="forecast.id" class="daily">
          <daily-forecast :forecast="forecast"/>
        </div>
      </div>
      <div class="hourlyForecasts">
        <div v-for="forecast in data.hourlyForecasts" :key="forecast.id" class="hourly">
          <hourly-forecast :forecast="forecast"/>
        </div>
      </div>
    </div>
</template>

<script>
import DailyForecast from './DailyForecast.vue'
import HourlyForecast from './HourlyForecast.vue'

export default {
  name:'WeatherWidget',
  components:{
    HourlyForecast,
    DailyForecast
  },
  props:{
    data: Object
  },
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
  .location{
    grid-column: 2;
    grid-row: 1;
    justify-self: center;
    align-self: center;
    font-size: 30px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;

    #pin{
      height: 1em;
    }

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

    #sun{
    height: 2em;
    }
  }
}

</style>