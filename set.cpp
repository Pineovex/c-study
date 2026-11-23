#include <iostream>
#include <string>
#include <vector>
#include <set>
#include <unordered_set>
#include <algorithm>

using namespace std;

int main() {
	set<int>s;//定义一个集合s
	s = { 1,4,1,1,2,4,5,6,1,5,7,8 };//自动从小到大排序
	s.insert(3);//O(log(n))
	for (auto x : s) {
		cout << x << " ";
	}
	cout << endl;
	cout << "-----------------" << endl;

	//从大到小排序用 set<int,greater<int>>s
	//不排序 unordered_set 注意添加<unordered_set>头文件
	unordered_set<int>b = { 3,1,4,3,2,5 };
	for (auto x : b) {
		cout << x << " ";
	}
	cout << endl;
	cout << "-----------------" << endl;


	vector<int>arr = { 1,1,3,4,5,7,7,1,4 };
	set<int>a;//vector与set结合去重
	for (int x : arr) {
		a.insert(x);
	}
	for (auto x : a) {
		cout << x << " ";
	}
	cout << endl;
	cout << "-----------------" << endl;
	cout << *s.find(5) << endl;//O(log(n))
	//find返回集合中查找元素的地址
	//若没有对应的指则返回s.end()的地址 为空没有任何值
	cout << "-----------------" << endl;
	//s.size()容器变量数量 O(1)
	//s.empty()判断容器是否为空 是空返回1 不是空（有元素）返回0 O(1)
	//s.clear()清空元素 O(n)
	//s.count()对元素计数 有为1 无为0 因为set为集合元素不可重 O(log(n));
	
	//s = { 1,4,1,1,2,4,5,6,1,5,7,8 };
	s.erase(5);//删除指定的数值 O(1) ==s.erase(s.find(5))
	
	for (auto x : s) {
		cout << x << " ";
	}
	cout << endl;
	cout << "-----------------" << endl;
	cout << *s.lower_bound(5)<<endl;//返回>=5的第一个元素 O(log(n)+n)
	cout << *s.upper_bound(5) << endl;//返回>5的第一个元素 O(log(n)+n)

}