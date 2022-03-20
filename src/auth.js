import bearer from '@websanova/vue-auth/drivers/auth/bearer'
import axios from '@websanova/vue-auth/drivers/http/axios.1.x'
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x'

const config = {
    auth: bearer,
    http: axios,
    router: router,
    tokenDefaultName: 'myID',
    tokenStore: ['localStorage'],
    /*rolesVar: 'role',*/
    registerData: {url: 'rest/StudentService/rest/student/register', method: 'POST', redirect: '/wait'},
    loginData: {url: 'rest/StudentService/rest/student/login', method: 'POST', redirect: '/dashboard', fetchUser: false},
    logoutData: {url: 'logout', method: 'POST', redirect: '/login', makeRequest: true},
    fetchData: {url: 'user', method: 'GET', enabled: false},
    refreshData: {url: 'refresh', method: 'GET', enabled: false, interval:0 },
    authRedirect: { path: '/' },
    // parseUserData(response){
    //     let data = response.data;
    //     console.log(data);
    //     data.refresh = response.refresh_token;
    //     localStorage.setItem("user", JSON.stringify(data));
    //     return data;
    // }
}

export default config
