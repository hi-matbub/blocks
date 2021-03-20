const { hasDuplicateValues } = require('../lib');

describe('if-array-has-duplicate-values', () => {
  it('should return truthy value on match', () => (
    expect(hasDuplicateValues([1,2,5,5]))
      .toStrictEqual({status: true, msg: 5})
  ));

  it('should return a falsey value if no match', () => (
    expect(hasDuplicateValues([1,2,3]))
      .toStrictEqual({status: false})
  ));
});