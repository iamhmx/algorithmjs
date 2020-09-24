/**
 * @description: 快速排序算法
 * @param {type} arr: 待排序数组
 * @param {type} l: 左边界
 * @param {type} r: 右边界
 */
function quickSort(arr, l, r) {
  while (l < r) {
    let x = l
    let y = r
    let target = selectTarget(arr[l], arr[r], arr[(l+r) >> 1]) // arr[x + 1]
    do {
      while (arr[x] < target) x++
      while (arr[y] > target) y--
      if (x <= y) {
        swap(arr, x, y)
        x++
        y--
      }
    } while (x <= y)
    quickSort(arr, x, r)
    r = y
  }
}

function selectTarget(a, b, c) {
  if (a > b) {
    let tmp = a
    a = b
    b = tmp
  }
  if (a > c) {
    let tmp = a
    a = c
    c = tmp
  }
  if (b > c) {
    let tmp = b
    b = c
    c = tmp
  }
  return b
}

function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

// 测试：
let arr = [1, 8, 3, 10, 6, 5, 11, 0]
quickSort(arr, 0, arr.length - 1)
console.log('res：', arr)
