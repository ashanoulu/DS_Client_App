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
                  <table>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Restaurant Name</th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr v-for="menu in menus" :key="menu.id">
                      <td>{{menu.name}}</td>
                      <td>{{menu.description}}</td>
                      <td>{{menu.price}}</td>
                      <td>{{menu.restaurant_name}}</td>
                      <td><input type="button" @click="editData(menu.id)" value="Edit"></td>
                      <td><input type="button" @click="deleteMenu(menu.id)" value="Delete"></td>
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
  name: "ViewMenu",
  data() {
    return {
      menus: []
    }
  },
  mounted() {
    this.getMenus()
  },
  methods: {
    getMenus(){
      this.axios.get('/api/api/menu/list/3a9e5c1a-acdb-450c-a85d-dfcaface1976', {headers: { 'x-access-token' : localStorage.getItem('token')}})
      .then(response => this.menus = response.data.menus)
      .catch(e => alert(e))
    },
    editData(id){
      this.$router.push({ path: '/AddMenu', query: { type: 'edit', id: id } })
    },
    deleteMenu(id) {
      this.axios.delete('/api/api/menu/delete/' + id).then(response => {
        if (response){
          alert('Deleted successfully')
          this.getMenus()
        }

      })
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
