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
                                    <a href="http://localhost:8080/AddOrder"  class="active" id="login-form-link">Add Order</a>
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
                                    <table>
                                        <tr>
                                            <th>Menu</th>
                                            <th>Menu Description</th>
<!--                                            <th>Description</th>-->
                                            <th>QTY</th>
                                            <th>Restaurant Name</th>
                                            <th>Restaurant Contact</th>
                                            <th>Restaurant Address</th>
<!--                                            <th>User Name</th>-->
                                            <th></th>
                                            <th></th>
                                        </tr>
                                        <tr v-for="order in orders" :key="order.id">
                                            <td>{{order.menu_name}}</td>
                                            <td>{{order.menu_description}}</td>
                                            <td>{{order.qty}}</td>
                                            <td>{{order.restaurant_name}}</td>
                                            <td>{{order.restaurant_contact_no}}</td>
                                            <td>{{order.restaurant_address}}</td>
                                            <td><input type="button" @click="editData(order.restaurant_id, order.id)" value="Edit"></td>
                                            <td><input type="button" @click="deleteData(order.restaurant_id, order.id)" value="Delete"></td>
                                        </tr>
                                    </table>
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
        name: "ViewOrder",
        data() {
            return {
                orders: []
            }
        },
        mounted() {
            this.getOrders()
        },
        methods: {
            getOrders(){
                this.axios.get('/api/api/order/3a9e5c1a-acdb-450c-a85d-dfcaface1976', {headers: { 'x-access-token' : localStorage.getItem('token')}})
                    .then(response => this.orders = response.data.orders)
                    .catch(e => alert(e))
            },
            editData(restaurant_id, id){
                this.$router.push({ path: '/AddOrder', query: { type: 'edit', id: id, restaurant_id: restaurant_id } })
            },
            deleteData(restaurant_id, id){
                this.axios.delete('/api/api/order/' + restaurant_id + '/' + id, {headers: { 'x-access-token' : localStorage.getItem('token')}})
                    .then(response => {
                      alert('Successfully Deleted!')
                      this.getOrders()
                        console.log(response)
                    })
                    .catch(e => alert(e))
            }
        },
    }
</script>

<style scoped>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #dddddd;
    }
</style>
