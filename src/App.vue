<template>
  <div id="wrapper">
    <router-view v-if="this.$route.path === '/login'"></router-view>
    <div class="sidebar-view" v-else>
      <router-view name="left-sidebar"></router-view>
      <div id="page-content-wrapper">
        <router-view name="simulator-panel"></router-view>
        <div class="page-content page-content-right">
          <router-view name="page-header"></router-view>
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
  @import './assets/stylesheets/index.scss';
</style>
