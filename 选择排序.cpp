#include <iostream>
#include <vector>
using namespace std;

int main() {
	//int n;
	//cin >> n;
	//vector<int>arr(n);
	//for (int i = 0;i < n;i++) {
	//	cin >> arr[i];
	//}
	//int temp = arr[3];
	//arr[3] = arr[1];
	//arr[1] = temp;
	//for (int i = 0;i < n;i++) {
	//	cout << arr[i]<<" ";

	//}
	int b[10] = { 1,10,2,6,3,4,8,9,7,5};
	//选择最小的数字将他排到最前面
	
	for (int i = 0;i < 10;i++) {
		int min = b[i];
		for (int j = i;j < 10;j++) {
			if (min > b[j]) {
				min = b[j];
				b[j] = b[i];
				b[i] = min;
			}
		}
	}
	for (auto x : b) {
		cout << x << " ";
	}
}