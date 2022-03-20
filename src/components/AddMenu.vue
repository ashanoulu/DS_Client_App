<template>
  <div>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="panel panel-login">
            <div class="panel-heading">
              <div class="row">
                <div class="col-xs-6">
                  <a href="http://localhost:8080/AddMenu"  class="active" id="login-form-link">Add Menu</a>
                </div>
                <div class="col-xs-6">
                  <a href="http://localhost:8080/ViewMenu" id="register-form-link">View Menu</a>
                </div>
              </div>
              <hr>
            </div>
            <div class="panel-body">
              <div class="row">
                <div class="col-lg-12">
                  <form id="login-form" role="form" style="display: block;">
                    <div class="form-group">
                      <input v-model="name" type="text" name="username1" tabindex="1" class="form-control" placeholder="Menu name">
                    </div>
                    <div class="form-group">
                      <input v-model="description" name="password" tabindex="2" class="form-control" placeholder="Description">
                    </div>
                    <div class="form-group">
                      <input v-model="price"  name="password" id="price" tabindex="2" class="form-control" placeholder="Price">
                    </div>
                    <div class="form-group">
                      <input v-model="status" type="text"  id="status" tabindex="2" class="form-control" placeholder="Status">
                    </div>
<!--                    <div class="form-group text-center">-->
<!--                      <input type="checkbox" tabindex="3" class="" name="remember" id="remember">-->
<!--                      <label for="remember"> Remember Me</label>-->
<!--                    </div>-->
                    <div class="form-group">
                      <div class="row">
                        <div class="col-sm-6 col-sm-offset-3">
                          <input type="submit" @click.prevent="submitMenu" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Add menu">
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="text-center">
<!--                            <a tabindex="5" class="forgot-password">Forgot Password?</a>-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <form id="register-form" action="https://phpoll.com/register/process" method="post" role="form" style="display: none;">
                    <div class="form-group">
                      <input type="text" name="username" id="username1" tabindex="1" class="form-control" placeholder="Username" value="">
                    </div>
                    <div class="form-group">
                      <input type="email" name="email" id="email" tabindex="1" class="form-control" placeholder="Email Address" value="">
                    </div>
                    <div class="form-group">
                      <input type="password" name="password" id="password1" tabindex="2" class="form-control" placeholder="Password">
                    </div>
                    <div class="form-group">
                      <input type="password" name="confirm-password" id="confirm-password" tabindex="2" class="form-control" placeholder="Confirm Password">
                    </div>
                    <div class="form-group">
                      <div class="row">
                        <div class="col-sm-6 col-sm-offset-3">
                          <input type="button" @click.prevent="submitMenu" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now">
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddMenu",
  data () {
    return {
      description: '',
      name: '',
      price: '',
      status: ''
    }
  },
  methods: {
    submitMenu() {
      this.axios.post('/api/api/menu/new', {
        name: this.name,
        description: this.description,
        price: this.price,
        status: this.status,
        restaurant_id: '3a9e5c1a-acdb-450c-a85d-dfcaface1976'
      }).then(response => {
        alert(response.data.message)
        this.name = '',
        this.description = '',
        this.price = '',
        this.status = ''
      }).catch(e => alert(e))
    }
  }
}
</script>

<style scoped>

</style>
