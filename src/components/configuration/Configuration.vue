<template>
  <div>
    <app-page-header :pageTitle="pageTitle"></app-page-header>
    <div class="container-fluid configuration">
      <div class="row">
        <div class="col-sm-3">
          <div class="panel panel-default config-card">
            <i class="material-icons config-card-icon">settings_input_hdmi</i>
            <div class="config-card-contain">
              <h4>Resource</h4>
              <span>Total: 2</span>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="panel panel-default config-card">
            <i class="material-icons config-card-icon">group_work</i>
            <div class="config-card-contain">
              <h4>Group</h4>
              <span>Total: 2</span>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="panel panel-default config-card">
            <i class="material-icons config-card-icon">local_offer</i>
            <div class="config-card-contain">
              <h4>Tag</h4>
              <span>Total: 2</span>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="panel panel-default config-card">
            <i class="material-icons config-card-icon">remove_red_eye</i>
            <div class="config-card-contain">
              <h4>Constraints</h4>
              <span>Total: 2</span>
            </div>
          </div>
        </div>
      </div>
      <h4>Settings</h4>
      <div class="row">
        <div class="col-sm-3">
          <div class="panel panel-default setting-card">
            <i class="material-icons setting-card-icon">lock_outline</i>
            <h4>Access Control</h4>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="panel panel-default setting-card">
            <i class="material-icons setting-card-icon">list</i>
            <h4>Options</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '../shared/page-header.vue'

export default {
  data: function () {
    return {
      pageTitle: 'Configuration'
    }
  },
  components: {
    'app-page-header': PageHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
