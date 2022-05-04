<template>
  <div class="item">
    <div>
      {{ day }}
    </div>
    <img class="icon" :src="icon"/>
    <div class="temperature"> 
      {{ temp }} °C
    </div>
    <div class="description">
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'DailyForecast',
  props:{
    day: {type: String, required: true},
    temp: {type: Number, required: true},
    icon: {type: String, require: true},
    description: {type: String}
  }
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
.temperature {
  font-size: 1.2em;
}

</style>