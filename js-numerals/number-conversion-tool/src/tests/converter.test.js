const toWords = require("../service/converter.js");

describe("tests for toWords function", () => {
  test("toWords(7) should return seven", () => {
    expect(toWords(7)).toEqual("seven");
  });
  test("toWords(42) should return forty-two", () => {
    expect(toWords(42)).toEqual("forty-two");
  });
  test("toWords(1999) should return one thousand nine hundred and ninety-nine", () => {
    expect(toWords(1999)).toEqual("one thousand nine hundred and ninety-nine");
  });
  test("toWords(2001) should return two thousand and one", () => {
    expect(toWords(2001)).toEqual("two thousand and one");
  });
  test("toWords(17999) should return seventeen thousand nine hundred and ninety-nine", () => {
    expect(toWords(17999)).toEqual(
      "seventeen thousand nine hundred and ninety-nine"
    );
  });
  test("toWords(100001) should return one hundred thousand and one", () => {
    expect(toWords(100001)).toEqual("one hundred thousand and one");
  });
  test("toWords(342251) should return three hundred and forty-two thousand two hundred and fifty-one", () => {
    expect(toWords(342251)).toEqual(
      "three hundred and forty-two thousand two hundred and fifty-one"
    );
  });
  test("toWords(1300420) should return one million three hundred thousand four hundred and twenty", () => {
    expect(toWords(1300420)).toEqual(
      "one million three hundred thousand four hundred and twenty"
    );
  });
  test("toWords(141243766582) should return one hundred and forty-one billion two hundred and forty-three million seven hundred and sixty-six thousand five hundred and eighty-two", () => {
    expect(toWords(141243766582)).toEqual(
      "one hundred and forty-one billion two hundred and forty-three million seven hundred and sixty-six thousand five hundred and eighty-two"
    );
  });
});
