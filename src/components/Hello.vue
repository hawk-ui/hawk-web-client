<template>
  <div>
    <h1>{{ $t("pages.hello_page.page-title") }}</h1>
    <p>{{ $t("pages.hello_page.description") }}</p>
    <div>
      <button @click='$i18n.locale="en"'>en</button>
      <button @click='$i18n.locale="ja"'>ja</button>
      <a class="btn btn-secondary" id="menu-toggle">Toggle Menu</a>
    </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      bText: 'hello'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
