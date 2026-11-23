#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
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
  
}
