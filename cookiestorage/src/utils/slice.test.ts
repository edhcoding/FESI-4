import slice from "./slice";

describe("slice", () => {
  const array = [1, 2, 3];

  it("should use a default `start` of `0` and a default `end` of `length`", () => {
    const actual = slice(array);
    expect(actual).toEqual(array); // toEqual => boolean값 리턴함 (내용이 같은가)
    expect(actual).not.toBe(array); // toBe => 앞 뒤 괄호가 같은지 , not은 부정 (주소값이 같은가 - 깊은비교임(toBe))
  });

  it("should work with a positive `start`", () => {
    expect(slice(array, 1)).toEqual([2, 3]);
    expect(slice(array, 1, 3)).toEqual([2, 3]);
  });

  it.each([3, 4, 2 ** 32, Infinity])(
    "should work with a `start` >= `length`",
    (start) => {
      expect(slice(array, start)).toEqual([]);
    }
  );

  it("should work with a negative `start`", () => {
    // 코드를 완성하세요.
    expect(slice(array, -1)).toEqual([3]);
  });

  // "should work with a negative `start` <= negative `length`",
  // it.each([-3, -4, -Infinity]) 로 시작하는 테스트 코드를 작성하세요.

  it.each([-3, -4, -Infinity])(
    "should work with a negative `start` <= negative `length`",
    (start) => {
      expect(slice(array, start)).toEqual(array);
    }
  );

  it.each([2, 3])("should work with `start` >= `end`", (start) => {
    // 코드를 완성하세요.
    expect(slice(array, start, 2)).toEqual([]);
  });

  it("should work with a positive `end`", () => {
    // 코드를 완성하세요.
    expect(slice(array, 0, 1)).toEqual([1]);
  });

  // "should work with a `end` >= `length`",
  // it.each([3, 4, 2 ** 32, Infinity]) 로 시작하는 테스트 코드를 작성하세요.

  it.each([3, 4, 2 ** 32, Infinity])(
    "should work with a `end` >= `length`",
    (end) => {
      expect(slice(array, 0, end)).toEqual(array);
    }
  );

  it("should work with a negative `end`", () => {
    expect(slice(array, 0, -1)).toEqual([1, 2]);
  });
});
