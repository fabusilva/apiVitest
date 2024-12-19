import { expect, test } from "vitest";
import { getFutureDate } from "./get-future-date";

test("increases date with one year", () => {});
const ano = new Date().getFullYear();
expect(getFutureDate(`${ano}-12-16`).getFullYear()).toEqual(2025);
