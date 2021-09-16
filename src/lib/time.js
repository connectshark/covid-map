import dayjs from 'dayjs'

const time = {
  formatter (date) {
    return dayjs(date, 'YYYY-MM-DD').format('M/DD')
  },

  filter (date, afterDate = '2021-01-01') {
    return dayjs(date, 'YYYY-MM-DD').isAfter(dayjs(afterDate))
  }
}

export default time