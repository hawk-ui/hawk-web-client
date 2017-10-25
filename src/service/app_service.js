import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3004'

const appService = {
  getCib (path) {
    return new Promise((resolve) => {
      axios.get(path)
        .then(response => { resolve(response.data) })
    })
  }
}

export default appService
