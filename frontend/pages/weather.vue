<template>
  <div class="weather">
    <div class="searchBar">
      <SearchAutocomplete
        v-model="city"
        :results="items"
        buttonText="Add widget"
        @fetchData="callGeoApi"
        @submit="addWidget"
      >
        <template v-slot:item="{ item }">
          <div class="autocompleteResult">
            <v-list-item-avatar
              color="indigo"
              class="text-h5 font-weight-light white--text"
            >
              {{ item.country }}
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
              <v-list-item-subtitle v-text="item.state"></v-list-item-subtitle>
            </v-list-item-content>
          </div>
        </template>
      </SearchAutocomplete>
    </div>
    <div class="widgets">
      <WeatherWidget
        v-for="widget in widgets"
        :key="widget.cityName"
        :data="widget"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import WeatherWidget from '../components/WeatherWidget.vue'
import SearchAutocomplete from '~/components/SearchAutocomplete.vue'

export default {
  components: { WeatherWidget, SearchAutocomplete },
  data() {
    return {
      city: null,
      items: [],
    }
  },
  computed: {
    ...mapState({ widgets: (state) => state.weather.widgets }),
  },
  methods: {
    addWidget(e) {
      if (
        this.widgets.some(
          (e) => e.lat === this.city.lat && e.lon === this.city.lon
        )
      ) {
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'red',
          text: 'Already added!',
        })
      } else {
        this.$store.dispatch('weather/addWidget', { location: this.city })
      }
    },
    callGeoApi(val) {
      fetch(`/api/weather/geo?q=${val}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.status && res.status === 400) this.items = []
          else this.items = res
        })
    },
  },
}
</script>

<style>
.widgets {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.searchBar {
  width: min(400px, 100%);
  margin: auto;
}

.autocompleteResult {
  display: flex;
  flex-direction: row;
}
</style>
