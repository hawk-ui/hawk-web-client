<template>
  <div class="simulator-panel" id="simulator-wrapper">
    <div class="simulator-alert-count">2</div>
    <div class="simulator-header">
      <h2>Simulator</h2>
      <div class="clickable simulator-toggle-icon" v-on:click='toggleMenu()'>
        <i class="material-icons md-18">{{ toggleIcon }}</i>
      </div>
    </div>
    <table class="table table-simulator">
      <thead>
        <tr>
          <th><input type="checkbox"></th>
          <th>Select all</th>
          <th colspan=2></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="status-text"><input type="checkbox"></td>
          <td>Running since 3 hrs</td>
          <td class="col-sm-1">
            <i class="material-icons md-18">create</i>
          </td>
        </tr>
        <tr>
          <td class="status-text"><input type="checkbox"></td>
          <td>Running since 3 hrs</td>
          <td class="col-sm-1">
            <i class="material-icons md-18">create</i>
          </td>
        </tr>
        <tr>
          <td class="status-text"><input type="checkbox"></td>
          <td>Running since 3 hrs</td>
          <td class="col-sm-1">
            <i class="material-icons md-18">create</i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      toggleIcon: 'more_vert'
    }
  },
  methods: {
    toggleMenu: function () {
      if ($('#simulator-wrapper').hasClass('toggled')) {
        this.toggleIcon = 'more_vert'
      } else {
        this.toggleIcon = 'clear'
      }
      $('#simulator-wrapper').toggleClass('toggled')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
