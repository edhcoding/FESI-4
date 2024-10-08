import { chunk } from "./chunk";

describe("hi", () => {
  const array = [1, 2, 3, 4, 5, 6];

  test("first", () => {
    const actual = chunk(array, 2);
    expect(actual).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  test("배열을 균등하게 배분할 수 없는 경우 최종 청크는 나머지 요소가 되어야 합니다.", () => {
    const actual = chunk(array, 4);
    expect(actual).toEqual([
      [1, 2, 3, 4],
      [5, 6],
    ]);
  });

  test("분할 넘버를 실수로 넣었을때 반내림이 되어서 처리되는지 확인.", () => {
    const actual = chunk(array, array.length / 1);
    expect(actual).toEqual([[1, 2, 3, 4, 5, 6]]);
  });
});

// describe("chunk", () => {
//   const array = [0, 1, 2, 3, 4, 5];

//   it("should return chunked arrays", () => {
//     const actual = chunk(array, 3);
//     expect(actual).toEqual([
//       [0, 1, 2],
//       [3, 4, 5],
//     ]);
//   });

//   it("should return the last chunk as remaining elements", () => {
//     const actual = chunk(array, 4);
//     expect(actual).toEqual([
//       [0, 1, 2, 3],
//       [4, 5],
//     ]);
//   });

//   it("should coerce `size` to an integer", () => {
//     expect(chunk(array, array.length / 4)).toEqual([
//       [0],
//       [1],
//       [2],
//       [3],
//       [4],
//       [5],
//     ]);
//   });
// });
