const { findMinimumValue } = require('../lib');

describe('find-minimum-value', () => {
  it('should return truthy value', () => expect(findMinimumValue([5,12,19,87])).toBe(5));
  it('should return truthy value', () => expect(findMinimumValue([4,3,23,2])).toBe(2));
});