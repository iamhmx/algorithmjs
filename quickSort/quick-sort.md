### 思路

1. 从待排序数组中找一个目标值，切割数组
2. 将小于等于目标值的数放左边，将大于等于目标值的数放右边（可以直接赋值，也可以交换2个数）
3. 对目标值左右两边的数重复第1、2步操作，进行递归

<img src="https://images2017.cnblogs.com/blog/849589/201710/849589-20171015230936371-1413523412.gif">

### 实现

```js
/**
 * @description: 快速排序算法
 * @param {type} arr: 待排序数组
 * @param {type} l: 左边界
 * @param {type} r: 右边界
 */
function quickSort(arr, l, r) {
  // 结束条件：左边界 大于等于 右边界
  if (l >= r) return
  // 取第一个数作为目标值
  let target = arr[l]
  // 保存下标
  let x = l
  let y = r
  while (x < y) {
    // 从右边开始查找，如果比目标值大，就继续查找，直到找到一个比目标值小的数
    while (x < y && arr[y] >= target) y--
    // 找到比目标值小的数，将它移动到左边，左边下标++
    if (x < y) arr[x++] = arr[y]
    // 从左边开始查找，如果比目标值小，就继续查找，直到找到一个比目标值大的数
    while (x < y && arr[x] <= target) x++
    // 找到比目标值大的数，将它移动到右边，右边下标--
    if (x < y) arr[y--] = arr[x]
  }
  // 退出while，此时，左右下标相等，设置目标值
  arr[x] = target // arr[y] = target 也是一样的
  // 递归左边
  quickSort(arr, l, x - 1)
  // 递归右边
  quickSort(arr, x + 1, r)
}

// 测试：
let arr = [1, 8, 3, 10, 6, 5, 11, 0]
quickSort(arr, 0, arr.length - 1)
console.log('res：', arr)
// res： [0, 1, 3, 5, 6, 8, 10, 11]
```

### 优化
1. 目标值选择优化：快排最优的时间复杂度为O(nlogn)，如果目标值选择不合理，可能达到O(n ^ 2)，需要尽可能的找到一个能将数组平分的目标值
2. 分割优化：可以将目标值理解成一条竖线，在左右两边找到不满足条件的数，交换位置，减少比较操作
3. 单边递归优化：当数组按目标值分割好后，会对左右两边分别进行递归，可以只对右边进行递归，直接利用本层循环处理左边的数，减少函数调用

### 优化实现
```js
function quickSort(arr, l, r) {
  while (l < r) {
    let x = l
    let y = r
    // 优化1：首、尾、中，取中间值作为目标值
    let target = selectTarget(arr[l], arr[r], arr[(l+r) >> 1]) // arr[x + 1]
    do {
      while (arr[x] < target) x++
      while (arr[y] > target) y--
      // 优化2：找到左右两边不满足左边小于等于目标值，右边大于等于目标值的数的位置，进行交换
      if (x <= y) {
        swap(arr, x, y)
        x++
        y--
      }
    } while (x <= y)
    // 退出循环时，x、y交叉，x位于分割线右边，y位于分割线左边
    // 递归右边
    quickSort(arr, x, r)
    // 优化3：继续处理左边
    r = y
  }
}

// 获取3个数中间大小的数
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

// 交换数组的2个数
function swap(arr, i, j) {
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}
```