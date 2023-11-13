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
