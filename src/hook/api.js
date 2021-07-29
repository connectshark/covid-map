import axios from 'axios'

const api = {
  getFullData () {
    return new Promise((resolve) => {
      axios.get('/api/covid19?CK=covid-19@nchc.org.tw&querydata=3001&limited=TWN')
        .then(res => resolve(res.data))
    })
    
  }
}

export default api