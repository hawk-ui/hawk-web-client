<template>
  <div>
    <app-page-header :pageTitle="pageTitle">
    <div class="dropdown text-right">
      <button class="btn btn-default">Back</button>
      <button class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="material-icons md-16">settings</i>
      </button>
      <app-dropdown class="legend-options" :lists="nodeList" :listType="iconList"></app-dropdown>
    </div>
    </app-page-header>
    <div class="inner">
      <div class="panel panel-danger">
        <div class="panel-heading">
          <h3 class="panel-title">Errors</h3>
        </div>
        <div class="panel-body">
          Panel content
        </div>
      </div>
      <!-- node cluster and resources status start -->
      <div class="row node-status">
        <div class="col-sm-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>Node</h3>
              <p><span class="status-circle status-green"></span> Hawk node1</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>Cluster</h3>
              <p>@Web-server</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>Cluster</h3>
              <p>230</p>
            </div>
          </div>
        </div>
      </div>
      <!-- graphs start -->
      <div class="row">
        <div class="col-sm-6">
          <div class="panel panel-default">
            <div class="panel-heading panel-graphs">
              <h4 class="panel-title">
                <span>CPU Usage</span>
                <a data-toggle="collapse" href="#graph1" class='pull-right'>
                  <i class="material-icons icon-down">keyboard_arrow_down</i>
                  <i class="material-icons icon-up">keyboard_arrow_up</i></a>
              </h4>
            </div>
            <div id="graph1" class="panel-collapse collapse text-center in">
              <div class="panel-body"><img src="../../assets/images/node-graph1.jpg" class="hawk-logo"></div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="panel panel-default">
            <div class="panel-heading panel-graphs">
              <h4 class="panel-title">
                <span>Disk & Memory Usage</span>
                <a data-toggle="collapse" href="#graph2" class='pull-right'>
                  <i class="material-icons icon-down">keyboard_arrow_down</i>
                  <i class="material-icons icon-up">keyboard_arrow_up</i></a>
              </h4>
            </div>
            <div id="graph2" class="panel-collapse collapse text-center in">
              <div class="panel-body"><img src="../../assets/images/node-graph2.jpg" class="hawk-logo"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- events start -->
      <div class="row">
        <div class="col-sm-8">
          <div class="panel panel-default">
            <table class="table">
              <thead>
                <tr>
                  <th>Resources</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="status-text"><span class="status-circle status-green"></span>stonith-sbd</td>
                  <td>Running since 3 hrs</td>
                  <td class="col-sm-1"><i class="material-icons">more_vert</i></td>
                </tr>
                <tr>
                  <td class="status-text"><span class="status-circle status-gray"></span>base-clone</td>
                  <td>On maintanenece since 16 hrs</td>
                  <td><i class="material-icons">more_vert</i></td>
                </tr>
                <tr>
                  <td class="status-text"><span class="status-circle status-red"></span>c-clusterfs</td>
                  <td>Stooped since 18.10.2017</td>
                  <td><i class="material-icons">more_vert</i></td>
                </tr>
                <tr>
                  <td class="status-text"><span class="status-circle status-red"></span>g-proxy</td>
                  <td>Stopped since 3 hrs</td>
                  <td><i class="material-icons">more_vert</i></td>
                </tr>
                <tr>
                  <td class="status-text"><span class="status-circle status-green"></span>cl-servers</td>
                  <td>Running since 12 hrs</td>
                  <td><i class="material-icons">more_vert</i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="panel panel-default">
            <table class="table">
              <thead>
                <tr>
                  <th>Events</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td ><span class="status-circle status-green"></span>Running since 3 hrs</td>
                </tr>
                <tr>
                  <td><span class="status-circle status-gray"></span>On maintanenece since 16 hrs</td>
                </tr>
                <tr>
                  <td><span class="status-circle status-red"></span>Stooped since 18.10.2017</td>
                </tr>
                <tr>
                  <td><span class="status-circle status-red"></span>Stopped since 3 hrs</td>
                </tr>
                <tr>
                  <td><span class="status-circle status-green"></span>Running since 12 hrs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../shared/page_header/PageHeader.vue'
import Dropdown from '../shared/Dropdown.vue'

export default {
  data: function () {
    return {
      pageTitle: 'Node Status',
      nodeList: {
        listType: 'iconList',
        liItems: [
          { listIcion: 'info', listItem: 'Details' },
          { listIcion: 'build', listItem: 'Maintenance' },
          { listIcion: 'power_settings_new', listItem: 'Standby' },
          { listIcion: 'delete_forever', listItem: 'Cleanup' }
        ]
      }
    }
  },
  components: {
    'app-page-header': PageHeader,
    'app-dropdown': Dropdown
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/node.scss';
</style>
