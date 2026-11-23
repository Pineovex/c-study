#include <iostream>
#include <string>
#include <cmath>
#include <iomanip>
#include <sstream>

using namespace std;

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
    cout << t;

    return 0;
}