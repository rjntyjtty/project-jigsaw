
const axios = require('axios')

let projectRequests = {

    addProject: async function (obj) {
        try {
            const response = await axios.post('/api/projects', obj)
            return response
        }
        catch (error) {
            //console.error(error);
            return error
        }
    },
    getProject: async function (id) {
        try {
            const response = await axios.get('/api/projects/' + id + '/')
            return response
        }
        catch (error) {
            //console.error(error);
            return error
        }
    },
    updateProject: async function (obj) {
        try {
            const response = await axios.patch('/api/projects', obj)
            return response
        }
        catch (error) {
            //console.error(error);
            return error
        }
    }


}

export default projectRequests;
