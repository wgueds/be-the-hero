// import generateUniqueId to test
const generateUniqueId = require('../../src/utils/generateUnique');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();

        // ref: https://jestjs.io/docs/en/expect
        expect(id).toHaveLength(8);
    })
});