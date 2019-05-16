<template>
  <div class="container-fluid">
    <app-page-title :pageTitle="pageTitle">
      <button class="btn btn-primary btn-sm">
        <i class="material-icons md-18">add</i> Add new cluster
      </button>
    </app-page-title>
    <div class="breadcrumbs">Overview</div>
    
    <div class="status-summary-section">
      <div class="row">
        <div class="col-sm">
          One of three columns
        </div>
        <div class="col-sm">
          One of three columns
        </div>
        <div class="col-sm">
          One of three columns
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import PageTitle from '../shared/PageTitle.vue'
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
      'app-page-title': PageTitle,
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
