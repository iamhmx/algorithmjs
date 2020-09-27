/*
 * @Author: mingxing.huang
 * @Date: 2020-09-27 11:34:02
 */
/**
 * @description: 归并排序
 * @param {type} arr：待排序数组
 * @param {type} l：左边界
 * @param {type} r：右边界
 */
function mergeSort(arr, l, r) {
  console.log('当前arr：', arr.slice(l, r + 1));
  console.log('------------------------------------');
  if (l === r) {
    return
  }
  
  let mid  = (l + r) >> 1
  let count = 0
  mergeSort(arr, l, mid)
  mergeSort(arr, mid + 1, r)
  merge(arr, l, mid, r, count)
  
}

function merge(arr, l, mid, r) {
  console.log('开始合并：');
  console.log('左边：', arr.slice(l, mid + 1));
  console.log('右边：', arr.slice(mid + 1, r + 1));
  let temp = []
  let p1 = l
  let p2 = mid + 1
  let k = 0
  while (p1 <= mid || p2 <= r) {
    if (p2 > r || (p1 <= mid && arr[p1] <= arr[p2])) {
      temp[k++] = arr[p1++]
    } else {
      temp[k++] = arr[p2++]
    }
  }
  console.log('合并结果：', temp);
  console.log('====================================');
  for (let i = 0, j = l; i < k; i++, j++) {
    arr[j] = temp[i]
  }
}

//测试
let arr = [7, 9, 2, 6, 14, 12]
mergeSort(arr, 0, arr.length - 1)
console.log('arr：', arr);