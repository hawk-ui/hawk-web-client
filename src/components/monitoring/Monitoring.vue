<template>
  <div>
    <app-page-header :pageTitle="pageTitle"></app-page-header>
    <div class="container-fluid">
      <h4 class="error-section">
        <ul v-for="(error, index) in cib.errors" v-bind:key="index">
          <li>{{ error.type }} {{ error.msg }}</li>
        </ul>
      </h4>

      <!-- Tabs start -->
      <div id="tabs" class="dashboard-tabs"> 
        <ul class="nav nav-pills">
          <li class="active">
            <a href="#1a" data-toggle="tab">HA Cluster<span class="status-circle"></span></a>
          </li>
          <li>
            <a href="#2a" data-toggle="tab">Web Cluster<span class="status-circle"></span></a>
          </li>
          <li>
            <a href="#3a" data-toggle="tab">HA web Cluster<span class="status-circle"></span></a>
          </li>
        </ul>

        <a class="add-cluster-bt clickable" data-toggle="modal" data-target="#addCluster">+ Add Cluster</a>
        <app-add-cluster id="addCluster"></app-add-cluster>

        <div class="dropdown legend pull-right">
          <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Legend <span class="caret"></span>
          </button>
            <app-dropdown class="legend-options" :lists="legendList"></app-dropdown>
        </div>

        <div class="tab-content clearfix">
          <div class="tab-pane active" id="1a">
              <div class="dashboard-error">
                <ul class="no-list-style">
                  <li><i class="material-icons md-18">error</i>2017-10-06 15:43: <span>Operation monitor</span>  failed for resource <span>ted</span> on node webui: call-id=96, rc-code=not running (7), exit-reason=</li>
                  <li><i class="material-icons md-18">error</i>2017-10-06 15:43: <span>Operation monitor</span>  failed for resource <span>ted</span> on node webui: call-id=96, rc-code=not running (7), exit-reason=</li>
                </ul>
              </div>
              <div class="dashboard-header">
                <input class="form-control search" type="text" value="search...">
                <ul class="pull-right header-toolbox">
                  <!-- Tickets section -->
                  <li>
                    <div class="dropdown cluster-ticket">
                        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Tickets
                        </button>
                        <span class="cluster-ticket-count">2</span>
                      <ul  v-if='cib.tickets' class="dropdown-menu">
                        <li v-for="(ticket, index) in cib.tickets" v-bind:key="index">
                          <div>{{ ticket.id }} : {{ ticket.state }} <br>
                          Standby : {{ ticket.standby? "true": "false" }}</div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <!-- End Ticket Section -->
                  <li>
                    <div class="dropdown filters-dropdown">
                      <button type="button" class="btn filters-menu-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="material-icons md-18 filter-list">filter_list</i>
                      </button>
                      <app-dropdown :lists="filterList"></app-dropdown>
                    </div>
                  </li>
                  <li><a href=""><i class="material-icons md-18">link</i></a></li>
                </ul>
              </div>
              <table class="table dashboard-table">
                <thead>
                  <!-- Nodes Row -->
                  <tr>
                    <th colspan="2"></th>
                    <th v-for="node in cib.nodes" v-bind:key="node.id">
                      <div class="dropdown dashboard-table-nodes">
                        <span class="status-line" v-bind:class="NodeBarClass(node.state)"></span>
                        <div class="node-name btn dropdown-toggle" data-toggle="dropdown" v-bind:title="'Node id: ' + node.id">{{ node.name }}
                          <span class="table-cluster-name">
                            {{ cib.crm_config.cluster_name}}
                          </span>
                        </div>
                        <div class="dashboard-table-status-icon">
                          <ul>
                            <li><i v-if="node.name === cib.meta.dc" class="material-icons md-18">home</i></li>
                            <li v-if="node.maintenance == true"><i class="material-icons md-18">build</i></li>
                            <li v-if="node.remote == true"><i class="material-icons md-18">cloud_queue</i></li>
                            <li v-if="node.fence_history !== ''"><i class="material-icons md-18">cached</i></li>
                          </ul>
                        </div>
                        <app-dropdown :lists="nodeList"></app-dropdown>
                      </div>
                    </th>
                  </tr>
                 </thead>
                  <!-- End Nodes Row -->
                  <!-- Resources Row -->
                <tbody>
                  <tr v-for="resource in cib.resources" v-bind:key="resource.id">
                    <td class="status-icon-col">
                      <div class="dashboard-table-status-icon">
                        <ul>
                          <li v-if="resource.type == 'master'"><i class="material-icons md-18">grade</i></li>
                          <li v-if="resource.maintenance == true"><i class="material-icons md-18">build</i></li>
                        </ul>
                      </div>
                    </td>
                    <td class="resource-col">
                      <div class="dropdown">
                        <div class="btn dropdown-toggle" data-toggle="dropdown">
                          <span class="status-line" v-bind:class="resourceBarStyle(resource)"></span>{{ resource.id }}
                        </div>
                        <app-dropdown :lists="resourceList"></app-dropdown>
                      </div>
                    </td>
                    <td v-for="node in cib.nodes" v-bind:key="node.id">
                      <span class="status-circle" v-bind:class="ResourceStateClass(resource, node)"></span>
                    </td>
                  </tr>
                <!-- End Resources Row -->
                </tbody>
              </table>
          </div>
          <div class="tab-pane" id="2a">
            <p>Tab 2</p>
          </div>
          <div class="tab-pane" id="3a">
            <p>Tab 3</p>
          </div>
        </div>
      </div>
       <!-- Tabs end -->
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import PageHeader from '../shared/page-title.vue'
  import Dropdown from '../shared/dropdown.vue'
  import AddCluster from './AddCluster.vue'

  export default {
    data: function () {
      return {
        pageTitle: this.$t('pages.monitoring_page.page-title'),
        filterList: {
          listType: 'radioList',
          liItems: [
            { listItem: 'Online nodes' },
            { listItem: 'Offline nodes' },
            { listItem: 'Maintenance nodes' },
            { listItem: 'Standby nodes' }
          ]
        },
        nodeList: {
          listType: 'iconList',
          liItems: [
            { listIcion: 'info', listItem: 'Details', listHref: '/nodeStatus' },
            { listIcion: 'build', listItem: 'Maintenance', listHref: '#' },
            { listIcion: 'power_settings_new', listItem: 'Standby', listHref: '#' },
            { listIcion: 'delete_forever', listItem: 'Cleanup', listHref: '#' }
          ]
        },
        resourceList: {
          listType: 'iconList',
          liItems: [
            { listIcion: 'stop', listItem: 'Stop', listHref: '#' },
            { listIcion: 'info', listItem: 'Details', listHref: '/resourceStatus' },
            { listIcion: 'build', listItem: 'Maintenance', listHref: '#' },
            { listIcion: 'power_settings_new', listItem: 'Migrate', listHref: '#' },
            { listIcion: 'delete_forever', listItem: 'Cleanup', listHref: '#' }
          ]
        },
        legendList: {
          listType: 'iconList',
          liItems: [
            { listIcion: 'fiber_manual_record', colorClass: 'Legend-started', listItem: 'Working resource/node' },
            { listIcion: 'settings_remote', listItem: 'Remote node' },
            { listIcion: 'fiber_manual_record', colorClass: 'Legend-stopped', listItem: 'Failing resource/node' },
            { listIcion: 'build', listItem: 'Maintenance mode' },
            { listIcion: 'fiber_manual_record', colorClass: 'Legend-offline', listItem: 'Offline/standby mode' },
            { listIcion: 'star', listItem: 'Double state (master/slave)' },
            { listIcion: 'fiber_manual_record', colorClass: 'Legend-not-running', listItem: 'Not working resource/node' },
            { listIcion: 'linear_scale', listItem: 'Designated coordinator' }
          ]
        }
      }
    },
    components: {
      'app-page-header': PageHeader,
      'app-dropdown': Dropdown,
      'app-add-cluster': AddCluster
    },
    computed: {
      ...mapGetters(['cib'])
    },
    methods: {
      NodeBarClass: function (state) {
        if (state === 'unclean') {
          return 'status-stopped'
        } else if (state === 'online') {
          return 'status-started'
        } else if (state === 'offline') {
          return 'status-offline'
        } else if (state === 'standby') {
          return 'status-offline'
        } else if (state === 'pending') {
          return 'status-stopped'
        }
      },
      resourceBarStyle: function (resource) {
        if (resource.state === 'stopped' && resource['attributes']['target-role'] === 'Stopped') {
          return 'status-not-running'
        } else if (resource.state === 'stopped') {
          return 'status-stopped'
        } else if (resource.state !== 'stopped') {
          return 'status-started'
        }
      },
      ResourceStateClass: function (resource, node = '') {
        if (node.state === 'unclean') {
          return 'status-stopped'
        } else if (resource.state === 'stopped') {
          return 'status-stopped'
        } else if (resource.state === 'offline') {
          return 'status-offline'
        } else if (node.name in resource.running_on && resource.running_on[node.name] === 'started') {
          return 'status-started'
        } else if (node.name in resource.running_on && resource.running_on[node.name] === 'slave') {
          return 'status-slave'
        } else if (node.name in resource.running_on && resource.running_on[node.name] === 'master') {
          return 'status-master'
        } else if (node.name in resource.running_on && resource.running_on[node.name] === 'not_running') {
          return 'status-not-running'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
