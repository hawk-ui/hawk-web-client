<template>
  <nav class="navbar fixed-bottom navbar-light bg-faded">
    <div class="footer-simulator">
      {{ $t("leftnav_bar.footer.simulator") }} <span><icon name="toggle-on" scale="1" color="#41b883" class="pull-right"></icon></span>
    </div>
    <div class="footer-links">
      <ul>
        <li><icon name="user-plus" scale="1" color="#ffffff"></icon><span>{{ $t("leftnav_bar.footer.links.role") }}</span></li>
        <li><icon name="dot-circle-o" scale="1" color="#ffffff"></icon><span>{{ $t("leftnav_bar.footer.links.target") }}</span></li>
        <li><icon name="question-circle" scale="1" color="#ffffff"></icon><span>{{ $t("leftnav_bar.footer.links.help") }}</span></li>
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
