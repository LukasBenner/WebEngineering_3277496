<template>
  <div class="item">
    <div>
      {{ time }}
    </div>
    <img class="icon" :src="icon"/>
    <div class="temperature"> 
      {{ temp }} °C
    </div>
  </div>
</template>

<script>
export default {
  name: 'HourlyForecast',
  props:{
    time: {type: String, required: true},
    temp: {type: Number, required: true},
    icon: {type: String, require: true},
    description: {type: String}
  }
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