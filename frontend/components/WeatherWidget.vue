<template>
  <div class="widget">
    <div v-if="data.currentWeather" class="current">
      <img class="icon" :src="data.currentWeather.icon" />
      <div class="location">
        <label for="cityName" id="pin">
          <img src="icons/pin.png" class="icon" />
        </label>
        <p id="cityName">{{ data.cityName }}</p>
        <p id="cityState">{{ data.country }}, {{ data.state }}</p>
        <div class="controls">
          <v-icon color="red" x-large @click="deleteWidget()">
            mdi-close
          </v-icon>
          <v-icon color="gray" x-large @click="reloadWidget()">
            mdi-refresh
          </v-icon>
        </div>
      </div>

      <div class="real_temp">{{ data.currentWeather.temperature }} °C</div>
      <div class="suntimes">
        <div class="suntime">
          <label for="sunrise">
            <img class="icon" id="sun" src="icons/sunrise.png" />
          </label>
          <p id="sunrise">{{ data.currentWeather.sunrise }}</p>
        </div>
        <div class="suntime">
          <label for="sunset">
            <img class="icon" id="sun" src="icons/sunset.png" />
          </label>
          <p id="sunset">{{ data.currentWeather.sunset }}</p>
        </div>
      </div>
    </div>
    <div class="dailyForecasts">
      <div
        v-for="forecast in data.dailyForecasts"
        :key="forecast.id"
        class="daily"
      >
        <daily-forecast :forecast="forecast" />
      </div>
    </div>
    <div class="hourlyForecasts">
      <div
        v-for="forecast in data.hourlyForecasts"
        :key="forecast.id"
        class="hourly"
      >
        <hourly-forecast :forecast="forecast" />
      </div>
    </div>
  </div>
</template>

<script>
import DailyForecast from './DailyForecast.vue'
import HourlyForecast from './HourlyForecast.vue'

export default {
  name: 'WeatherWidget',
  components: {
    HourlyForecast,
    DailyForecast,
  },
  props: {
    data: Object,
  },
  methods: {
    deleteWidget() {
      this.$store.dispatch('weather/deleteWidget', { widget: this.data })
    },
    reloadWidget() {
      this.$store.dispatch('weather/reloadWidget', { widget: this.data })
    },
  },
}
</script>

<style lang="scss" scoped>
.dailyForecasts {
  display: grid;
  padding: 0.5rem;
  max-width: 400px;
  margin: auto;
}

.hourlyForecasts {
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0.5rem;
  border-top: 1px solid;
  .hourly {
    flex: 0 0 auto;
  }
}

.widget {
  border-radius: 10px;
  margin: 0.5rem 0.5rem;
  padding-inline: 0.5rem;
  width: min(100%, 500px);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.current {
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: 2;

  .real_temp {
    grid-column: 1;
    grid-row: 2;
    font-size: 3rem;
    font-weight: 700;
    justify-self: center;
  }
  .icon {
    grid-row: 1;
    justify-self: center;
  }
  .location {
    grid-column: 2;
    grid-row: 1;
    justify-self: center;
    align-self: center;
    font-size: 30px;
    font-weight: 500;
    display: grid;
    align-items: center;
    width: 100%;

    #pin {
      justify-self: end;

      img {
        height: 1em;
      }
    }
    #cityName {
      grid-row: 1;
      grid-column: 2;
      margin: 0;
    }
    #cityState {
      grid-column: 1 / span 2;
      font-size: small;
      justify-self: end;
    }
    .controls {
      justify-self: end;
      grid-column: 3;
      grid-row: 1 / span 2;
      display: flex;
      flex-direction: column;
    }
  }
  .suntimes {
    grid-column: 2;
    grid-row: 2;
    justify-self: center;

    .suntime {
      display: flex;
      align-items: center;
    }

    p {
      margin-left: 1rem;
    }

    #sun {
      height: 2em;
    }
  }
}
</style>
