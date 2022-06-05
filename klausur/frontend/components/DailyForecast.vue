<template>
  <div class="item">
    <div>
      {{ forecast.day }}
    </div>
    <img class="icon" :src="forecast.icon" />
    <div class="temperatures">
      <div class="temp">
        <label for="min">Min:</label>
        <p id="min">{{ forecast.temperatureMin }} °C</p>
      </div>
      <div class="temp">
        <label for="max">Max:</label>
        <p id="max">{{ forecast.temperatureMax }} °C</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DailyForecast',
  props: {
    forecast: { type: Object, required: true },
  },
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
}
.icon {
  margin-top: -15px;
  margin-bottom: -15px;
  width: 75px;
  height: auto;
}
.temperatures {
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.temp {
  margin: 0;
  display: flex;

  label {
    margin-right: 0.5rem;
  }
}
</style>
