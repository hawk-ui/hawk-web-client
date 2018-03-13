<template>
  <div class="login-bg">
    <header>
      <div class="container">
        <div class="row">
          <div class="navbar-header" role="navigation">
            <a class="navbar-brand" href="/">SUSE Hawk</a>
          </div>
          <div class="btn-group pull-right">
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
      <div class="container" id="content">
        <div class="row">
          <div class="col-sm-6 hidden-xs">
             <h2>
              SUSE <span>High Availability</span>
            </h2>
             <p>Hawk simplifies the management and configuration of High Availability clusters, making it easy to eliminate downtime and maximizing service availability.
            </p>
          </div>
          <div class="col-sm-4 col-sm-offset-1">
            <h3>Sign in</h3>
            <div class="row" id="flashes"></div>

            <form class="form-simple login-panel">
              <div class="form-group">
                <input placeholder="Enter your username..." class="form-control" type="text" />
              </div>
              <div class="form-group">
                <input placeholder="Enter your password..." class="form-control" type="password" />
              </div>
              <input type="submit" name="commit" value="Login" class="btn btn-primary btn-block" />
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
                <i class="material-icons md-16">device_hub</i></a>
              <a href="http://hawk-ui.github.io/" target="_blank">
                <i class="material-icons md-16">description</i></a>
              <a href="http://hawk-guide.readthedocs.io/en/latest/" target="_blank">
                <i class="material-icons md-16">book</i></a>
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
}
</script>

<style lang="scss">
</style>
