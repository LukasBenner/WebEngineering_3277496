<template>
  <div class="autocomplete">
    <v-text-field
      type="text"
      @input="onChange"
      @focus="onFocus"
      v-model="search"
    >
      <template v-slot:append-outer>
        <v-btn type="submit" @click="submit()" :disabled="!enabled">
          {{ buttonText }}
        </v-btn>
      </template>
    </v-text-field>

    <ul v-show="isOpen" id="autocomplete-results">
      <li
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
        class="autocomplete-result"
      >
        <slot name="item" :item="result"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'SearchAutocomplete',
  props: {
    result: {
      type: Object,
    },
    results: {
      type: Array,
      required: true,
      default: () => [],
    },
    buttonText: String,
  },
  model: {
    prop: 'result',
    event: 'select',
  },
  data() {
    return {
      isOpen: false,
      search: null,
      arrowCounter: -1,
    }
  },
  computed: {
    enabled: function () {
      return this.result !== null
    },
  },
  watch: {
    results(newResults, oldResults) {
      if (newResults.length === 0) {
        this.isOpen = false
        this.$emit('select', null)
      } else {
        this.isOpen = true
        this.$emit('select', this.results[0])
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  created() {
    this.onChange = _.debounce(this.onChange, 500)
  },
  methods: {
    onChange() {
      this.$emit('fetchData', this.search)
    },
    onFocus(e) {
      if (this.search !== null) this.$emit('fetchData', this.search)
    },
    submit() {
      this.$emit('submit')
      this.search = null
      this.isOpen = false
    },
    setResult(result) {
      this.$emit('select', result)
      this.search = result.name
      this.isOpen = false
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
        this.arrowCounter = -1
      }
    },
  },
}
</script>

<style>
.autocomplete {
  position: relative;
}

#autocomplete-results {
  border: 1px solid #eeeeee;
  height: 200px;
  overflow: auto;
  border-radius: 5px;
  position: absolute;
  width: 100%;
  background-color: white;
  z-index: 1;
  padding: 0;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
  padding-left: 1rem;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
</style>
