<template>
  <div>
    <app-page-title :pageTitle="pageTitle">
      <div class="back-setting-btn-group">
        <button class="btn btn-default">Back</button>
        <div class="dropdown pull-right">
          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="material-icons md-18">settings</i>
          </button>
          <app-dropdown :lists="nodeList" :listType="iconList"></app-dropdown>
        </div>
      </div>
    </app-page-title>
    <div class="container-fluid">
      <div class="panel panel-danger">
        <div class="panel-heading">
          <h3 class="panel-title">Errors</h3>
        </div>
        <div class="panel-body">
          panel content
        </div>
      </div>
      <!-- node cluster and resources status start -->
      <div class="row node-status">
        <div class="col-sm-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <h5>Node</h5>
              <p><span class="status-circle status-started"></span> Hawk node1</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <h5>Cluster</h5>
              <p>@Web-server</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <h5>Resources</h5>
              <p>230</p>
            </div>
          </div>
        </div>
      </div>
      <!-- graphs start -->
      <div class="row">
        <div class="col-sm-6">
          <div class="panel panel-default">
            <div class="panel-heading panel-graphs panel-heading-no-bg">
              <h4 class="panel-title">
                <span>CPU Usage</span>
                <a data-toggle="collapse" href="#graph1" class='pull-right'>
                  <i class="material-icons icon-up">keyboard_arrow_up</i>
                </a>
              </h4>
            </div>
            <div id="graph1" class="panel-collapse collapse text-center in">
              <div class="panel-body"><img src="../../assets/images/node-graph1.jpg" class="hawk-logo"></div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="panel panel-default">
            <div class="panel-heading panel-graphs panel-heading-no-bg">
              <h4 class="panel-title">
                <span>Disk & Memory Usage</span>
                <a data-toggle="collapse" href="#graph2" class='pull-right'>
                  <i class="material-icons icon-up">keyboard_arrow_up</i>
                </a>
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
            <table class="table table-node-resources">
              <thead>
                <tr>
                  <th>Resources</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="status-text"><span class="status-circle status-started"></span>stonith-sbd</td>
                  <td>Running since 3 hrs</td>
                  <td class="col-sm-1">
                    <div class="dropdown pull-right">
                      <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="material-icons md-18">more_vert</i>
                      </button>
                      <app-dropdown :lists="resourceList" :listType="iconList"></app-dropdown>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="status-text"><span class="status-circle status-not-running"></span>base-clone</td>
                  <td>On maintanenece since 16 hrs</td>
                  <td>
                    <div class="dropdown pull-right">
                      <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="material-icons md-18">more_vert</i>
                      </button>
                      <app-dropdown :lists="resourceList" :listType="iconList"></app-dropdown>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="status-text"><span class="status-circle status-stopped"></span>c-clusterfs</td>
                  <td>Stooped since 18.10.2017</td>
                  <td>
                    <div class="dropdown pull-right">
                      <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="material-icons md-18">more_vert</i>
                      </button>
                      <app-dropdown :lists="resourceList" :listType="iconList"></app-dropdown>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="status-text"><span class="status-circle status-stopped"></span>g-proxy</td>
                  <td>Stopped since 3 hrs</td>
                  <td>
                    <div class="dropdown pull-right">
                      <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="material-icons md-18">more_vert</i>
                      </button>
                      <app-dropdown :lists="resourceList" :listType="iconList"></app-dropdown>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="status-text"><span class="status-circle status-started"></span>cl-servers</td>
                  <td>Running since 12 hrs</td>
                  <td>
                    <div class="dropdown pull-right">
                      <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="material-icons md-18">more_vert</i>
                      </button>
                      <app-dropdown :lists="resourceList" :listType="iconList"></app-dropdown>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="panel panel-default">
            <table class="table table-node-events">
              <thead>
                <tr>
                  <th>Events</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td ><span class="status-circle status-started"></span>Running since 3 hrs</td>
                </tr>
                <tr>
                  <td><span class="status-circle status-not-running"></span>On maintanenece since 16 hrs</td>
                </tr>
                <tr>
                  <td><span class="status-circle status-stopped"></span>Stooped since 18.10.2017</td>
                </tr>
                <tr>
                  <td><span class="status-circle status-stopped"></span>Stopped since 3 hrs</td>
                </tr>
                <tr>
                  <td><span class="status-circle status-started"></span>Running since 12 hrs</td>
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
import PageTitle from '../shared/PageTitle.vue'
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
      }
    }
  },
  components: {
    'app-page-title': PageTitle,
    'app-dropdown': Dropdown
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
