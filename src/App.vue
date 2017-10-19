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
  export default {
    data: function () {
      return {
        api: 'http://localhost:3004/db',
        cib: {}
      }
    },
    methods: {
      fetchData: function (api) {
        fetch(api)
          .then(stream => stream.json())
          .then(data => { this.cib = data })
      },
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
      this.fetchData(this.api)
      this.toggleMenu()
    }
  }
</script>

<style lang="scss">
  @import './assets/css/layout.scss';
  @import './assets/css/common.scss';
</style>
