<template>
  <div class="container-fluid">
    <app-page-title :pageTitle="pageTitle">
      <button class="btn btn-primary btn-sm">
        <i class="material-icons md-18">add</i> Add new cluster
      </button>
    </app-page-title>
    <div class="breadcrumbs">Clusters overview</div>
    
    <section>
      <h5>Clusters status summary</h5>
      <div class="row">

        <div class="col-xl-6 col-sm-12 clusters-box">
          <div class="box-shadow">
            
            <div class="clusters-status">
              <div class="col-3 status-box total-box"> <span>{{ cib.cluster_property.length }}</span>Total</div>
              <!-- Todo Cluster count for Running Critical and Warning -->
              <div class="col-3 status-box running-box"><span>1</span><i class="material-icons md-18 running-status">check_circle</i>Running</div>
              <div class="col-3 status-box critical-box"> <span>0</span><i class="material-icons md-18 critical-status">error</i>Critical</div>
              <div class="col-3 status-box warning-box"><span>0</span><i class="material-icons md-18 warning-status">warning</i>Warning</div>        
            </div>
          </div>

        </div>
        <div class="col-xl-3 col-sm-6 nodes-box">
          <div class="box-shadow">
            <div class="nodes-graph text-center">
              <!-- graph Row -->
              <vc-donut
                background="white" foreground="grey"
                :size="110" unit="px" :thickness="18"
                has-legend legend-placement="bottom"
                :sections="nodesSections" :total="totalNodes"
                :start-angle="0">
                <div class="total-count">
                  {{ totalNodes }}
                  <span>Nodes</span>
                </div>
              </vc-donut>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 resources-box">
         <div class="box-shadow">
           <div class="resource-graph text-center">
              <!-- graph Row -->
              <vc-donut
                background="white" foreground="grey"
                :size="110" unit="px" :thickness="18"
                has-legend legend-placement="bottom"
                :sections="resourceSections" :total="totalResource"
                :start-angle="0">
                <div class="total-count">
                  {{ totalResource }}
                  <span>Resources</span>
                </div>
              </vc-donut>
            </div>
         </div>
        </div>
      </div>
    </section>

    <section class="margin-top-xxl">
      <h3>Clusters list </h3>
      <div class="box-shadow-no-padding margin-top-l">
        <div class="search-section">
          <input class="form-control" type="text" v-model="search" placeholder="Search cluster..">
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
            <tr v-for="cluster in filterCluster">
              <td> <span class="status-circle"></span></td>
              <td>{{ cluster.cluster_name }}</td>
              <td>99.56%</td>
              <td>{{ cib.nodes_status.length }}</td>
              <td>{{ cib.resources_status.length }}</td>
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
        pageTitle: this.$t('pages.monitoring_page.page-title'),
        search: ''
      }
    },
    components: {
      'app-page-title': PageTitle,
      'app-dropdown': Dropdown,
      'app-add-cluster': AddCluster
    },
    computed: {
      ...mapGetters(['cib', 'nodesSections', 'totalNodes', 'resourceSections', 'totalResource']),
      filterCluster: function () {
        return this.cib.cluster_property.filter((cluster) => {
          return cluster.cluster_name.match(this.search)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
