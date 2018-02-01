<template>
  <ul class="dropdown-menu filters-menu-dropdown" v-if="lists.listType == 'radioList'">
    <li v-for="item in lists.liItems"><label><input type="radio"> {{ item.listItem }} </label></li>
  </ul>
  <ul class="dropdown-menu nodes-menu-dropdown" v-else-if="lists.listType == 'iconList'">
    <li v-for="item in lists.liItems">
      <i class="material-icons md-14" :class="item.colorClass">{{ item.listIcion }}</i> 
      {{ item.listItem }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['lists']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/common.scss';
</style>
