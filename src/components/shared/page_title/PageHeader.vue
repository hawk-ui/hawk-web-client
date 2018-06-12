<template>
  <div class="page-title">
    <div class="row">
     <div class="col-sm-10"><h1>{{ pageTitle }}</h1></div>
      <div class="col-sm-2"><slot></slot></div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['pageTitle']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
