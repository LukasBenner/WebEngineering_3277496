<template>
  <div>
    {{ data.lat }}
    {{ data.lon }}
    {{ weather }}
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$get(
      `/api/weather/geo?appid=9e1820953a889c4af080dcb384688c14&q=Stuttgart`
    )
    const weather = await $axios.$get(
      `/api/weather/weatherData?lat=${data.lat}&lon=${data.lon}&appid=9e1820953a889c4af080dcb384688c14`
    )
    return { data, weather }
  },
}
</script>

<style></style>
