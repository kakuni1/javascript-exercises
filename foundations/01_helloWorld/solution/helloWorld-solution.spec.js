const helloWorld = require("./helloWorld-solution");

describe("Hello World", () => {
  test('says "Hello, World!"', () => {
    expect(helloWorld()).toEqual("Hello, World!");
  });
});
