<template>
  <div>
    <app-page-title :pageTitle="pageTitle"></app-page-title>
    <div class="container-fluid configuration-page">
      <div class="row">
        <div class="col-sm-3">
          <div class="card config-card">
            <i class="eos-icons md-48">resource</i>
            <div class="config-card-contain">
              <h4>Resource</h4>
              <span>Total: 2</span>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card config-card">
            <i class="material-icons md-48">group_work</i>
            <div class="config-card-contain">
              <h4>Group</h4>
              <span>Total: 2</span>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card config-card">
            <i class="material-icons md-48">local_offer</i>
            <div class="config-card-contain">
              <h4>Tag</h4>
              <span>Total: 2</span>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card config-card">
            <i class="eos-icons md-48">constraint</i>
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
          <div class="card setting-card">
            <i class="material-icons md-48">lock_outline</i>
            <h4>Access Control</h4>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card setting-card">
            <i class="material-icons md-48">list</i>
            <h4>Options</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from '../shared/PageTitle.vue'

export default {
  data: function () {
    return {
      pageTitle: 'Configuration'
    }
  },
  components: {
    'app-page-title': PageTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
