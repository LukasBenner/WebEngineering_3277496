<template>
  <div>
    <v-snackbar
      v-if="snackbar"
      :key="snackbar.text + Math.random()"
      :value="snackbar.showing"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      :style="`bottom: 8px`"
    >
      {{snackbar.text}}

      <v-btn text @click="removeSnackbar()">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState({snackbar: state => state.snackbar.snackbar})
    },
    methods: {
      removeSnackbar(snackbar){
        this.$store.dispatch('snackbar/removeSnackbar', snackbar);
      }
    }    
  }
</script>

<style lang="scss" scoped>

</style>