<template>
  <ul class="dropdown-menu" v-if="lists.listType == 'radioList'">
    <li v-for="item in lists.liItems">
      <input type="radio"> <label>{{ item.listItem }} </label>
    </li>
  </ul>
  <ul class="dropdown-menu" v-else-if="lists.listType == 'iconList'">
    <li v-for="item in lists.liItems">
      <a class="dropdown-item" :href="item.listHref">
        <i class="material-icons md-18" :class="item.colorClass">{{ item.listIcion }}</i> 
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
