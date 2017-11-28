<template>
  <nav class="navbar fixed-bottom">
    <div class="footer-nav">
      <div class="footer-copyright"><span>©</span> {{ $t("leftnav_bar.footer.copy_right") }}</div>
      <div class="dropup more-btn pull-right">
        <div class="dropdown-toggle" data-toggle="dropdown">
          <i class="material-icons md-18 pull-right">more_vert</i>
        </div>
        <ul class="dropdown-menu footer-dropdown">
          <li class="footer-simulator">
            {{ $t("leftnav_bar.footer.simulator") }} 
            <span class="pull-right"><i class="material-icons md-14 brand-colors">visibility</i></span>
          </li>
          <li><i class="material-icons md-14">assignment_ind</i><span>{{ $t("leftnav_bar.footer.links.role") }}</span></li>
          <li><i class="material-icons md-14">grade</i><span>{{ $t("leftnav_bar.footer.links.target") }}</span></li>
          <li><i class="material-icons md-14">help</i><span>{{ $t("leftnav_bar.footer.links.help") }}</span></li>
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
  @import '../../../assets/css/left-navbar.scss';

</style>
