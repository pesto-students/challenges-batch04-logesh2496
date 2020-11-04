import { accessorProperties } from "./accessorProperties";

describe("Template Test", () => {
  test("positive number test", () => {
    const obj = accessorProperties();
    obj.number = 36;
    expect(obj.number).toBe('100100');
  });
  test("max number test", () => {
    const obj = accessorProperties();
    obj.number = 255;
    expect(obj.number).toBe('11111111');
  });
});
