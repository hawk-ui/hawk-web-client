<template>
  <div class="container-fluid">
    <app-page-title :pageTitle="pageTitle">
      <button class="btn btn-primary btn-sm">
        <i class="material-icons md-18">add</i> Add new cluster
      </button>
    </app-page-title>
    <div class="breadcrumbs">Clusters overview</div>
    
    <section class="status-summary-section">
      <div class="row">
        <div class="col-4 clusters-box">
          <div class="summary-box ">
            <h5>Clusetr status summary</h5>
            <div class="row clusters-status">
              <div class="col-3 status-box total-box"> <span>32</span>Total</div>
              <div class="col-3 status-box critical-box"> <span>2</span><i class="material-icons md-18 critical-status">error</i>Critical</div>
              <div class="col-3 status-box warning-box"><span>0</span><i class="material-icons md-18 warning-status">warning</i>Warning</div>
              <div class="col-3 status-box running-box"><span>2</span><i class="material-icons md-18 running-status">check_circle</i>Running</div>
            </div>
          </div>

        </div>
        <div class="col-4 nodes-resources-box">
          <div class="summary-box">
            <img src="../../assets/images/graph.png">
          </div>
        </div>
        <div class="col-4 graph-box">
         <div class="summary-box">
           <img src="../../assets/images/graph2.png">
         </div>
        </div>
      </div>
    </section>

    <section>
      <h3>Clusters list</h3>
    </section>

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
        pageTitle: this.$t('pages.monitoring_page.page-title')
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
