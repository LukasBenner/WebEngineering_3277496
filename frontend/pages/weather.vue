<template>
  <div>
    <v-text-field label="City" v-model="cityName"/>
    <v-btn type="submit" @click="execute">Add</v-btn>
    <div class="widgets">
      <WeatherWidget v-for="widget in widgets" :key="widget.cityName" :data="widget"/>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import WeatherWidget from "../components/WeatherWidget.vue";

export default {
  components: { WeatherWidget },
  data(){
    return {
      cityName:''
    }
  },
  computed:{
  ...mapState({widgets : state => state.weather.widgets}),
  },
   methods: {
    execute(e) {
      this.$store.dispatch('weather/addWidget', {cityName: this.cityName});
    },
  },
}
</script>

<style>
.widgets{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>