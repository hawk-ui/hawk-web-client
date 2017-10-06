<template>
  <div>
    <h3>{{ $t("pages.monitoring_page.page-title") }}</h3>
    <h4>{{ error.status }} {{ error.statusText }}</h4>

    <div class="dashboard-container">
      <div class="dashboard-header">
        <input class="form-control search" type="text" value="search...">
        <ul class="pull-right filters-settings">
          <li class="cluster-ticket">Tickets</li>
          <li>
            <div class="btn-group">
              <button type="button" class="btn filters-menu-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <md-icon class="md-16">menu</md-icon>
              </button>
              <ul class="dropdown-menu filters-menu-dropdown">
                <li class="heading">Show</li>
                <li role="separator" class="divider"></li>
                <li><label><input type="radio">Show all nodes</label></li>
                <li><label><input type="radio">Only Online nodes</label></li>
                <li><label><input type="radio">Only Offline nodes</label></li>
                <li><label><input type="radio">Only maintenance nodes</label></li>
                <li><label><input type="radio">Only standby nodes</label></li>
              </ul>
            </div>
          </li>
          <li><md-icon class="md-16">settings</md-icon></li>
        </ul>
      </div>
      <table class="table dashboard-table">
        <tbody>
        <tr>
          <th colspan="2"></th>
          <th v-for="node in nodes">
            <span class="resource-status gray" v-bind:class="stateClass(node.state)"></span>
            <div class="node-name">{{ node.name }} <span class="table-cluster-name">hacluster
              <i class="fa fa-info-circle" aria-hidden="true"></i></span>
            </div>
            <div class="status-icon">
              <ul>
                <li v-if="node.maintenance == true"><md-icon class="md-14">build</md-icon></li>
              </ul>
            </div>
          </th>
        </tr>
        <tr v-for="resource in resources">
          <td class="status-icon-col">
            <div class="status-icon pull-right">
              <ul>
                <li v-if="resource.object_type == 'master'"><md-icon class="md-14">star_rate</md-icon></li>
                <li v-if="resource.maintenance == true"><md-icon class="md-14">build</md-icon></li>
              </ul>
            </div>
          </td>
          <td>
            <span class="resource-status gray" v-bind:class="stateClass(resource.state)"></span>{{ resource.id }}</td>
          <td><div class="node-circle gray" v-bind:class="stateClass(resource.state)"></div></td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      resources: [],
      nodes: [],
      error: {}
    }
  },
  computed: {
    getData: function () {
      // GET request
      this.$http.get('http://localhost:3004/db')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.resources = data.resources
        this.nodes = data.nodes
      }, error => {
        this.error = error
      })
    }
  },
  methods: {
    stateClass: function (state) {
      if (state === 'online') {
        return 'green'
      } else if (state === 'maintenance') {
        return 'red'
      }
    }
  },
  mounted () {
    this.getData
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
   @import '../../assets/css/dashboard.scss';
</style>
