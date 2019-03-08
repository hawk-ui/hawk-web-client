<template>
    <div id="sidebar-wrapper" class="main-menu">
      <div class="navigation-container">
        <app-header></app-header>
        <ul class="no-list-style">
            <li data-toggle="tooltip" data-placement="right" title="Monitoring">
              <router-link to="/monitoring">
                <i class="material-icons md-18 leftnav_icon">desktop_mac</i>
                <span>{{$t("leftnav_bar.links.monitoring") }}</span>
              </router-link>
            </li>
            <li data-toggle="tooltip" data-placement="right" title="Trubleshooting">
              <router-link to="/troubleshooting">
                <i class="material-icons md-18 leftnav_icon">tune</i>
                <span>{{ $t("leftnav_bar.links.trubleshooting") }}</span>
              </router-link>
            </li>
            <li data-toggle="tooltip" data-placement="right" title="Configuration">
              <router-link to="/configuration">
                <i class="material-icons md-18 leftnav_icon">settings</i>
                <span>{{ $t("leftnav_bar.links.configuration") }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Footer from './Footer.vue'
import Header from './Header.vue'

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
