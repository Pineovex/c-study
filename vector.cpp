#include <iostream>
#include <queue> //先进先出
#include <stack> //先进后出
// 栈与队列
using namespace std;

int main() {
    stack<int> st; // 原理类似于向瓶子里扔石子 先取最上端的数据
    // st.size()元素个数
    // st.empty()是否为空
    st.push(3); // 压入一个元素进栈
    st.push(2);
    st.push(1);
    cout << st.top() << " "; // 返回栈顶的数据
    // st.pop() 弹出一个元素
    st.pop(); // 1被弹出
    cout << st.top() << endl;

    queue<int> q; // 类似排队 先进先出
    q.push(1);
    q.push(2);
    q.push(3);
    cout << q.front() << " "; // 输出第一个数据
    cout << q.back() << endl; // 输出最后的数据
    q.pop();
    cout << q.front() << " ";
    priority_queue<int> pq; // 优先队列（堆） 先进先出 但是会根据优先级排序
    // 提供常数时间的访问最大元素的能力，对数时间的插入和删除元素的能力，底层原理是二叉树
    pq.push(2);
    pq.push(1);
    pq.push(3);                                         // 默认是大顶堆
    priority_queue<int, vector<int>, greater<int>> pq2; // 小顶堆
    cout << pq.top() << endl;  // 输出最大值
    cout << pq.size() << endl;  // 输出元素个数
    pq.pop();// 删除顶端元素
}
