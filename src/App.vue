<template>
  <div id="wrapper">
    <div>
      <router-view name="left-sidebar"></router-view>
      <div id="page-content-wrapper">
        <div class="page-content container-fluid">
          <router-view name="page-header"></router-view>
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
      $('#menu-toggle').click(function (e) {
        e.preventDefault()
        $('#wrapper').toggleClass('toggled')
      })
    }
  }
</script>

<style lang="scss">
  @import './assets/css/layout.scss';
  @import './assets/css/common.scss';
</style>
