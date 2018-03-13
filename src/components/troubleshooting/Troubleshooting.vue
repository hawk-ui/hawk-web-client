<template>
   <div>
    <app-page-header :pageTitle="pageTitle"></app-page-header>
    <div class="container-fluid">
      <div class="panel panel-default panel-trubleshooting">
        <div class="panel-heading">
          <h4 class="panel-title">
            Generate or Upload Report
          </h4>
        </div>
          
        <div class="trubleshooting-container">
          <div class="error-container">
            <button class="btn btn-primary">Oct 12,2017 - Dec12,2017</button> or
            <button class="btn btn-primary">Upload Report</button>
          </div>
          <div class="dashboard-header">
            <input class="form-control search" type="text" value="search...">
            <i class="material-icons md-18 pull-right">filter_list</i>
          </div>
          <table class="table dashboard-table">
            <thead>
              <!-- Nodes Row -->
              <tr>
                <th>Name</th>
                <th>From</th>
                <th>Untill</th>
                <th>Operations</th>
              </tr>
             </thead>
              <!-- End Nodes Row -->
              <!-- Resources Row -->
            <tbody>
              <tr>
                <td>Hawk</td>
                <td>2017-09-05 12:23:25 UTC</td>
                <td>2017-09-05 13:23:25 UTC</td>
                <i class="material-icons md-18">filter_list</i>
              </tr>
            <!-- End Resources Row -->
            </tbody>
          </table>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PageHeader from '../shared/page_header/PageHeader.vue'

  export default {
    data: function () {
      return {
        pageTitle: this.$t('pages.trubleshooting_page.page-title')
      }
    },
    components: {
      'app-page-header': PageHeader
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../assets/css/trubleshooting.scss';
</style>
