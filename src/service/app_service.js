import axios from 'axios'

axios.defaults.baseURL = 'https://localhost:3000/api/v1/'

const appService = {
  getCib (path, token) {
    return new Promise((resolve) => {
      axios({method: 'get', url: path, crossDomain: true, headers: { 'Authorization': 'Bearer ' + token }})
        .then(response => { resolve(response.data) })
    })
  },
  login (path, UserInput) {
    return new Promise((resolve) => {
      axios({
        method: 'post',
        url: path,
        params: {
          'username': UserInput.username,
          'password': UserInput.password
        }
      }).then(response => { resolve(response.data) })
    })
  }
}

export default appService
