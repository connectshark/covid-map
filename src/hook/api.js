import axios from 'axios'

const api = {
  getFullData () {
    return new Promise((resolve) => {
      axios.get(process.env.VUE_APP_URL)
        .then(res => resolve(res.data))
    })
  }
}

export default api