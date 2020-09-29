/*
 * @Author: mingxing.huang
 * @Date: 2020-09-29 11:31:43
 */
function initMaxHeap(arr) {
  // 构建大顶堆，从最后一个非叶子节点的元素开始
  for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    heapify(arr, i)
  }
}

function heapify(arr, i, step = 0) {
  // 左子节点
  let left = i * 2 + 1
  // 右子节点
  let right = i * 2 + 2
  // 三元组的最大值的下标
  let maxIdx = i
  // 寻找最大值
  if (left < arr.length - step && arr[left] > arr[maxIdx]) {
    maxIdx = left
  }
  if (right < arr.length - step && arr[right] > arr[maxIdx]) {
    maxIdx = right
  }
  if (maxIdx !== i) {
    // 交换位置
    swap(arr, i, maxIdx)
    // 交换后可能会影响大顶堆，需要再次调整，保持大顶堆不被破坏
    heapify(arr, maxIdx, step)
  }
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function sort(arr) {
  initMaxHeap(arr)
  let step = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    // 交换首尾，将最大值放到最后
    swap(arr, 0, i)
    // 调整大顶堆
    heapify(arr, 0, ++step)
  }
  return arr
}

let arr = [5, 7, 11, 10, 34, 1, 3, 90]
console.log('arr：', sort(arr));