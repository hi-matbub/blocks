const { sequentialSearch } = require('../lib');

describe('sequential-search', () => {
  it('should return a truthy value on Integer match', () => (
    expect(sequentialSearch(24, [18, 24, 111]))
      .toStrictEqual({ "status": true, "msg": 24, "i": 1 })
  ));

  it('should return a truthy value on String match', () => (
    expect(sequentialSearch("Hello", ["Samo", 24, "Hello"]))
      .toStrictEqual({ "status": true, "msg": "Hello", "i": 2 })
  ));

  it('should return a truthy value on Boolean match', () => (
    expect(sequentialSearch(true, [true, 24, "Hello"]))
      .toStrictEqual({ "status": true, "msg": true, "i": 0 })
  ));

  it('should return a falsy value if no match', () => (
    expect(sequentialSearch(8, ["car", "boat", "plane"]))
      .toStrictEqual({ "status": false })
  ));
});