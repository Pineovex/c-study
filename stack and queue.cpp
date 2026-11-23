#include <iostream>
#include <stack>//先进后出
#include <queue>//先进先出
//栈与队列
using namespace std;

int main() {
	stack<int>st;//原理类似于向瓶子里扔石子 先取最上端的数据
	//st.size()元素个数
	//st.empty()是否为空
	st.push(3);//压入一个元素进栈
	st.push(2);
	st.push(1);
	cout << st.top() << " ";//返回栈顶的数据
	//st.pop() 弹出一个元素
	st.pop();//1被弹出
	cout << st.top() << endl;

	queue<int>q;//类似排队 先进先出
	q.push(1);
	q.push(2);
	q.push(3);
	cout << q.front() << " ";//输出第一个数据
	cout << q.back() << endl;//输出最后的数据
	q.pop();
	cout << q.front() << " ";

}