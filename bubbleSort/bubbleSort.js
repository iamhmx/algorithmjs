/**
 * @description: 冒泡排序
 * @param {type} arr：待排序数组
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
}
let arr = [5,3,7,10,0,6,3]
bubbleSort(arr)
console.log('arr：', arr);