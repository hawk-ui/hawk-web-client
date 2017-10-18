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
    mounted: function () {
      if ($('#menu-toggle')) {
        $('#menu-toggle').click(function (e) {
          e.preventDefault()
          $('#wrapper').toggleClass('toggled')
        })
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/css/layout.scss';
  @import './assets/css/common.scss';
</style>
