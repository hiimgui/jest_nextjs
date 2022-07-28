import {
  cutTextToLength,
  slugify,
  composeArticleSlug,
  extractArticleIdFromSlug,
} from "../index";

describe("trimTextoToLength", () => {
  test("Should cut a string that exceeds 10 characters", () => {
    const initialString = "This is a 34 character long string";
    const cutResult = cutTextToLength(initialString, 10);
    expect(cutResult).toEqual("This is a ...");
  });

  test("Should not cut a string if it's shorter than 10 characters", () => {
    const initialString = "7 chars";
    const cutResult = cutTextToLength(initialString, 10);
    expect(cutResult).toEqual("7 chars");
  });
});
describe("slugify makes a string URL-safe", () => {
  test("Should convert a string to URL-safe format", () => {
    const initialString = "This is a string to slugify";
    const slugifiedString = slugify(initialString);
    expect(slugifiedString).toEqual("this-is-a-string-to-slugify");
  });
  test("Should slugify a string with special characters", () => {
    const initialString = "This is a string to slugify!@#$%^&*()+";
    const slugifiedString = slugify(initialString);
    expect(slugifiedString).toEqual("this-is-a-string-to-slugify");
  });
});

describe("compose article slug using id and author parameters from post", () => {
  test("Should create an slug with the parameters 1 and me", () => {
    const id = 1;
    const author = "Guilherme";
    const composedSlug = composeArticleSlug(id, author);
    expect(composedSlug).toEqual("guilherme-1");
  });
});

describe("should extract an Id from a slug parameter", () => {
  test("extract article id from a slug in string form", () => {
    const initialSlug = "guilherme-1";
    const extractedId = extractArticleIdFromSlug(initialSlug);
    expect(extractedId).toEqual("1");
  });
});
