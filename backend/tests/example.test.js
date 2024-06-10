// backend/tests/example.test.js
const { expect } = require('chai');

const { expect } = require('chai');
const exampleUtil = require('../utils/utilsHelper');

describe('Utils Helper Tests', () => {
    it('should format data correctly', () => {
        const inputData = { /* Add your input data here */ };
        const formattedData = exampleUtil.formatData(inputData);

        // Add assertion to test the formatting logic
        expect(formattedData).to.deep.equal({ /* Add your expected output data here */ });
    });
});
