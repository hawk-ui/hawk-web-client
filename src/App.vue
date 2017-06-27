<template>
  <div id="wrapper" class="active">
    <app-left-sidebar></app-left-sidebar>
    <div class="page-content-wrapper">
      <div class="page-content container-fluid"> 
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
import LeftSidebar from './components/shared/LeftSidebar.vue'

export default {
  components: {
    'app-left-sidebar': LeftSidebar
  }
}
</script>

<style lang="scss">
     @import 'assets/css/layout.scss'
</style>
