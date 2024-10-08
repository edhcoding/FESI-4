import delay from "./delay";

describe("delay", () => {
  // 최초 pass = false
  // 32ms pass = true
  // 32ms 이전(1ms) pass = false
  // 32ms 이후(64ms) pass = true => done 호출 (제일 늦어서)
  it("should delay", (done) => {
    let pass = false;

    delay(() => {
      // 변경사항
      pass = true;
      done();
    }, 32);

    setTimeout(() => {
      expect(pass).toBe(false);
    }, 1); // 변경사항이 적용 안됨

    setTimeout(() => {
      expect(pass).toBe(true);
      done();
    }, 64); // 변경사항이 적용 됨
  });

  // jest fake timer활용
  it("should delay (jest fake timers 적용)", () => {
    // jest fake timers 적용
    jest.useFakeTimers();
    let pass = false;

    delay(() => {
      pass = true;
    }, 32);

    // 1ms 빨리감기
    jest.advanceTimersByTime(1);
    expect(pass).toBe(false);

    // 64ms 빨리감기
    jest.advanceTimersByTime(64);
    expect(pass).toBe(true);

    jest.useRealTimers();
  });

  // jest fake timer + mock 활용
  it("should delay (jest fake timers 적용)", () => {
    // jest fake timers 적용
    jest.useFakeTimers();
    const mockFn = jest.fn();
    // 변수는 mock 함수 넣으면 안써도 된다고 했었음
    // let pass = false;

    delay(mockFn, 32);

    // 1ms 빨리감기
    jest.advanceTimersByTime(1);
    expect(mockFn).not.toHaveBeenCalled();

    // 64ms 빨리감기
    jest.advanceTimersByTime(64);
    expect(mockFn).toHaveBeenCalled();

    jest.useRealTimers();
  });

  it("should use a default 'wait' of '0' ", (done) => {
    let pass = false;

    delay(() => {
      pass = true;
    });

    expect(pass).toBe(false);

    setTimeout(() => {
      expect(pass).toBe(true);
      done();
    }, 0);
  });

  it("should be cancelable", (done) => {
    let pass = false;

    const id = delay(() => {
      pass = true;
    }, 32);

    clearTimeout(id);

    setTimeout(() => {
      expect(pass).toBe(false);
      done();
    }, 64);
  });

  // mock 함수를 사용해서 , arg가 callback 함수에 인자로 전달되는지 확인
  it("should provide additional arguments to `func`", (done) => {
    const mockFn = jest.fn(); // mock 함수 만드는 방법

    delay(mockFn, 32, 1, 2);

    setTimeout(() => {
      expect(mockFn).toHaveBeenCalledWith(1, 2);
      done();
    }, 64);
  });

  it("should delay - mock", (done) => {
    const mockFn = jest.fn();
    delay(mockFn, 32);

    setTimeout(() => {
      expect(mockFn).not.toHaveBeenCalled();
    }, 1);

    setTimeout(() => {
      expect(mockFn).toHaveBeenCalled();
      done();
    }, 64);
  });
});
