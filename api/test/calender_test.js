const assert = require('chai').expect;

const page = require('../page/calender_page.js');
const data = require('../data/calender_data.json')

const testCase = {
    "positive": {
        "holidayInIndonesa": "As a User, I want know holiday in Indoneisa 2019",
    },
    "negative": {
        "apiKeyInvalid": "As a User Not Valid, I should calender holiday",
    }
}

describe(`Testing API get Calender holiday`, () => {
    const key = '5adbf3b69e48a83aaa1c5d2e23383f0b7fa7f34e';

    it(`@get ${testCase.positive.holidayInIndonesa}`, async () => {
        const response = await page.getCalenderHoliday(data.datavalid);
        assert(response.status).to.equal(200);
    });

    it(`@get ${testCase.negative.apiKeyInvalid}`, async () => {
        const response = await page.getCalenderHoliday(data.invalidKey);
        assert(response.status).to.equal(401);
    });
}) 