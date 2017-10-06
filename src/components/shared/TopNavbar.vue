<template>
  <nav class="navbar sticky-top navbar-light bg-faded">
    <div class="navbar-brand">
      <div class="logo">{{ $t("leftnav_bar.header.hawk") }}</div>
      <!-- <div>
        <button @click='$i18n.locale="en"'>en</button>
        <button @click='$i18n.locale="ja"'>ja</button>
      </div> -->
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
