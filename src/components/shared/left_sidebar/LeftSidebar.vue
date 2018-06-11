<template>
    <div id="sidebar-wrapper" class="main-menu">
      <app-header></app-header>
      <ul class="no-list-style">
          <li>
            <router-link to="/monitoring">
              <i class="material-icons md-18 leftnav_icon">desktop_mac</i>
              {{ $t("leftnav_bar.links.monitoring") }}
            </router-link>
          </li>
          <li>
            <router-link to="/troubleshooting/reports">
              <i class="material-icons md-18 leftnav_icon">tune</i>
              {{ $t("leftnav_bar.links.trubleshooting") }}
            </router-link>
          </li>
          <li>
            <router-link to="/configuration">
              <i class="material-icons md-18 leftnav_icon">settings</i>
              {{ $t("leftnav_bar.links.configuration") }}
            </router-link>
          </li>
        </ul>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Footer from './footer.vue'
import Header from './header.vue'

export default {
  components: {
    'appFooter': Footer,
    'appHeader': Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
