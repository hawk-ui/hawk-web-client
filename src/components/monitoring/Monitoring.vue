<template>
  <div>
    <h3>{{ $t("pages.monitoring_page.page-title") }}</h3>
    <h4 class="error-section">
      <br>
      <ul v-for="(error, index) in cib.errors" v-bind:key="index">
        <li>{{ error.type }} {{ error.msg }}</li>
      </ul>
    </h4>
    <div class="dashboard-container">
      <div class="dashboard-header">
        <input class="form-control search" type="text" value="search...">
        <ul class="pull-right filters-settings">
          <!-- Tickets section -->
          <li>
            <div class="btn-group cluster-ticket">
                <button type="button" class="btn filters-menu-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Tickets
                </button>
              <ul  v-if='cib.tickets' class="dropdown-menu filters-menu-dropdown">
                <li class="cluster-ticket" v-for="(ticket, index) in cib.tickets" v-bind:key="index">
                  {{ ticket.id + ":" + " " + ticket.state}}
                  {{  ticket.standby? "standby: true": "standby: false"  }}
                </li>
              </ul>
            </div>
          </li>
          <!-- End Ticket Section -->
          <li>
            <div class="btn-group">
              <button type="button" class="btn filters-menu-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="material-icons md-18">filter_list</i>
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
          <li><i class="material-icons md-16">settings</i></li>
        </ul>
      </div>
      <table class="table dashboard-table">
        <tbody>
        <!-- Nodes Row -->
        <tr>
          <th colspan="2"></th>
          <th v-for="node in cib.nodes" v-bind:key="node.id">
            <span class="resource-status gray" v-bind:class="NodeStateClass(node.state)"></span>
            <div class="node-name" v-bind:title="'Node id: ' + node.id">{{ node.name }}
              <span class="table-cluster-name">
                {{ cib.crm_config.cluster_name}}
                <i v-if="node.name === cib.meta.dc" class="material-icons md-14">home</i>
              </span>
            </div>
            <div class="status-icon">
              <ul>
                <li v-if="node.maintenance == true"><i class="material-icons md-14">build</i></li>
                <li v-if="node.remote == true"><i class="material-icons md-14">cloud_queue</i></li>
                <li v-if="node.fence_history !== ''"><i class="material-icons md-14">cached</i></li>
              </ul>
            </div>
          </th>
        </tr>
        <!-- End Nodes Row -->
        <!-- Resources Row -->
        <tr v-for="resource in cib.resources" v-bind:key="resource.id">
          <td class="status-icon-col">
            <div class="status-icon pull-right">
              <ul>
                <li v-if="resource.type == 'master'"><i class="material-icons md-14">star_rate</i></li>
                <li v-if="resource.maintenance == true"><i class="material-icons md-14">build</i></li>
              </ul>
            </div>
          </td>
          <td>
            <span class="resource-status gray" v-bind:class="resourceBarStyle(resource)"></span>{{ resource.id }}</td>
          <td v-for="node in cib.nodes" v-bind:key="node.id"><div class="node-circle gray" v-bind:class="ResourceStateClass(resource, node)"></div></td>
        </tr>
        <!-- End Resources Row -->
      </tbody>
    </table>
  </div>
  </div>
</template>


<script>
  import { mapGetters } from 'vuex'
  export default {
    data: function () {
      return {
        // Local data goes here
      }
    },
    computed: {
      ...mapGetters(['cib'])
    },
    methods: {
      NodeStateClass: function (state) {
        if (state === 'unclean') {
          return 'red'
        } else if (state === 'online') {
          return 'green'
        } else if (state === 'offline') {
          return 'gray'
        } else if (state === 'standby') {
          return 'red'
        } else if (state === 'pending') {
          return 'red'
        }
      },
      resourceBarStyle: function (resource) {
        if (resource.state === 'stopped' && resource['attributes']['target-role'] === 'Stopped') {
          return 'gray'
        } else if (resource.state === 'stopped') {
          return 'red'
        } else if (resource.state !== 'stopped') {
          return 'green'
        }
      },
      ResourceStateClass: function (resource, node = '') {
        if (node.state === 'unclean') {
          return 'red'
        } else if (resource.state === 'stopped') {
          return 'red'
        } else if (resource.state === 'offline') {
          return 'gray'
        } else if (node.name in resource.running_on && resource.running_on[node.name] === 'started') {
          return 'green'
        } else if (node.name in resource.running_on && resource.running_on[node.name] === 'slave') {
          return 'yellow'
        } else if (node.name in resource.running_on && resource.running_on[node.name] === 'master') {
          return 'blue'
        } else if (node.name in resource.running_on && resource.running_on[node.name] === 'not_running') {
          return 'gray'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
   @import '../../assets/css/dashboard.scss';
</style>
