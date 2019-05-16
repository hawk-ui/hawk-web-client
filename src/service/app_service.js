import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3004/'

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
      }).then(response => { resolve(response.data); console.log('Login successful') })
    }).catch(error => { console.log('Login error'); console.log(error) })
  }
}

export default appService
