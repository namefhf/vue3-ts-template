interface Lengthwise {
  length: number;
}
/**
 * 泛型约束 extends
 * @param a
 */
export function fn<T extends Lengthwise>(a: T): void {
  console.log(a.length);
}
const a = fn([1, 3, 4]);

const obj = { a: 1, b: 2 };
function getObjectValue<T extends object, K extends keyof T>(target: T, key: K): T[K] {
  return target[key];
}

getObjectValue(obj, 'b');
