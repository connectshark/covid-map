import moment from 'moment'

const time = {
  formatter (date) {
    return parseInt(moment(date, 'YYYY-MM-DD').format('x'))
  }
}

export default time