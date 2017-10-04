<template>
  <nav class="navbar fixed-bottom">
    <div class="footer-nav">
      <div class="footer-copyright">{{ $t("leftnav_bar.footer.copy_right") }}</div>
      <div class="dropup pull-right">
        <div class="dropdown-toggle" data-toggle="dropdown">
          <md-icon class="pull-right more-btn">more_vert</md-icon>
        </div>
        <ul class="dropdown-menu footer-dropdown">
          <li class="footer-simulator">
            {{ $t("leftnav_bar.footer.simulator") }} 
            <span class="pull-right"><md-icon class="md-16 brand-colors">visibility</md-icon></span>
          </li>
          <li><md-icon class="md-14">assignment_ind</md-icon><span>{{ $t("leftnav_bar.footer.links.role") }}</span></li>
          <li><md-icon class="md-14">grade</md-icon><span>{{ $t("leftnav_bar.footer.links.target") }}</span></li>
          <li><md-icon class="md-14">help</md-icon><span>{{ $t("leftnav_bar.footer.links.help") }}</span></li>
        </ul>
      </div>
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
