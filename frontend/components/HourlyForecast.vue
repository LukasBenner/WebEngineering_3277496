<template>
  <div>
    {{temp.day}}
  </div>
</template>

<script>
export default {
  name: 'HourlyForecast',
  props:{
    dt: {type: Number, required: true},
    temp: {type: [], required: true},

  }
}
</script>

<style lang="scss" scoped>

</style>