<template>
  <header class="top-navbar">
    <div class="sidebar-toggle clickable" id="menu-toggle">
      <i class="material-icons md-18">menu</i>
    </div>
    <div class="cluster-status">
      <i class="material-icons md-18">check_circle</i>
      {{ $t("page_header.cluster-status.details") }}
    </div>
    <div class="dropdown user-details clickable">
      <div class="dropdown-toggle" data-toggle="dropdown">
        <i class="material-icons md-16">account_circle</i>
        Hacluste
      </div>
      <ul class="dropdown-menu dropdown-menu-right">
        <li><a>Account Setting</a></li>
        <li><a>Help</a></li>
        <li><a>Logout</a></li>
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
