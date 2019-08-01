<template>
  <div class="page-title">
    <div class="row">
     <div class="col-sm-8"><h1 class="title-no-margings">{{ pageTitle }}</h1></div>
      <div class="col-sm-4 buttons-container"><slot></slot></div>
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
