<template>
  <div class="login-bg">
    <header>
      <div class="container">
        <div class="row">
          <div class="navbar-header" role="navigation">
            <a class="navbar-brand" href="/">SUSE Hawk</a>
          </div>
          <div class="dropdown pull-right">
            <a class="btn btn-default dropdown language-btn" data-toggle="dropdown">
              English <span class="caret"></span>
            </a>
            <ul class="dropdown-menu dropdown-menu-login">
              <li><a href="#">English</a></li>
              <li><a href="#">Deutsch</a></li>
              <li><a href="#">Français</a></li>
              <li><a href="#">日本語</a></li>
              <li><a href="#">Español</a></li>
              <li><a href="#">Português brasileiro</a></li>
              <li><a href="#">简体中文</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="container login">
        <div class="row">
          <div class="col-sm-6 hidden-xs login-intro">
             <h2>
              SUSE <span>High Availability</span>
            </h2>
             <p>Hawk simplifies the management and configuration of High Availability clusters, making it easy to eliminate downtime and maximizing service availability.
            </p>
          </div>
          <div class="col-sm-4 col-sm-offset-1 login-form">
            <h3 class="sign-in-text">Sign in</h3>
            <div class="row" id="flashes"></div>
            <form class="form-simple login-panel" @submit.prevent="login">
                <div class="form-group">
                  <input class="form-control" placeholder="Enter your username..." type="text" v-model="user.username"/>
                </div>
                <div class="form-group">
                <input class="form-control" placeholder="Enter your password..." type="password" v-model="user.password"/>
              </div>
              <button class="btn btn-primary btn-block" type="submit">Submit</button>
            </form>           
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <div class="other-links">
              <a href="https://github.com/ClusterLabs/hawk" target="_blank">
                <i class="material-icons md-18">device_hub</i></a>
              <a href="http://hawk-ui.github.io/" target="_blank">
                <i class="material-icons md-18">description</i></a>
              <a href="http://hawk-guide.readthedocs.io/en/latest/" target="_blank">
                <i class="material-icons md-18">book</i></a>
            </div>
            <div class="copyright">Copyright © 2009-2017. SUSE, LLC</div>
          </div>
          <div class="col-sm-3">
            <div class="logo">
              <img src="../assets/images/logo-footer.png">
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-line"></div>
    </footer>
  </div>
</template>

<script>

export default {

  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    login: function () {
      this.$store.dispatch('login', {username: this.user.username, password: this.user.password})
    }
  }
}
</script>

<style lang="scss">
</style>
