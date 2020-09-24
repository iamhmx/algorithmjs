### 思路
1. 两两比较相邻的2个数，如果前者大于后者（从小到大排序），交换位置
2. 每一轮循环结束，可将最大的数排到最后，循环直到只剩一个数，即数组有序

<img src="https://images2017.cnblogs.com/blog/849589/201710/849589-20171015223238449-2146169197.gif">

### 实现
```js
/**
 * @description: 冒泡排序
 * @param {type} arr：待排序数组
 */
function bubbleSort(arr) {
  // 外层循环控制轮数
  for (let i = 0; i < arr.length - 1; i++) {
    // 内层循环比较相邻2个数
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // 交换位置
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
}
let arr = [5, 3, 7, 10, 0, 6, 3]
bubbleSort(arr)
console.log('arr：', arr);
// arr： [0, 3, 3, 5, 6, 7, 10]
```