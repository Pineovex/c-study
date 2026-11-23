#include <iostream>
using namespace std;
int main() {
	int arr[10] = { 1,10,2,6,3,4,8,9,7,5 };
	for (int i = 0;i < 10;i++) {
		for (int j = 0;j < 9-i;j++) {
			if (arr[j] > arr[j + 1]) {
				int temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	//如果前面的元素大于后面的元素 就让他与后面交换 
	//那么第一轮结束后 最大的元素就在最后面
	//即可让内层循环轮数减一 因为最后为最大的数 不必再比较
	//多次循环 在相应区间的最大数在最后
	for (auto x : arr) {
		cout << x << " ";
	}
}//如何用这个思路写从大到小排序呢
