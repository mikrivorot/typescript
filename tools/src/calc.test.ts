import {sum} from './calc';

test("check sum", () => {
    const sumResult = sum(1,2,3);
    expect(sumResult).toBe(60);
});