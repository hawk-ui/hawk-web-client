<template>
  <header class="top-navbar">
    <div class="dropdown user-details">
      <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
        <i class="material-icons md-18">account_circle</i>
        Hacluste
      </button>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="#">Account Setting</a>
        <a class="dropdown-item" href="#">Role</a>
        <a class="dropdown-item" href="#">Target</a>
        <a class="dropdown-item" href="#">Logout</a>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  methods: {
    toggleMenu: function () {
      $('#sidebar-wrapper li').tooltip()
      $('#menu-toggle').click(function (e) {
        e.preventDefault()
        $('#wrapper').toggleClass('toggled')
        toggleTooltip()
      })
      function toggleTooltip () {
        // if the menu is not collapsed (meaning, it is open) we dont need to show the tooltips
        if ($('.main-menu').width() > 55) {
          $('#sidebar-wrapper li').tooltip('dispose')
        } else {
          $('#sidebar-wrapper li').tooltip()
        }
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
