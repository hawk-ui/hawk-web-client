<template>
  <div id="wrapper">
    <router-view v-if="this.$route.path === '/login'"></router-view>
    <div class="dashboard-view" v-else>
      <router-view name="left-sidebar"></router-view>
      <div id="page-content-wrapper">
        <div class="page-content">
          <router-view name="top-navbar"></router-view>
            <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data: function () {
      return {
        // Local data goes here
      }
    },
    computed: {
      ...mapGetters(['cib'])
    },
    methods: {
      ...mapActions({
        updateCib: 'updateCib'
      })
    },
    mounted: function () {
      this.updateCib()
    }
  }
</script>

<style lang="scss">
  @import './assets/css/index.scss';
</style>
