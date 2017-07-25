<template>
  <div id="wrapper" class="active">
    <app-left-sidebar></app-left-sidebar>
    <div class="page-content-wrapper">
      <div class="page-content container-fluid">
        <app-page-header></app-page-header>
          <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
import LeftSidebar from './components/shared/LeftSidebar.vue'
import PageHeader from './components/shared/PageHeader.vue'

export default {
  components: {
    'appLeftSidebar': LeftSidebar,
    'appPageHeader': PageHeader
  }
}
</script>

<style lang="scss">
     @import 'assets/css/layout.scss'
</style>
