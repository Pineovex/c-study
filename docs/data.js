window.DATA = {
  "repo": "https://github.com/Pineovex/c-study",
  "generatedAt": "2026-11-26",
  "groups": [
    {
      "cat": "STL 容器",
      "items": [
        "iterator.cpp",
        "map+pair.cpp",
        "set.cpp",
        "stack and queue.cpp",
        "vector.cpp"
      ]
    },
    {
      "cat": "算法库",
      "items": [
        "algorithm.cpp"
      ]
    },
    {
      "cat": "排序算法",
      "items": [
        "插入排序.cpp",
        "冒泡排序.cpp",
        "选择排序.cpp"
      ]
    },
    {
      "cat": "字符串与大数",
      "items": [
        "高精度算法.cpp",
        "字符串的拆除与拼接.cpp"
      ]
    }
  ],
  "items": {
    "插入排序.cpp": {
      "file": "插入排序.cpp",
      "cat": "排序算法",
      "title": "插入排序",
      "desc": "数据接近有序时很快。",
      "lines": 35,
      "code": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    //int n;\n    //cin >> n;\n    //vector<int>arr(n);\n    //for (int i = 0;i < n;i++) {\n    //    cin >> arr[i];\n    //}\n    //int temp = arr[3];\n    //arr[3] = arr[1];\n    //arr[1] = temp;\n    //for (int i = 0;i < n;i++) {\n    //    cout << arr[i]<<\" \";\n\n    //}\n    int b[10] = { 1,10,2,6,3,4,8,9,7,5};\n    //选择最小的数字将他排到最前面\n    \n    for (int i = 0;i < 10;i++) {\n        int min = b[i];\n        for (int j = i;j < 10;j++) {\n            if (min > b[j]) {\n                min = b[j];\n                b[j] = b[i];\n                b[i] = min;\n            }\n        }\n    }\n    for (auto x : b) {\n        cout << x << \" \";\n    }\n}//如何用这个思路写从大到小排序呢"
    },
    "高精度算法.cpp": {
      "file": "高精度算法.cpp",
      "cat": "字符串与大数",
      "title": "高精度加法",
      "desc": "超出 long long 范围的大整数加法。",
      "lines": 41,
      "code": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\n\nint main() {\n    string s1, s2,s3;\n    int a1[210] = { 0 }, a2[210] = { 0 },a3[210] = { 0 };\n    getline(cin, s1);\n    getline(cin, s2);\n    for (int i = 0;i < size(s1);i++) {\n        a1[s1.size() - i - 1] = s1[i] - '0';\n    }\n    for (int i = 0;i < size(s2);i++) {\n        a2[s2.size() - i - 1] = s2[i] - '0';\n    }\n    int len = s1.size();\n    if (s2.size() > s1.size()) len = s2.size();\n    for (int i = 0;i < len;i++) {\n        a3[i] = a1[i] + a2[i];\n}\n    \n    for (int i = 0;i < len;i++) {\n        if (a3[i] >= 10) \n        {\n            a3[i + 1] = a3[i + 1]+a3[i] / 10;\n            \n            a3[i] =a3[i]% 10;\n        }\n    }\n    if (a3[len] != 0) {\n        len++;\n    }\n    for (int i = len-1;i >=0;i--) {\n        cout << a3[i];\n\n    }\n    return 0;\n}"
    },
    "冒泡排序.cpp": {
      "file": "冒泡排序.cpp",
      "cat": "排序算法",
      "title": "冒泡排序",
      "desc": "最简单的排序，用来入门。",
      "lines": 21,
      "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int arr[10] = { 1,10,2,6,3,4,8,9,7,5 };\n    for (int i = 0;i < 10;i++) {\n        for (int j = 0;j < 9-i;j++) {\n            if (arr[j] > arr[j + 1]) {\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n    //如果前面的元素大于后面的元素 就让他与后面交换 \n    //那么第一轮结束后 最大的元素就在最后面\n    //即可让内层循环轮数减一 因为最后为最大的数 不必再比较\n    //多次循环 在相应区间的最大数在最后\n    for (auto x : arr) {\n        cout << x << \" \";\n    }\n}//如何用这个思路写从大到小排序呢"
    },
    "选择排序.cpp": {
      "file": "选择排序.cpp",
      "cat": "排序算法",
      "title": "选择排序",
      "desc": "每轮选出最小的放到前面。",
      "lines": 35,
      "code": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    //int n;\n    //cin >> n;\n    //vector<int>arr(n);\n    //for (int i = 0;i < n;i++) {\n    //    cin >> arr[i];\n    //}\n    //int temp = arr[3];\n    //arr[3] = arr[1];\n    //arr[1] = temp;\n    //for (int i = 0;i < n;i++) {\n    //    cout << arr[i]<<\" \";\n\n    //}\n    int b[10] = { 1,10,2,6,3,4,8,9,7,5};\n    //选择最小的数字将他排到最前面\n    \n    for (int i = 0;i < 10;i++) {\n        int min = b[i];\n        for (int j = i;j < 10;j++) {\n            if (min > b[j]) {\n                min = b[j];\n                b[j] = b[i];\n                b[i] = min;\n            }\n        }\n    }\n    for (auto x : b) {\n        cout << x << \" \";\n    }\n}//如何用这个思路写从大到小排序呢"
    },
    "字符串的拆除与拼接.cpp": {
      "file": "字符串的拆除与拼接.cpp",
      "cat": "字符串与大数",
      "title": "字符串的拆分与拼接",
      "desc": "按分隔符拆开字符串，再拼回去。",
      "lines": 24,
      "code": "#include <iostream>\n#include <string>\n#include <cmath>\n#include <iomanip>\n#include <sstream>\n\nusing namespace std;\n\nint main() {\n    string s;\n    s = \"123456 abcdef 12.3\";\n    int a;\n    string b;\n    double c;\n    istringstream is(s);\n    is >> a >> b >> c;\n    cout << a << endl << b << endl << c << endl;\n    ostringstream os;\n    os << a << b << c;\n    string t = os.str();\n    cout << t;\n\n    return 0;\n}"
    },
    "algorithm.cpp": {
      "file": "algorithm.cpp",
      "cat": "算法库",
      "title": "algorithm 常用函数",
      "desc": "排序、二分、去重、全排列等常用函数。",
      "lines": 76,
      "code": "#include <algorithm> //算法库\n#include <cmath>\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr[] = {5, 4, 2, 1, 3};\n    sort(arr, arr + 5); // 给数组从小到大排序 （起始地址，结束地址）\n    for (auto x : arr) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-------------------\" << endl;\n    sort(arr, arr + 5, greater<int>()); // 给数组从大到小排序\n    for (auto x : arr) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-------------------\" << endl;\n    // 建议使用容器stl 速度更快 vector演示\n    vector<int> li = {1, 3, 4, 2, 6, 5};\n    sort(li.begin(), li.end());\n    for (auto x : li) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-------------------\" << endl;\n\n    cout << max(15, 10) << \" \";  // 最大值\n    cout << min(15, 10) << endl; // 最小值\n    cout << \"-------------------\" << endl;\n\n    int a = 10, b = 15;\n    swap(a, b); // 变量交换\n    cout << a << \" \" << b << endl;\n    cout << \"-------------------\" << endl;\n\n    vector<int> s1 = {1, 3, 4, 7, 8};\n    reverse(s1.begin(), s1.end()); // 反转\n    for (auto x : s1) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-------------------\" << endl;\n\n    // 全排列 next_permutation\n    vector<char> c = {\n        'a', 'a', 'b', 'a', 'b', 'b',\n    }; // 只有19种情况 少一种 最好用sort提前排好序\n    sort(c.begin(), c.end());\n    do {\n        for (auto x : c) {\n            cout << x << \" \";\n        }\n        cout << endl;\n    } while (next_permutation(c.begin(), c.end()));\n    cout << \"-------------------\" << endl;\n    vector<int> s2 = {1, 2, 3, 4, 5};\n    cout << *lower_bound(s2.begin(), s2.end(), 3) << endl;\n    cout << *upper_bound(s2.begin(), s2.end(), 3) << endl;\n    // 一定要是升序排列才可使用lower_bound与upper_bound 且返回的为迭代器\n\n    // 常见的数学函数\n    cout << abs(-5) << endl;      // 绝对值\n    cout << pow(2, 3) << endl;    // 幂运算\n    cout << sqrt(16) << endl;     // 平方根\n    cout << log(2.71828) << endl; // 自然对数\n    cout << log10(100) << endl;   // 以10为底的对数\n    cout << cos(0) << endl;       // 余弦\n    cout << sin(0) << endl;       // 正弦\n    cout << exp(3) << endl;       // e的指数\n    // floor()向下取整 ceil()向上取整 round()四舍五入\n    // 由于浮点数的精度有些数字会有较小的误差\n    //如果用的万能头文件可以用 gcd()最小公因数 与lcm()最小公倍数 函数\n}"
    },
    "iterator.cpp": {
      "file": "iterator.cpp",
      "cat": "STL 容器",
      "title": "迭代器",
      "desc": "遍历容器元素的通用指针。",
      "lines": 43,
      "code": "#include <iostream>\n#include <vector>\nusing namespace std;\n//迭代器 遍历容器 类似指针\n//用对应容器的迭代器 引入对应头文件 如vector 迭代器示例\n\n//有的数据非线性 如二叉树 此时就可以用迭代器\n\nint main() {\n    vector<int>arr = { 1,3,4,5 };\n    vector<int>::iterator it;//it类似指针 也可用auto it（auto会自动判断类型）\n    \n    for (it = arr.begin();it != arr.end();it++) {\n        cout << *it<<endl;//访问迭代器的值时需要*解引用\n    }\n    //当你对容器不够熟练时 最好不要用迭代器操作容器 除了遍历和访问的操作\n    //否则可能有问题\n    //如下面两个例子\n    //1.\n    vector<int>b = { 1,2,3,4,5 };\n    for (auto k = b.begin();k != b.end();k++) {\n        if (*k == 2 || *k == 3)//目的是删除2和3\n            b.erase(k);\n    }//但b={1,3,4,5} \n     //原因是当2删除后容器自动变小 k从指向2到指向3 但本次循环的删除操作已经进行\n     //接着迭代器向后偏移 指向4\n    \n    //2.为不可运行例子\n    //vector<int>c = { 1,2,3,4 };\n    //for (auto k = c.begin();k != c.end();k++) {\n    //    if (*k == 4) //想要删除4\n    //        c.erase(k);\n    //}此时迭代器指向4 当删除4后 容器变小 迭代器指向end() 再进行迭代器++的操作就越界了 会引发崩溃\n    \n    //.begin()起始点 与.end()指向最后值的下一个位置（已不属于容器）\n    //.rbegin()反向迭代器 .rend()反向为迭代器（end与rend指向都为无意义的值 注意不要解引用 不可访问）\n    /* 迭代器+整形 将迭代器向后移动（类似有-，++，--）\n        迭代器-迭代器：两个迭代器的距离\n        prev(it):返回it的前一个迭代器\n        next(it):返回it的后一个迭代器\n        不是所有容器都有全部的迭代器功能（set不能用迭代器相减算距离）\n    */\n}"
    },
    "map+pair.cpp": {
      "file": "map+pair.cpp",
      "cat": "STL 容器",
      "title": "map 与 pair",
      "desc": "键值对映射，按 key 快速查找。",
      "lines": 36,
      "code": "#include <iostream>\n#include <map> //映射 键值对 原理二叉树\n#include <string>\n#include <unordered_map> //无序的map 查找效率比map高 原理哈希表\n#include <utility>       //引入pair可用<vector><map><set>代替\n\nusing namespace std;\n\nint main() {\n    map<string, string> Username;  // O(log(n))\n    Username[\"用户名\"] = \"ligang\"; // O(log(n))\n    cout << Username[\"用户名\"] << endl;\n\n    Username.insert(make_pair(\"密码\", \"123123\")); // O(log(n))\n    cout << Username[\"密码\"] << endl;\n    // size() O(1) empyy() O(1) clear() O(1)\n    // find(key) O(log(n))  count(key) O(1)\n    map<int, string> m = {{2, \"apple\"}, {1, \"banana\"}}; // O(log(n))\n    m[3] = \"orange\";                                    // O(log(n))\n    m.insert(make_pair(4, \"pear\"));                     // O(log(n))\n    for (auto x : m) {\n        cout << x.first << \":\" << x.second << endl; // O(log(n))\n    } // map是有序的，按照key从小到大排序 key(前面的)为唯一值，value(后面的)可以重复\n    //map会赋值给不存在的key为0，unordered_map不会赋值给不存在的key\n    //map会自动排序，unordered_map不会排序，unordered_map查找效率比map高\n    // multimap与unordered_map不常用 可自行学习\n\n    pair<string, int> p1(\"ligang\", 2);\n    cout << p1.first << \" \" << p1.second << endl; // 用first和second访问pair的两个元素\n    p1.first = \"egg\";\n    cout << p1.first << endl;\n    // pair 两个pair之间可以比较也可判断是否相等 按照字典顺序\n    pair<string, int> p2(\"2\", 3);\n    pair<string, int> p3(\"2\", 4);\n    cout << (p2 > p3) << \" \" << (p1 > p3) << endl;\n}"
    },
    "set.cpp": {
      "file": "set.cpp",
      "cat": "STL 容器",
      "title": "set 集合与去重",
      "desc": "自动去重并保持有序的集合。",
      "lines": 65,
      "code": "#include <algorithm>\n#include <iostream>\n#include <set>\n#include <string>\n#include <unordered_set>\n#include <vector>\n\nusing namespace std;\n\nint main() {\n    set<int> s;                               // 定义一个集合s\n    s = {1, 4, 1, 1, 2, 4, 5, 6, 1, 5, 7, 8}; // 自动从小到大排序\n    s.insert(3);                              // O(log(n))\n    for (auto x : s) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-----------------\" << endl;\n\n    // 从大到小排序用 set<int,greater<int>>s\n    // 不排序 unordered_set 注意添加<unordered_set>头文件\n    unordered_set<int> b = {3, 1, 4, 3, 2, 5};\n    for (auto x : b) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-----------------\" << endl;\n    // 让元素可多次出现 并排序用multiset 在<set>头文件中\n    multiset<int> c = {1, 4, 1, 1, 2, 4, 5, 6, 1, 5};\n    for (auto x : c) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-----------------\" << endl;\n\n    vector<int> arr = {1, 1, 3, 4, 5, 7, 7, 1, 4};\n    set<int> a; // vector与set结合去重\n    for (int x : arr) {\n        a.insert(x);\n    }\n    for (auto x : a) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-----------------\" << endl;\n    cout << *s.find(5) << endl; // O(log(n))\n    // find返回集合中查找元素的迭代器\n    // 若没有对应的指则返回s.end()的迭代器 不要去访问 仅需判断即可\n    cout << \"-----------------\" << endl;\n    // s.size()容器变量数量 O(1)\n    // s.empty()判断容器是否为空 是空返回1 不是空（有元素）返回0 O(1)\n    // s.clear()清空元素 O(n)\n    // s.count()对元素计数 有为1 无为0 因为set为集合元素不可重 O(log(n));\n    // s.count()如果是对multiset则返回这个元素的数量 O(log(n)+n)\n    // s = { 1,4,1,1,2,4,5,6,1,5,7,8 };\n    s.erase(5); // 删除指定的数值 O(1) ==s.erase(s.find(5))\n\n    for (auto x : s) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-----------------\" << endl;\n    cout << *s.lower_bound(6) << endl; // 返回>=6的第一个元素 O(log(n)+n)\n    cout << *s.upper_bound(6) << endl; // 返回>6的第一个元素 O(log(n)+n)\n}"
    },
    "stack and queue.cpp": {
      "file": "stack and queue.cpp",
      "cat": "STL 容器",
      "title": "栈与队列",
      "desc": "后进先出、先进先出两种容器。",
      "lines": 37,
      "code": "#include <iostream>\n#include <queue> //先进先出\n#include <stack> //先进后出\n// 栈与队列\nusing namespace std;\n\nint main() {\n    stack<int> st; // 原理类似于向瓶子里扔石子 先取最上端的数据\n    // st.size()元素个数\n    // st.empty()是否为空\n    st.push(3); // 压入一个元素进栈\n    st.push(2);\n    st.push(1);\n    cout << st.top() << \" \"; // 返回栈顶的数据\n    // st.pop() 弹出一个元素\n    st.pop(); // 1被弹出\n    cout << st.top() << endl;\n\n    queue<int> q; // 类似排队 先进先出\n    q.push(1);\n    q.push(2);\n    q.push(3);\n    cout << q.front() << \" \"; // 输出第一个数据\n    cout << q.back() << endl; // 输出最后的数据\n    q.pop();\n    cout << q.front() << \" \";\n    priority_queue<int> pq; // 优先队列（堆） 先进先出 但是会根据优先级排序\n    // 提供常数时间的访问最大元素的能力，对数时间的插入和删除元素的能力，底层原理是二叉树\n    pq.push(2);\n    pq.push(1);\n    pq.push(3);                                         // 默认是大顶堆\n    priority_queue<int, vector<int>, greater<int>> pq2; // 小顶堆\n    cout << pq.top() << endl;  // 输出最大值\n    cout << pq.size() << endl;  // 输出元素个数\n    pq.pop();// 删除顶端元素\n}//栈与队列都是容器适配器，底层实现是deque双端队列，栈和队列都是先进先出，栈是先进后出\n//不可遍历 只能访问栈顶元素和队列头尾元素，不能访问中间元素 用pop弹出"
    },
    "vector.cpp": {
      "file": "vector.cpp",
      "cat": "STL 容器",
      "title": "vector 动态数组",
      "desc": "可变长数组，随机访问最快。",
      "lines": 36,
      "code": "#include <iostream>\n#include <queue> //先进先出\n#include <stack> //先进后出\n// 栈与队列\nusing namespace std;\n\nint main() {\n    stack<int> st; // 原理类似于向瓶子里扔石子 先取最上端的数据\n    // st.size()元素个数\n    // st.empty()是否为空\n    st.push(3); // 压入一个元素进栈\n    st.push(2);\n    st.push(1);\n    cout << st.top() << \" \"; // 返回栈顶的数据\n    // st.pop() 弹出一个元素\n    st.pop(); // 1被弹出\n    cout << st.top() << endl;\n\n    queue<int> q; // 类似排队 先进先出\n    q.push(1);\n    q.push(2);\n    q.push(3);\n    cout << q.front() << \" \"; // 输出第一个数据\n    cout << q.back() << endl; // 输出最后的数据\n    q.pop();\n    cout << q.front() << \" \";\n    priority_queue<int> pq; // 优先队列（堆） 先进先出 但是会根据优先级排序\n    // 提供常数时间的访问最大元素的能力，对数时间的插入和删除元素的能力，底层原理是二叉树\n    pq.push(2);\n    pq.push(1);\n    pq.push(3);                                         // 默认是大顶堆\n    priority_queue<int, vector<int>, greater<int>> pq2; // 小顶堆\n    cout << pq.top() << endl;  // 输出最大值\n    cout << pq.size() << endl;  // 输出元素个数\n    pq.pop();// 删除顶端元素\n}"
    }
  },
  "music": [
    {
      "file": "松下優也 - Loving Loved.mp3",
      "title": "松下優也 - Loving Loved"
    }
  ]
};
