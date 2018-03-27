<template>
  <div class="panel panel-default panel-trubleshooting">
    <div class="panel-heading">
      <h4 class="panel-title">
        List crm commands recently executed by Hawk, most recent first
      </h4>
    </div>
    <div class="trubleshooting-container">
      <ul class="history-log">
        <li>
          <div class="row">
            <div class="col-sm-10">
              <h5>crm configure</h5>
              <p>primitive <span class="red">ted</span> @web-server ocf:heartbeat:Dummy op start <span class="green">timeout=20</span> op stop timeout=20 op monit or 
timeout=20 interval=10 meta  target-role=started</p>
            </div>
            <div class="col-sm-2">
              <div class="date-time-block">
                <i class="material-icons md-14">access_time</i> July 06, 2015 8:30am
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="row">
            <div class="col-sm-10">
              <h5>crm configure</h5>
              <p><span class="blue">primitive ted @web-server ocf:heartbeat:Dummy op start timeout=20 op stop timeout=20 op monit or 
timeout=20 interval=10 meta  target-role=started</span></p>
            </div>
            <div class="col-sm-2">
              <div class="date-time-block">
                <i class="material-icons md-14">access_time</i> July 06, 2015 8:30am
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="row">
            <div class="col-sm-10">
              <h5>crm configure</h5>
              <p>primitive ted @web-server ocf:heartbeat:Dummy op start timeout=20 op stop timeout=20 op monit or 
timeout=20 interval=10 meta  target-role=started</p>
            </div>
            <div class="col-sm-2">
              <div class="date-time-block">
                <i class="material-icons md-14">access_time</i> July 06, 2015 8:30am
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
