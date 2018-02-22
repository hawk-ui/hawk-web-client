<template>
  <div>
    <app-page-header :pageTitle="pageTitle"></app-page-header>
    <div class="inner">
      <h4 class="error-section">
        <br>
        <ul v-for="(error, index) in cib.errors" v-bind:key="index">
          <li>{{ error.type }} {{ error.msg }}</li>
        </ul>
      </h4>

      <div class="panel panel-default">
        <!-- Tabs start -->
        <div id="exTab1" class="default-tabs"> 
          <ul  class="nav nav-pills">
            <li class="active">
              <a href="#1a" data-toggle="tab">Overview<span class="status-circle status-green"></span></a>
            </li>
            <li>
              <a href="#2a" data-toggle="tab">Using nav-pills<span class="status-circle status-gray"></span></a>
            </li>
          </ul>

          <div class="add-cluster-bt" data-toggle="modal" data-target="#addCluster">+ Add Cluster</div>
          <app-add-cluster id="addCluster"></app-add-cluster>

          <div class="dropdown legend">
            <button type="button" class="btn legend-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Legend <span class="caret"></span>
            </button>
              <app-dropdown class="legend-options" :lists="legendList" :listType="listType"></app-dropdown>
            </div>

          <div class="tab-content clearfix">
            <div class="tab-pane active" id="1a">
              <div class="dashboard-container">
                <div class="error-container">
                  <ul class="error-list">
                    <li><i class="material-icons md-16">error</i>2017-10-06 15:43: <span>Operation monitor</span>  failed for resource <span>ted</span> on node webui: call-id=96, rc-code=not running (7), exit-reason=</li>
                    <li><i class="material-icons md-16">error</i>2017-10-06 15:43: <span>Operation monitor</span>  failed for resource <span>ted</span> on node webui: call-id=96, rc-code=not running (7), exit-reason=</li>
                  </ul>
                </div>
                <div class="dashboard-header">
                  <input class="form-control search" type="text" value="search...">
                  <ul class="pull-right filters-settings">
                    <!-- Tickets section -->
                    <li>
                      <div class="dropdown cluster-ticket">
                          <button type="button" class="btn filters-menu-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tickets
                          </button>
                        <ul  v-if='cib.tickets' class="dropdown-menu filters-menu-dropdown">
                          <li class="cluster-ticket" v-for="(ticket, index) in cib.tickets" v-bind:key="index">
                            <span>{{ ticket.id }} </span> : {{ ticket.state }} <br>
                            <span>standby : </span> {{ ticket.standby? "true": "false" }}
                          </li>
                        </ul>
                      </div>
                    </li>
                    <!-- End Ticket Section -->
                    <li>
                      <div class="dropdown">
                        <button type="button" class="btn filters-menu-btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="material-icons md-18 filter-list">filter_list</i>
                        </button>
                        <app-dropdown :lists="filterList" :listType="listType"></app-dropdown>
                      </div>
                    </li>
                  </ul>
                </div>
                <table class="table dashboard-table">
                  <thead>
                    <!-- Nodes Row -->
                    <tr>
                      <th colspan="2"></th>
                      <th v-for="node in cib.nodes" v-bind:key="node.id">
                        <div class="dropdown">
                          <span class="resource-status gray" v-bind:class="NodeStateClass(node.state)"></span>
                          <div class="node-name btn dropdown-toggle" data-toggle="dropdown" v-bind:title="'Node id: ' + node.id">{{ node.name }}
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
                          <app-dropdown :lists="nodeList" :listType="listType"></app-dropdown>
                        </div>
                      </th>
                    </tr>
                   </thead>
                    <!-- End Nodes Row -->
                    <!-- Resources Row -->
                  <tbody>
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
                        <div class="btn-group">
                          <div class="btn dropdown-toggle" data-toggle="dropdown">
                            <span class="resource-status gray" v-bind:class="resourceBarStyle(resource)"></span>{{ resource.id }}
                          </div>
                          <app-dropdown :lists="resourceList" :listType="listType"></app-dropdown>
                        </div>
                      </td>
                      <td v-for="node in cib.nodes" v-bind:key="node.id">
                        <i class="material-icons md-18 gray" v-bind:class="ResourceStateClass(resource, node)">fiber_manual_record</i>
                      </td>
                    </tr>
                  <!-- End Resources Row -->
                  </tbody>
                </table>
              </div>
            </div>
            <div class="tab-pane" id="2a">
              <p>Tab 2</p>
            </div>
          </div>
        </div>
         <!-- Tabs end -->
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import PageHeader from '../shared/page_header/PageHeader.vue'
  import Dropdown from '../shared/Dropdown.vue'
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
            { listIcion: 'info', listItem: 'Details' },
            { listIcion: 'build', listItem: 'Maintenance' },
            { listIcion: 'power_settings_new', listItem: 'Standby' },
            { listIcion: 'delete_forever', listItem: 'Cleanup' }
          ]
        },
        resourceList: {
          listType: 'iconList',
          liItems: [
            { listIcion: 'stop', listItem: 'Stop' },
            { listIcion: 'info', listItem: 'Details' },
            { listIcion: 'build', listItem: 'Maintenance' },
            { listIcion: 'power_settings_new', listItem: 'Migrate' },
            { listIcion: 'delete_forever', listItem: 'Cleanup' }
          ]
        },
        legendList: {
          listType: 'iconList',
          liItems: [
            { listIcion: 'fiber_manual_record', colorClass: 'green', listItem: 'Working resource/node' },
            { listIcion: 'settings_remote', listItem: 'Remote node' },
            { listIcion: 'fiber_manual_record', colorClass: 'red', listItem: 'Failing resource/node' },
            { listIcion: 'build', listItem: 'Maintenance mode' },
            { listIcion: 'fiber_manual_record', colorClass: 'gray', listItem: 'Offline/standby mode' },
            { listIcion: 'star', listItem: 'Double state (master/slave)' },
            { listIcion: 'fiber_manual_record', colorClass: 'gray', listItem: 'Not working resource/node' },
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
