<template>
  <div>
    <h3>{{ $t("pages.monitoring_page.page-title") }}</h3>
    <button @click='fetchData'>Fetch Data</button>
    <hr>

    <div class="dashboard-container">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
   .dashboard-container {
    width: 100%;
    background: #fff;
    padding: 50px;
    box-shadow: 0px 1px 3px #c1c1c1;
    margin-top: 30px
   }

</style>
