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
      <!-- node cluster and resources status start -->
      <div class="row node-status">
        <div class="col-sm-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <h5>Resource</h5>
              <p><span class="status-circle status-started"></span> stonith-sbd</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <h5>Groups</h5>
              <p>G-proxy</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="panel panel-default">
            <div class="panel-body">
              <h5>Node</h5>
              <p><a href="">webui</a> <a href="">Hawk-webui</a></p>
            </div>
          </div>
        </div>
      </div>
      <!-- graphs start -->
      <div class="row">
        <div class="col-sm-6 resource-panel">
        <h4>Constraint</h4>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <span><i class="material-icons md-18">location_on</i>Location</span>
                <div class='rightside-icon'>
                  <span>2</span>
                  <a data-toggle="collapse" class="collapsed" href="#location" >
                    <i class="material-icons icon-up">keyboard_arrow_up</i>
                  </a>
                </div>
              </h4>
            </div>
            <div id="location" class="panel-collapse collapse">
             <div class="panel-body">
              <ul>
                <li>base-colone@web-server <a href=""><i class="material-icons md-18">mode_edit</i></a></li>
                <li>base-colone@web-server <a href=""><i class="material-icons md-18">mode_edit</i></a></li>
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
                  <a data-toggle="collapse" class="collapsed" href="#order" >
                    <i class="material-icons icon-up">keyboard_arrow_up</i>
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
                  <a data-toggle="collapse" class="collapsed" href="#collocation" >
                    <i class="material-icons icon-up">keyboard_arrow_up</i>
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
                  <a data-toggle="collapse" class="collapsed" href="#ticket" >
                    <i class="material-icons icon-up">keyboard_arrow_up</i>
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
          <div class="panel panel-default table-event-resources">
           <table class="table">
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
                <tr>
                  <td ><span class="status-circle status-started"></span>Running since 3 hrs</td>
                </tr>
                <tr>
                  <td><span class="status-circle status-not-running"></span>On maintanenece since 16 hrs</td>
                </tr>
                <tr>
                  <td><span class="status-circle status-stopped"></span>Stooped since 18.10.2017</td>
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
    'app-page-title': PageTitle,
    'app-dropdown': Dropdown
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
