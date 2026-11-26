#include <cmath>
#include <iomanip>
#include <iostream>
#include <sstream>
#include <string>

using namespace std;
// 不做讲解 只需知道如何正确使用
int main() {
    string s;
    s = "123456 abcdef 12.3";
    int a;
    string b;
    double c;
    istringstream is(s);
    is >> a >> b >> c;
    cout << a << endl << b << endl << c << endl;
    ostringstream os;
    os << a << b << c;
    string t = os.str();
    cout << t << endl;

    // 另一种更简单的支持字符串与数字转换 仅需引入string
    int aa = 123;
    long long ab = 1234567;
    double bb = 123.5;
    // 数字转字符串
    string p = to_string(aa);
    string q = to_string(ab);
    string x = to_string(bb); // 默认保存六位
    cout << p << " " << q << " " << x << endl;
    // 字符串转数字
    string i = "123";
    string ll = "89323";
    string d = "213.5";
    int in = stoi(i);         // 转化成int
    long long lo = stoll(ll); // 转化成long long 注意stol是转换成long
    double dou = stod(d);     // 转化成double
    cout << i << endl << lo << endl << d;
    return 0;
}
