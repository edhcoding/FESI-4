import filtersView from "./filters.js";

let targetElement;
const TEMPLATE = `<ul>
    <li>
        <a href="#/">All</a>
    </li>
    <li>
        <a href="#/active">Active</a>
    </li>
    <li>
        <a href="#/completed">Completed</a>
    </li>
</ul>`;

describe("filtersView", () => {
  beforeEach(() => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = TEMPLATE;
    targetElement = tempElement.childNodes[0];
  });

  test('should add the class "selected" to the anchor with the same text of the currentFilter', () => {
    const newCounter = filtersView(
      targetElement,
      {
        currentFilter: "Active",
      },
      {
        changeFilter: () => {},
      }
    );

    const selectedItem = newCounter.querySelector("li a.selected");

    expect(selectedItem.textContent).toBe("Active");
  });

  test("should call changeFilter when 'Completed' anchor is clicked", () => {
    const changeFilter = jest.fn();
    const newCounter = filtersView(
      targetElement,
      {
        currentFilter: "Active",
      },
      {
        changeFilter,
      }
    );

    // "Completed" 링크를 선택합니다.
    const completedLink = newCounter.querySelector("li a[href='#/completed']");

    // 클릭 이벤트를 시뮬레이션합니다.
    completedLink.click();

    // changeFilter 함수가 "Completed"와 함께 호출되었는지 확인합니다.
    expect(changeFilter).toHaveBeenCalledWith("Completed");
  });
});
