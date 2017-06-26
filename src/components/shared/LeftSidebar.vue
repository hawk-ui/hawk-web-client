<template>
    <div id="sidebar-wrapper" class="sidebar-toggle">
      <nav class="navbar sticky-top navbar-light bg-faded">
        <div class="navbar-brand">Suse HAWK</div>
        <div class="user-details">
          <icon name="user" scale="1" color="#41b883"></icon>
          <span class="user-name">HAcluste</span>
        </div>
      </nav>
      <ul class="sidebar-nav">
          <li>
            <icon name="refresh" spin scale="3"></icon>
              <a href="#item1">Monitoring</a>
          </li>
          <li>
              <a href="#item2">Trubleshooting</a>
          </li>
          <li>
              <a href="#item3">Cluster Counfiguration</a>
          </li>
          <li>
              <a href="#item1">Add a resource</a>
          </li>
        </ul>
        <nav class="navbar fixed-bottom navbar-light bg-faded">
          <a class="navbar-brand" href="#">Fixed bottom</a>
        </nav>
    </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/left-navbar.scss';
</style>
