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

let arr = [1, 8, 3, 10, 6, 5, 11, 0]
quickSort(arr, 0, arr.length - 1)
console.log('res：', arr)
