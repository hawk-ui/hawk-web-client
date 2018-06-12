<template>
  <div class="footer">
    <div class="footer-copyright"><span>©</span> {{ $t("leftnav_bar.footer.copy_right") }}</div>
    <div class="dropup more-btn footer-dropdown">
      <div class="dropdown-toggle" data-toggle="dropdown">
        <i class="material-icons md-18 pull-right">more_vert</i>
      </div>
      <ul class="dropdown-menu">
        <li><i class="material-icons md-14">assignment_ind</i><span>{{ $t("leftnav_bar.footer.links.role") }}</span></li>
        <li><i class="material-icons md-14">grade</i><span>{{ $t("leftnav_bar.footer.links.target") }}</span></li>
        <li><i class="material-icons md-14">help</i><span>{{ $t("leftnav_bar.footer.links.help") }}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
