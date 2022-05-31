<template>
  <div class="item">
    <div>
      {{ forecast.time }}
    </div>
    <img class="icon" :src="forecast.icon" />
    <div class="temperature">{{ forecast.temperature }} °C</div>
  </div>
</template>

<script>
export default {
  name: 'HourlyForecast',
  props: {
    forecast: { type: Object, required: true },
  },
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-flow: column;
  align-items: center;
}
.icon {
  margin-top: -15px;
  margin-bottom: -15px;
  width: 75px;
  height: auto;
}
.temperature {
  font-size: 1.2em;
}
</style>
