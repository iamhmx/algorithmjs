### 思路
以大顶堆为例，从小到大排序
1. 构建大顶堆（每个父节点的值都要大于其两个子节点的值的完全二叉树）
2. 交换大顶堆首尾元素，最大值就放到了最后
3. 调整剩下元素组成的大顶堆，重复第2步，直到只剩一个元素，排序完成

### 时间复杂度
<table>
<thead>
<tr>
<th align="center">最好</th>
<th align="center">最坏</th>
<th align="center">平均</th>
<th align="center">稳定性</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center">n&nbsp;log(n)</td>
<td align="center">n&nbsp;log(n)</td>
<td align="center">n&nbsp;log(n)</td>
<td align="center">不稳定</td>
</tr>
</tbody>
</table>

<img src="https://camo.githubusercontent.com/61a398b035696628efb6b2b71aa444c0e658e8f7/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f342f34642f48656170736f72742d6578616d706c652e676966">

### 实现
```js
// 初始化大顶堆
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

// 交换数组2元素
function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function sort(arr) {
  initMaxHeap(arr)
  // step记录排序次数，每一次都会将当前最大值放到最后
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
```