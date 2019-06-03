<template>
  <div id="wrapper">
    <router-view v-if="this.$route.path === '/login'"></router-view>
    <app-layout v-else></app-layout>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Layout from './components/layout.vue'
  export default {
    data: function () {
      return {
        // Local data goes here
      }
    },
    computed: {
      ...mapGetters(['cib'])
    },
    mounted: function () {
      this.updateCib()
    },
    methods: {
      ...mapActions({
        updateCib: 'updateCib'
      })
    },
    components: {
      'app-layout': Layout
    }
  }
</script>

<style lang="scss">
  @import './assets/stylesheets/index.scss';
</style>
