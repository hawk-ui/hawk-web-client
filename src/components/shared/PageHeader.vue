<template>
    <header class="page-header">
      <md-icon class="md-24 menu-button" id="menu-toggle">menu</md-icon>
      <div class="logo-header">SUSE HAWK</div>
      <div class="header-cluster-status">
        <md-icon class="md-18 md-green">check_circle</md-icon>
        <div class="header-cluster-details">{{ $t("page_header.cluster-status.details") }}
          <span>({{ $t("page_header.cluster-status.link") }})</span>
        </div>
      </div>
      <div class="dropdown user-details pull-right">
        <div class="dropdown-toggle" data-toggle="dropdown">
          <md-icon class="md-16">account_circle</md-icon>
          <span class="user-name">Hacluste</span>
        </div>
        <ul class="dropdown-menu user-details-dropdown">
          <li>Account Setting</li>
          <li>Help</li>
          <li>Logout</li>
        </ul>
      </div>
    </header>
</template>

<script>

export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
