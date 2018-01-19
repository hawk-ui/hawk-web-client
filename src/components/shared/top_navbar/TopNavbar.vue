<template>
  <header class="top-navbar">
    <i class="material-icons md-18 menu-btn" id="menu-toggle">menu</i>
    <div class="header-cluster-status">
      <i class="material-icons md-18 cluster-icon">check_circle</i>
      <div class="header-cluster-details">{{ $t("page_header.cluster-status.details") }}
      </div>
    </div>
    <div class="dropdown user-details pull-right">
      <div class="dropdown-toggle" data-toggle="dropdown">
        <i class="material-icons md-16">account_circle</i>
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
  methods: {
    toggleMenu: function () {
      if ($('#menu-toggle')) {
        $('#menu-toggle').click(function (e) {
          e.preventDefault()
          $('#wrapper').toggleClass('toggled')
        })
      }
    }
  },
  mounted: function () {
    this.toggleMenu()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
