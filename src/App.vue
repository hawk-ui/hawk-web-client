<template>
  <div id="wrapper" class="active">
    <left-sidebar></left-sidebar>
    <div class="page-content-wrapper">
      <div class="page-content container-fluid"> 
        <div class="row">
           <router-view></router-view>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import LeftSidebar from './components/shared/LeftSidebar.vue'

export default {
  components: {
    'left-sidebar': LeftSidebar
  }
}
</script>

<style lang="scss">
     @import 'assets/css/layout.scss'
</style>
