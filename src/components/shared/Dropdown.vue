<template>
  <ul class="dropdown-menu filters-menu-dropdown" v-if="lists.listType == 'radioList'">
    <li class="heading">Show</li>
    <li role="separator" class="divider"></li>
    <li v-for="item in lists.liItems">
      <label><input type="radio"> {{ item.listItem }} </label>
    </li>
  </ul>
  <ul class="dropdown-menu" v-else-if="lists.listType == 'iconList'">
    <li v-for="item in lists.liItems">
      <a :href="item.listHref">
        <i class="material-icons md-16" :class="item.colorClass">{{ item.listIcion }}</i> 
        {{ item.listItem }}
      </a>
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
</style>
