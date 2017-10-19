<template>
  <div id="wrapper">
    <router-view v-if="this.$route.path === '/login'"></router-view>
    <div class="dashboard-view" v-else>
      <router-view name="left-sidebar"></router-view>
      <div id="page-content-wrapper">
        <div class="page-content container-fluid">
          <router-view name="top-navbar"></router-view>
          <div class="page-inner">
            <router-view></router-view>
          </div>
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
      }
    },
    computed: {
      ...mapGetters(['cib'])
    },
    methods: {
      ...mapActions({
        updateCib: 'updateCib'
      }),
      toggleMenu: function () {
        if ($('#menu-toggle')) {
          $('#menu-toggle').click(function (e) {
            e.preventDefault()
            $('#wrapper').toggleClass('toggled')
          })
        }
      }
    },
    mounted: function () {
      this.updateCib()
      this.toggleMenu()
    }
  }
</script>

<style lang="scss">
  @import './assets/css/layout.scss';
  @import './assets/css/common.scss';
</style>
