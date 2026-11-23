#include <iostream>
#include <vector>
using namespace std;
//迭代器 遍历容器 类似指针
//用对应容器的迭代器 引入对应头文件 如vector 迭代器示例
//.begin()起始点 与.end()指向最后值的下一个位置（已不属于容器）


int main() {
	vector<int>arr = { 1,3,4,5 };
	vector<int>::iterator it;
	
	for (it = arr.begin();it != arr.end();it++) {
		cout << *it<<endl;//访问迭代器的值时需要*解引用
	}

}