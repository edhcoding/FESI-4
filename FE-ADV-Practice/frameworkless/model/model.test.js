import modelFactory from "./model.js";

describe("TodoMVC Model", () => {
  // 잘 추가되는지 확인
  test("should add an item", () => {
    // arrange
    const model = modelFactory();

    // act
    model.addItem("dummy"); // false가 되는 값들
    model.addItem(0);
    model.addItem(false);
    model.addItem(undefined);

    // assert
    const { todos } = model.getState();
    // 1. item이 추가가 되었는지
    expect(todos.length).toBe(1);
    // 2. item의 내용이 잘 들어갔는지
    expect(todos[0]).toEqual({
      text: "dummy",
      completed: false,
    });
  });

  // addItem - 허위 텍스트가 제공된 경우 항목을 추가해서는 안 됩니다.
  test("should not add an item when a falsy text is provided", () => {
    const model = modelFactory();

    model.addItem("");
    model.addItem(undefined);
    model.addItem(0);
    model.addItem();
    model.addItem(false);

    const { todos } = model.getState();

    expect(todos.length).toBe(0);
  });

  // 업데이트 item에 대해서 유효한 인자로 호출했을때, 유효하지 않은 인자로 호출했을때
  test("should update an item", () => {
    // arrange
    const model = modelFactory({
      todos: [
        {
          text: "dummy",
          completed: false,
        },
      ],
    });

    // act
    model.updateItem(0, "new-dummy");

    // assert
    const { todos } = model.getState();

    expect(todos[0].text).toBe("new-dummy");
  });

  // updateItem - 잘못된 인덱스가 제공된 경우 항목을 업데이트하지 않아야 합니다.
  test("should not update an item when an invalid index is provided", () => {
    const model = modelFactory({
      todos: [
        {
          text: "dummy",
          completed: false,
        },
      ],
    });

    model.updateItem(1, "new-dummy");

    const { todos } = model.getState();

    expect(todos[0].text).toBe("dummy");
  });

  // getState - 데이터는 불변이어야 합니다.
  test("data should be immutable", () => {
    const model = modelFactory();

    expect(() => {
      // 콜백형태!
      model.getState().currentFilter = "WRONG";
    }).toThrow();
  });
});
