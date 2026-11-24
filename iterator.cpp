#include <iostream>
#include <vector>
using namespace std;
//迭代器 遍历容器 类似指针
//用对应容器的迭代器 引入对应头文件 如vector 迭代器示例

//有的数据非线性 如二叉树 此时就可以用迭代器

int main() {
	vector<int>arr = { 1,3,4,5 };
	vector<int>::iterator it;//it类似指针 也可用auto it（auto会自动判断类型）
	
	for (it = arr.begin();it != arr.end();it++) {
		cout << *it<<endl;//访问迭代器的值时需要*解引用
	}
	//当你对容器不够熟练时 最好不要用迭代器操作容器 除了遍历和访问的操作
	//否则可能有问题
	//如下面两个例子
	//1.
	vector<int>b = { 1,2,3,4,5 };
	for (auto k = b.begin();k != b.end();k++) {
		if (*k == 2 || *k == 3)//目的是删除2和3
			b.erase(k);
	}//但b={1,3,4,5} 
	 //原因是当2删除后容器自动变小 k从指向2到指向3 但本次循环的删除操作已经进行
	 //接着迭代器向后偏移 指向4
	
	//2.为不可运行例子
	//vector<int>c = { 1,2,3,4 };
	//for (auto k = c.begin();k != c.end();k++) {
	//	if (*k == 4) //想要删除4
	//		b.erase(k);
	//}此时迭代器指向4 当删除4后 容器变小 迭代器指向end() 再进行迭代器++的操作就越界了 会引发崩溃
	
	//.begin()起始点 与.end()指向最后值的下一个位置（已不属于容器）
	//.rbegin()反向迭代器 .rend()反向为迭代器（end与rend指向都为无意义的值 注意不要解引用 不可访问）
	/* 迭代器+整形 将迭代器向后移动（类似有-，++，--）
		迭代器-迭代器：两个迭代器的距离
		prev(it):返回it的前一个迭代器
		next(it):返回it的后一个迭代器
		不是所有容器都有全部的迭代器功能（set不能用迭代器相减算距离）
	*/
}
