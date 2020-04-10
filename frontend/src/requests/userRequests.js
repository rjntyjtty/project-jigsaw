
const axios = require('axios')

let userRequests = {

    signup: async function (new_user) {
        try {
            const response = await axios.post('/api/signup', new_user)
            return response
        }
        catch (error) {
            //console.error(error);
            return error
        }
    },
    signin: async function (user) {
        try {
            const response = await axios.post('/api/signin', user)
            return response
        }
        catch (error) {
            //console.error(error);
            return error.response;
        }
    },
    signout: async function () {
        try {
            const response = await axios.get('/api/signout')
            return response
        }
        catch (error) {
            //console.error(error);
            return error
        }
    },
    getCurrUser: async function () {
        try {
            const response = await axios.get('/api/current_user')
            return response
        }
        catch (error) {
            //console.error(error);
            return error
        }
    }

}

export default userRequests;
