<template>
  <nav class="navbar sticky-top navbar-light bg-faded">
    <div class="navbar-brand">
      <div class="logo">{{ $t("leftnav_bar.header.hawk") }}</div>
      <!-- <div>
        <button @click='$i18n.locale="en"'>en</button>
        <button @click='$i18n.locale="ja"'>ja</button>
      </div> -->
      <div class="user-details">
        <icon name="user" scale="1" color="#41b883"></icon>
        <span class="user-name">HAcluste</span>
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
