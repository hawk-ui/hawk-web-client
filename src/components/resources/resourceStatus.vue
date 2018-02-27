<template>
  <div>
    <app-page-header :pageTitle="pageTitle">
      <div class="back-btn-group">
        <button class="btn btn-default">Back</button>
        <div class="dropdown pull-right">
          <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="material-icons md-16">settings</i>
          </button>
          <app-dropdown :lists="nodeList" :listType="iconList"></app-dropdown>
        </div>
      </div>
    </app-page-header>
    <div class="container-fluid">
      <!-- node cluster and resources status start -->
      <div class="row node-status">
        <div class="col-sm-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>Resource</h3>
              <p><span class="status-circle status-green"></span> stonith-sbd</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>Groups</h3>
              <p>G-proxy</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>Node</h3>
              <p><a href="">webui</a> <a href="">Hawk-webui</a></p>
            </div>
          </div>
        </div>
      </div>
      <!-- graphs start -->
      <div class="row">
        <div class="col-sm-6">
        <h3 class="constraint-heading">Constraint</h3>
          <div class="panel panel-default resource-panel">
            <div class="panel-heading">
              <h4 class="panel-title">
                <span><i class="material-icons md-18">location_on</i>Location</span>
                <div class='rightside-icon'>
                  <span>2</span>
                  <a data-toggle="collapse" href="#location" >
                    <i class="material-icons icon-up">keyboard_arrow_up</i>
                  </a>
                </div>
              </h4>
            </div>
            <div id="location" class="panel-collapse collapse in">
             <div class="panel-body">
              <ul>
                <li>base-colone@web-server <a href=""><i class="material-icons md-16">mode_edit</i></a></li>
                <li>base-colone@web-server <a href=""><i class="material-icons md-16">mode_edit</i></a></li>
              </ul>
             </div>
              <div class="panel-footer text-right">
                <button class="btn btn-primary">+ Add</button>
              </div>
            </div>
          </div>

          <div class="panel panel-default resource-panel">
            <div class="panel-heading">
              <h4 class="panel-title">
                <span><i class="material-icons md-18">swap_vert</i>Order</span>
                <div class='rightside-icon'>
                  <span>0</span>
                  <a data-toggle="collapse" href="#order" >
                    <i class="material-icons icon-up">keyboard_arrow_down</i>
                  </a>
                </div>
              </h4>
            </div>
            <div id="order" class="panel-collapse collapse">
              <div class="panel-body">No order</div>
              <div class="panel-footer text-right">
                <button class="btn btn-primary">+ Add</button>
              </div>
            </div>
          </div>

          <div class="panel panel-default resource-panel">
            <div class="panel-heading">
              <h4 class="panel-title">
                <span><i class="material-icons md-18">add_location</i>Collocation</span>
                <div class='rightside-icon'>
                  <span>0</span>
                  <a data-toggle="collapse" href="#collocation" >
                    <i class="material-icons icon-up">keyboard_arrow_down</i>
                  </a>
                </div>
              </h4>
            </div>
            <div id="collocation" class="panel-collapse collapse">
              <div class="panel-body">No collocation</div>
              <div class="panel-footer text-right">
                <button class="btn btn-primary">+ Add</button>
              </div>
            </div>
          </div>
          <div class="panel panel-default resource-panel">
            <div class="panel-heading">
              <h4 class="panel-title">
                <span><i class="material-icons md-18">local_activity</i>Ticket</span>
                <div class='rightside-icon'>
                  <span>0</span>
                  <a data-toggle="collapse" href="#ticket" >
                    <i class="material-icons icon-up">keyboard_arrow_down</i>
                  </a>
                </div>
              </h4>
            </div>
            <div id="ticket" class="panel-collapse collapse">
              <div class="panel-body">No tickets</div>
              <div class="panel-footer text-right">
                <button class="btn btn-primary">+ Add</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
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
                <tr>
                  <td ><span class="status-circle status-green"></span>Running since 3 hrs</td>
                </tr>
                <tr>
                  <td><span class="status-circle status-gray"></span>On maintanenece since 16 hrs</td>
                </tr>
                <tr>
                  <td><span class="status-circle status-red"></span>Stooped since 18.10.2017</td>
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
      pageTitle: 'Resources Status',
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
