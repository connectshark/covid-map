import axios from 'axios'

const api = {
  getFullData () {
    axios({
      method: 'get',
      baseURL: process.env.VUE_APP_URL,
      params: {
        CK: 'covid-19@nchc.org.tw',
        querydata: '4001',
        limited: 'TWN'
      }
    }).then(res => {
      return res.data
    })
  }
}

export default api