#include <iostream>
#include <map> //映射 键值对 原理二叉树
#include <string>
#include <unordered_map> //无序的map 查找效率比map高 原理哈希表
#include <utility>       //引入pair可用<vector><map><set>代替

using namespace std;

int main() {
    map<string, string> Username;  // O(log(n))
    Username["用户名"] = "ligang"; // O(log(n))
    cout << Username["用户名"] << endl;

    Username.insert(make_pair("密码", "123123")); // O(log(n))
    cout << Username["密码"] << endl;
    // size() O(1) empyy() O(1) clear() O(1)
    // find(key) O(log(n))  count(key) O(1)
    map<int, string> m = {{2, "apple"}, {1, "banana"}}; // O(log(n))
    m[3] = "orange";                                    // O(log(n))
    m.insert(make_pair(4, "pear"));                     // O(log(n))
    for (auto x : m) {
        cout << x.first << ":" << x.second << endl; // O(log(n))
    } // map是有序的，按照key从小到大排序 key(前面的)为唯一值，value(后面的)可以重复
    // multimap与unordered_map不常用 可自行学习

    pair<string, int> p1("ligang", 2);
    cout << p1.first << " " << p1.second << endl; // 用first和second访问pair的两个元素
    p1.first = "egg";
    cout << p1.first << endl;
    // pair 两个pair之间可以比较也可判断是否相等 按照字典顺序
    pair<string, int> p2("2", 3);
    pair<string, int> p3("2", 4);
    cout << (p2 > p3) << " " << (p1 > p3) << endl;
}
