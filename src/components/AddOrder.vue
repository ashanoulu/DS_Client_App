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
                                    <a href="http://localhost:8080/AddMenu"  class="active" id="login-form-link">Add Order</a>
                                </div>
                                <div class="col-xs-6">
                                    <a href="http://localhost:8080/ViewOrder" id="register-form-link">View Order</a>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <form id="login-form" role="form" style="display: block;">
                                        <div class="form-group">
                                            <select v-model="restaurant" name="Restaurant" id="restaurant">
                                                <option v-for="rest in restaurantList" :value="rest.id">{{rest.name}}</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <select v-model="menu" name="Menu" id="menu">
                                                <option v-for="menu in menuList" :value="menu.id">{{menu.name}}</option>
                                            </select>
                                        </div>
<!--                                        <div class="form-group">-->
<!--                                            <input v-model="description" name="password" tabindex="2" class="form-control" placeholder="Description">-->
<!--                                        </div>-->
<!--                                        <div class="form-group">-->
<!--                                            <input v-model="price"  name="password" id="price" tabindex="2" class="form-control" placeholder="Price">-->
<!--                                        </div>-->
                                        <div class="form-group">
                                            <input v-model="status" type="text"  id="status" tabindex="2" class="form-control" placeholder="Status">
                                        </div>
                                        <div class="form-group">
                                            <input v-model="QTY" type="text"  id="qty" tabindex="2" class="form-control" placeholder="QTY">
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
                                    <form id="register-form" role="form" style="display: none;">
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
        name: "AddOrder",
        data () {
            return {
                restaurant: '',
                menu: '',
                name: '',
                price: '',
                status: '',
                type: '',
                id: '',
                QTY:'',
                restaurantList: [],
                menuList: []
            }
        },
        mounted() {
            this.type = this.$route.query.type

            if (this.type == 'edit') {
                this.id = this.$route.query.id

                this.axios.get('/api/api/order/get/' + this.id).then(response => {
                    if (response.data) {
                        let data = response.data
                        this.restaurant= data.restaurant_id
                        this.menu= data.menu_id
                        this.QTY= data.qty
                        this.status= data.status
                    }
                })
            }

            this.getInitialData()
        },
        methods: {
            getInitialData() {
                this.axios.get('/api/api/menu/list/3a9e5c1a-acdb-450c-a85d-dfcaface1976').then(response => {
                    if (response.data) {
                        this.menuList = response.data.menus
                    }
                })

                this.axios.get('/api/api/restaurant/list/').then(response => {
                    if (response.data) {
                        this.restaurantList = response.data.restaurants
                    }
                })
            },
            submitMenu() {
                if (this.type == 'edit') {
                    this.axios.put('/api/api/order/update', {
                        user_id: '3a9e5c1a-acdb-450c-a85d-dfcaface1976',
                        restaurant_id: this.restaurant,
                        menu_id: this.menu,
                        status: this.status,
                        qty: this.QTY
                    }).then(response => {
                        alert(response.data.message)
                        this.restaurant = ''
                        this.menu = ''
                        this.QTY = ''
                        this.status = ''
                    }).catch(e => alert(e))
                } else {
                    this.axios.post('/api/api/menu/new', {
                        user_id: '3a9e5c1a-acdb-450c-a85d-dfcaface1976',
                        restaurant_id: this.restaurant,
                        menu_id: this.menu,
                        status: this.status,
                        qty: this.QTY
                    }).then(response => {
                        alert(response.data.message)
                        this.restaurant = ''
                        this.menu = ''
                        this.QTY = ''
                        this.status = ''
                    }).catch(e => alert(e))
                }
            }
        }
    }
</script>

<style scoped>

</style>
