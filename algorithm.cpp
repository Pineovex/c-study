#include <algorithm> //算法库
#include <cmath>
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int arr[] = {5, 4, 2, 1, 3};
    sort(arr, arr + 5); // 给数组从小到大排序 （起始地址，结束地址）
    for (auto x : arr) {
        cout << x << " ";
    }
    cout << endl;
    cout << "-------------------" << endl;
    sort(arr, arr + 5, greater<int>()); // 给数组从大到小排序
    for (auto x : arr) {
        cout << x << " ";
    }
    cout << endl;
    cout << "-------------------" << endl;
    // 建议使用容器stl 速度更快 vector演示
    vector<int> li = {1, 3, 4, 2, 6, 5};
    sort(li.begin(), li.end());
    for (auto x : li) {
        cout << x << " ";
    }
    cout << endl;
    cout << "-------------------" << endl;

    cout << max(15, 10) << " ";  // 最大值
    cout << min(15, 10) << endl; // 最小值
    cout << "-------------------" << endl;

    int a = 10, b = 15;
    swap(a, b); // 变量交换
    cout << a << " " << b << endl;
    cout << "-------------------" << endl;

    vector<int> s1 = {1, 3, 4, 7, 8};
    reverse(s1.begin(), s1.end()); // 反转
    for (auto x : s1) {
        cout << x << " ";
    }
    cout << endl;
    cout << "-------------------" << endl;

    // 全排列 next_permutation
    vector<char> c = {
        'a', 'a', 'b', 'a', 'b', 'b',
    }; // 只有19种情况 少一种 最好用sort提前排好序
    sort(c.begin(), c.end());
    do {
        for (auto x : c) {
            cout << x << " ";
        }
        cout << endl;
    } while (next_permutation(c.begin(), c.end()));
    cout << "-------------------" << endl;
    vector<int> s2 = {1, 2, 3, 4, 5};
    cout << *lower_bound(s2.begin(), s2.end(), 3) << endl;
    cout << *upper_bound(s2.begin(), s2.end(), 3) << endl;
    // 一定要是升序排列才可使用lower_bound与upper_bound 且返回的为迭代器

    // 常见的数学函数
    cout << abs(-5) << endl;      // 绝对值
    cout << pow(2, 3) << endl;    // 幂运算
    cout << sqrt(16) << endl;     // 平方根
    cout << log(2.71828) << endl; // 自然对数
    cout << log10(100) << endl;   // 以10为底的对数
    cout << cos(0) << endl;       // 余弦
    cout << sin(0) << endl;       // 正弦
    cout << exp(3) << endl;       // e的指数
    //floor()向下取整 ceil()向上取整 round()四舍五入
    //由于浮点数的精度有些数字会有较小的误差
}
