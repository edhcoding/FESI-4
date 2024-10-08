import shuffle from "./shuffle";

// not 활용해보기!
// shuffle이 잘 작동하는지
// shuffle의 반환값이 새로운 배열인지

describe("shuffle", () => {
  const array = [1, 2, 3];

  it("should return a new array", () => {
    expect(shuffle(array)).not.toBe(array);
  });

  it("should contain the same elements after a collection is shuffled", () => {
    expect(shuffle(array).sort()).toEqual(array);
  });
});
