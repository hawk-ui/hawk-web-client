<template>
  <nav class="navbar fixed-bottom navbar-light bg-faded">
    <div class="footer-simulator">
      {{ $t("leftnav_bar.footer.simulator") }} <span class="pull-right"><md-icon class="md-16 brand-colors">visibility</md-icon></span>
    </div>
    <div class="footer-links">
      <ul>
        <li><md-icon class="md-16">assignment_ind</md-icon><span>{{ $t("leftnav_bar.footer.links.role") }}</span></li>
        <li><md-icon class="md-16">grade</md-icon><span>{{ $t("leftnav_bar.footer.links.target") }}</span></li>
        <li><md-icon class="md-16">help</md-icon><span>{{ $t("leftnav_bar.footer.links.help") }}</span></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/left-navbar.scss';
</style>
