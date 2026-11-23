#include <iostream>
#include <string>
#include <algorithm>
#include <iomanip>
using namespace std;


int main() {
	string s1, s2,s3;
	int a1[210] = { 0 }, a2[210] = { 0 },a3[210] = { 0 };
	getline(cin, s1);
	getline(cin, s2);
	for (int i = 0;i < size(s1);i++) {
		a1[s1.size() - i - 1] = s1[i] - '0';
	}
	for (int i = 0;i < size(s2);i++) {
		a2[s2.size() - i - 1] = s2[i] - '0';
	}
	int len = s1.size();
	if (s2.size() > s1.size()) len = s2.size();
	for (int i = 0;i < len;i++) {
		a3[i] = a1[i] + a2[i];
}
	
	for (int i = 0;i < len;i++) {
		if (a3[i] >= 10) 
		{
			a3[i + 1] = a3[i + 1]+a3[i] / 10;
			
			a3[i] =a3[i]% 10;
		}
	}
	if (a3[len] != 0) {
		len++;
	}
	for (int i = len-1;i >=0;i--) {
		cout << a3[i];

	}
	return 0;
}