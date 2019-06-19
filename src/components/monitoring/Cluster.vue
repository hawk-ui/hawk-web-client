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
        <div class="col-xl-4 col-sm-12 clusters-box">
          <div class="summary-box ">
            <h5>Clusetr status summary</h5>
            <div class="row clusters-status">
              <div class="col-3 status-box total-box"> <span>{{ cib.cluster_property.length }}</span>Total</div>
              <div class="col-3 status-box running-box"><span>1</span><i class="material-icons md-18 running-status">check_circle</i>Running</div>
              <div class="col-3 status-box critical-box"> <span>0</span><i class="material-icons md-18 critical-status">error</i>Critical</div>
              <div class="col-3 status-box warning-box"><span>0</span><i class="material-icons md-18 warning-status">warning</i>Warning</div>        
            </div>
          </div>

        </div>
        <div class="col-xl-4 col-sm-12 nodes-resources-box">
          <div class="summary-box">
            <!-- graph Row -->
            <vc-donut
              background="white" foreground="grey"
              :size="150" unit="px" :thickness="20"
              has-legend legend-placement="top"
              :sections="sections" :total="100"
              :start-angle="0"
              @section-click="handleSectionClick"
            >
              <h1>100%</h1>
            </vc-donut>
          </div>
        </div>
        <div class="col-xl-4 col-sm-12 graph-box">
         <div class="summary-box">
           <img src="../../assets/images/graph2.png">
         </div>
        </div>
      </div>
    </section>

    <section class="margin-top-xxl">
      <h3>Clusters list</h3>
      <div class="shadow-container margin-top-l">
        <div class="search-section">
          <input class="form-control search" type="text" value="search...">
        </div>
        <table class="table">
          <thead>
            <!-- Nodes Row -->
            <tr>
              <th width="5"></th>
              <th>Cluster name</th>
              <th>Availability</th>
              <th>Nodes</th>
              <th>Resources</th>
              <th>Type</th>
            </tr>
           </thead>
            <!-- End Nodes Row -->
            <!-- Resources Row -->
          <tbody>
            <tr v-for="cluster in cib.cluster_property">
              <td> <span class="status-circle"></span></td>
              <td>{{ cluster.cluster_name }}test</td>
              <td>99.56%</td>
              <td>{{ cib.nodes_status.length }}</td>
              <td>{{ NodesCount(cib.nodes_status) }}</td>
              <td>{{ cluster.cluster_infrastructure }}</td>
            </tr>
          <!-- End Resources Row -->
          </tbody>
        </table>
      </div>
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
      ...mapGetters(['cib', 'sections'])
    },
    methods: {
      NodesCount: function (nodes) {
        var nodesCounts = 0
        // for (var i = 0; i < nodes.length; i++) {
        //   var integer = parseInt(nodes[i].resources_running, 10)
        //   nodesCounts += integer
        //   console.log(nodes)
        // }
        return nodesCounts
      },
      handleSectionClick (section) {
        console.log(`${section.label} clicked.`)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
