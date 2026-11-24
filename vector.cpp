#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
    vector<int>aa(100, 1);//定义一个长度为100 初始值为1的数组
    vector<int>ab(100,1);//定义一个长度为100 初始值为1的数组
    vector<vector<int>>ac(100,vector<int>());//定义一个行100 不定列的数组
    vector<vector<vector<int>>>ad(100, vector<vector<int>>(100, vector<int>(10)));//三维数组

    vector<int>arr = { 1,12,12 };
    arr.push_back(55);//向最后插入
    for (int x : arr) {
        cout << x<<" ";
    }
    cout <<endl<< "-------------------" << endl;
    arr.pop_back();//删除最后的内容
    for (int x : arr) {
        cout << x << " ";
    }
    cout <<endl<< "-------------------" << endl;
    arr.insert(arr.begin() + 1, 2);//insert(地址+偏移,插入的数字)在哪个位置插入一个数
    for (int x : arr) {
        cout << x << " ";
        
    }
    cout <<endl<< "-------------------" << endl;
    arr.insert(arr.begin(), 3);
    for (int x : arr) {
        cout << x << " ";
    }

    cout <<endl<< "-------------------" << endl;
    arr.erase(arr.begin());//擦除数组地址中的数据
    for (int x : arr) {
        cout << x << " ";
    }
    cout <<endl<< "-------------------" << endl;
    arr.erase(arr.begin()+1, arr.end());//擦除区域的数据
    for (int x : arr) {
        cout << x << " ";
    }
    cout <<endl<< "-------------------" << endl;

    vector<int>s = { 1,1,1,2,2,2,1,3,1,4,5,5,6,7 };//去除相邻重复元素，不相邻不可去除
    s.erase(unique(s.begin(), s.end()), s.end());//使用了algorithm
    for (int x : s) {
        cout << x << " ";
    }
    cout <<endl<< "-------------------" << endl;

    s = { 1,1,1,2,2,2,1,3,4,5,5,6,7 };
    sort(s.begin(),s.end());//若想去重先用sort排序;
    //使用了algorithm
    auto it=unique(s.begin(), s.end());
    s.erase(it,s.end());
    for (int x : s) {
        cout << x << " ";
    }
    cout <<endl<< "-------------------" << endl;
 
    //resize
    s.resize(5, 3);//前面为重设的初始长度 当设长的时候赋值为3
    //当改短的时候 直接删除多余元素

}//vector在堆中 不会爆栈
//如果知道数组的长度 最好直接声明长度 可减少性能开销 防止时间超时
//vector 用.size()返回的类型为size_t 有的平台为32位范围[0，2^32）小心溢出
