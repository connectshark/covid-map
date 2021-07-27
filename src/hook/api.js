import axios from 'axios'

const api = {
  getFullData () {
    return new Promise((resolve) => {
      axios({
        method: 'get',
        baseURL: process.env.VUE_APP_URL,
        params: {
          CK: 'covid-19@nchc.org.tw',
          querydata: '4001',
          limited: 'TWN'
        }
      }).then(res => {
        resolve(res.data)
      })
    })
    
  }
}

export default api