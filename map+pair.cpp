#include <iostream>
#include <map>//映射 键值对 原理二叉树
#include <unordered_map> //无序的map 查找效率比map高 原理哈希表
#include <string>
#include <utility>//引入pair可用<vector><map><set>代替


using namespace std;

int main() {
	map<string, string> Username;//O(log(n))
	Username["用户名"] = "ligang";//O(log(n))
	cout << Username["用户名"]<<endl;
	
	Username.insert(make_pair("密码","123123"));//O(log(n))
	cout << Username["密码"]<<endl;
	//size() O(1) empyy() O(1) clear() O(1)
	//find(key) O(log(n))  count(key) O(1)
	
	pair<string, int>p1("ligang",2);
	cout << p1.first <<" "<<p1.second << endl;
	p1.first = "egg";
	cout << p1.first << endl;
	//pair 两个pair之间可以比较也可判断是否相等 按照字典顺序
	pair<string, int>p2("2", 3);
	pair<string, int>p3("2", 4);
	cout << (p2 > p3) << " " << (p1 > p3) << endl;

}