const { expect } = require('@hapi/code');
const { it } = exports.lab = require('@hapi/lab').script();

it('returns true when 1 + 1 equals 2', () => {
    expect(1 + 1).to.equal(2);
});