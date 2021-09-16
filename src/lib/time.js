import dayjs from 'dayjs'

const time = {
  formatter (date) {
    return dayjs(date, 'YYYY-MM-DD').format('M/DD')
  },

  filter (date) {
    return dayjs(date, 'YYYY-MM-DD').isAfter(dayjs('2021-01-01'))
  }
}

export default time