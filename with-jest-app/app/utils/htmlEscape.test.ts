import { escape, unescape } from "./htmlEscape";

describe("escape", () => {
  let escaped = "&amp;&lt;&gt;&quot;&#39;/";
  let unescaped = "&<>\"'/";

  escaped += escaped;
  unescaped += unescaped;

  // escape가 잘 작동되는지 확인
  it("should escape values", () => {
    expect(escape(unescaped)).toBe(escaped);
  });

  // 이스케이프 할 것이 없는 문자열에 대한 동작 확인
  it("should handle strings with nothing to escape", () => {
    expect(escape("abc")).toBe("abc");
  });

  // 이스케이프 문자열을 언이스케이프하고 다시 이스케이프 했을때 처음의 상태와 동일한지 확인
  it("should escape the same characters unescaped by `_.unescape`", () => {
    expect(escape(unescape(escaped))).toBe(escaped);
  });

  // 이스케이프 되면 안되는 문자에 대한 테스트 ["`", "/"]
  it.each(["`", "/"])("", (char) => {
    expect(escape(char)).toBe(char);
  });
});

describe("unescape", () => {
  let escaped = "&amp;&lt;&gt;&quot;&#39;/";
  let unescaped = "&<>\"'/";

  escaped += escaped;
  unescaped += unescaped;

  // 1. 순서 그대로 escape 되었는지
  it("should unescape entities in order", () => {
    expect(unescape("&amp;lt;")).toBe("&lt;");
  });

  // 2. escaped 문자를 unescape 했을때 동작
  it("should unescape the proper entities", () => {
    expect(unescape(escaped)).toBe(unescaped);
  });

  // 3. unescape할 것이 없는 문자열에 대한 동작
  it("should handle strings with nothing to unescape", () => {
    expect(unescape("abc")).toBe("abc");
  });

  // 4. unescaped 문자를 escape하고 다시 unescape 했을때 동작
  it("should unescape the same characters escaped by `_.escape`", () => {
    const actual = unescape(escape(unescaped));
    expect(actual).toBe(unescaped);
  });

  // 5. 숫자 엔티티("&#039;", "&#39;")에 0이 붙어있을때 동작
  it("should handle leading zeros in html entities", () => {
    expect(unescape("&#39;")).toBe("'");
    expect(unescape("&#039;")).toBe("'");
    expect(unescape("&#00039;")).toBe("'");
  });

  // 6. 언이스케이프 되면 안되는 것들 동작 테스트 ["&#96;", "&#x2F;"]
  it.each(["&#96;", "&#x2F;"])("", (entity) => {
    expect(unescape(entity)).toBe(entity);
  });
});
