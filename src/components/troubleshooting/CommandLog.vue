<template>
  <div class="trubleshooting-container">
    <div class="tab-inner-container">
      <h6>List crm commands recently executed by Hawk, most recent first</h6>
      <ul class="command-log-data">
        <li>
          <strong>crm configure </strong>
          <p>primitive <span class="log-red">ted</span> @web-server ocf:heartbeat:Dummy op start <span class="log-green">timeout=20</span> op stop timeout=20 op monit or 
timeout=20 interval=10 meta  target-role=started op stop timeout=20 op monit or </p>
          <div class="log-date-time">July 06, 2015 8:30am</div>  
        </li>
        <li>
          <strong>crm configure </strong>
          <p>primitive <span class="log-red">ted</span> @web-server ocf:heartbeat:Dummy op start <span class="log-green">timeout=20</span> op stop timeout=20 op monit or 
timeout=20 interval=10 meta  target-role=started @web-server ocf:heartbeat:Dummy op start</p>
          <div class="log-date-time">July 06, 2015 8:30am</div>  
        </li>
        <li>
          <strong>crm configure </strong>
          <p>@web-server ocf:heartbeat:Dummy op start <span class="log-green">timeout=20</span> op stop timeout=20 op monit or primitive <span class="log-red">ted</span> timeout=20 interval=10 meta  target-role=started</p>
          <div class="log-date-time">July 06, 2015 8:30am</div>  
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
