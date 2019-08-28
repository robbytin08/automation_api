const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.CALENDER_API);

const getCalenderHoliday = (key, data) => api.get('')
    .set('api_key', key)
    .query(data)

module.exports = {
    getCalenderHoliday,
}