// export function delay(milliseconds: number) {
//   return new Promise(resolve => setTimeout(resolve, milliseconds));
// }
export function delay(ms: number) {
  console.log(ms);
}
export function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
