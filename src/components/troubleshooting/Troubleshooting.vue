<template>
   <div>
    <app-page-title :pageTitle="pageTitle"></app-page-title>
    <div class="container-fluid">
      <div id="tabs" class="default-tabs trubleshooting-tabs"> 
        <ul  class="nav nav-pills">
          <li class="active">
            <a href="#historyExplorer" data-toggle="tab"><i class="material-icons md-18">history</i>History Explorer</a>
          </li>
          <li>
            <a href="#commandLog" data-toggle="tab"><i class="material-icons md-18">assignment</i>Command Log</span></a>
          </li>
        </ul>
        <div class="tab-content clearfix">
          <div class="tab-pane active" id="historyExplorer">
            <app-history-explorer></app-history-explorer>
          </div>
          <div class="tab-pane" id="commandLog">
            <app-command-log></app-command-log>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PageTitle from '../shared/page-title.vue'
  import HistoryExplorer from './HistoryExplorer.vue'
  import CommandLog from './CommandLog.vue'

  export default {
    data: function () {
      return {
        pageTitle: this.$t('pages.trubleshooting_page.page-title')
      }
    },
    components: {
      'app-command-log': CommandLog,
      'app-history-explorer': HistoryExplorer,
      'app-page-title': PageTitle
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
