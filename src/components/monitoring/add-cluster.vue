<template>
  <app-model titleIcon="add" title="Add Cluster">
    <div class="form-group row">
      <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Cluster Name<span>*</span></label>
      <div class="col-sm-9">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="West Coast(Example)">
      </div>
    </div>
    <div class="form-group row">
      <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Hostname<span>*</span></label>
      <div class="col-sm-9">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="Node1.west.example.com">
      </div>
    </div>
    <div class="form-group row">
      <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Server port</label>
      <div class="col-sm-9">
        <input type="email" class="form-control form-control-sm" id="colFormLabelSm" placeholder="7630">
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-12">
        <button type="submit" class="btn btn-primary pull-right">Add</button>
      </div>
    </div>
  </app-model>
</template>

<script>
import Modal from '../shared/model.vue'

export default {
  components: {
    'app-model': Modal
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/css/common.scss';
</style>
