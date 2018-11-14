<template>
  <div class="trubleshooting-container">
    <div class="tab-inner-container">
      <h6>Generate <span>Or</span> Upload Report</h6>
      <button class="btn btn-primary"><i class="material-icons md-18">event_note</i>Oct 12,2017 - Dec12,2017</button>
      <span class="or-span">or</span>
      <button class="btn btn-primary">Upload Report</button>
    </div>
    <div class="search-panel">
      <input class="form-control search" type="text" value="search...">
      <a href=""><i class="material-icons md-18">replay</i></a>
    </div>
    <table class="table reports-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>From</th>
          <th>Untill</th>
          <th class="text-center">Operations</th>
        </tr>
       </thead>
      <tbody>
        <tr>
          <td>Hawk</td>
          <td>2017-09-05 12:23:25 UTC</td>
          <td>2017-09-05 13:23:25 UTC</td>
          <td class="text-center"><a href=""><i class="material-icons md-18">more_vert</i></a></td>
        </tr>
        <tr>
          <td>Hawk</td>
          <td>2017-09-05 12:23:25 UTC</td>
          <td>2017-09-05 13:23:25 UTC</td>
          <td class="text-center"><a href=""><i class="material-icons md-18">more_vert</i></a></td>
        </tr>
        <tr>
          <td>Hawk</td>
          <td>2017-09-05 12:23:25 UTC</td>
          <td>2017-09-05 13:23:25 UTC</td>
          <td class="text-center"><a href=""><i class="material-icons md-18">more_vert</i></a></td>
        </tr>
        <tr>
          <td>Hawk</td>
          <td>2017-09-05 12:23:25 UTC</td>
          <td>2017-09-05 13:23:25 UTC</td>
          <td class="text-center"><a href=""><i class="material-icons md-18">more_vert</i></a></td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
  import PageHeader from '../shared/PageTitle.vue'

  export default {
    data: function () {
      return {
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
