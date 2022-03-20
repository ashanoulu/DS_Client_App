export default {
    methods: {
        getLoggedInUser(){
            let user = JSON.parse(localStorage.getItem("user"));
            return user;
        },

        createToken(myID, password){
            let token = 'Basic '+Buffer.from(`${myID}:${password}`, 'utf8').toString('base64')
            return token
        },

        getCommonUserRequestData() {
            let model = { MyID : this.getLoggedInUser().myID, LanguageCode : 'SH'}
            return model
        },
        getAuthHeader(){
            let token = this.getLoggedInUser().token
            return {
                'Authorization': token,
                'Content-type': 'application/json',
                'accept' : 'application/json'
            }
        },
        getNormalHeader(){
            return {
                "Content-type": "application/json"
            }
        }
    },
}