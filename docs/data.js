window.DATA = {
  "repo": "https://github.com/Pineovex/c-study",
  "generatedAt": "2026-11-23",
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
      "desc": "把当前元素往前面已排好的序列里插，O(n²)，对近乎有序的数组很快。",
      "lines": 35,
      "code": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    //int n;\n    //cin >> n;\n    //vector<int>arr(n);\n    //for (int i = 0;i < n;i++) {\n    //    cin >> arr[i];\n    //}\n    //int temp = arr[3];\n    //arr[3] = arr[1];\n    //arr[1] = temp;\n    //for (int i = 0;i < n;i++) {\n    //    cout << arr[i]<<\" \";\n\n    //}\n    int b[10] = { 1,10,2,6,3,4,8,9,7,5};\n    //选择最小的数字将他排到最前面\n    \n    for (int i = 0;i < 10;i++) {\n        int min = b[i];\n        for (int j = i;j < 10;j++) {\n            if (min > b[j]) {\n                min = b[j];\n                b[j] = b[i];\n                b[i] = min;\n            }\n        }\n    }\n    for (auto x : b) {\n        cout << x << \" \";\n    }\n}//如何用这个思路写从大到小排序呢"
    },
    "高精度算法.cpp": {
      "file": "高精度算法.cpp",
      "cat": "字符串与大数",
      "title": "高精度加法",
      "desc": "用数组倒序存每一位、逐位相加再处理进位，解决 long long 也装不下的整数运算。",
      "lines": 41,
      "code": "#include <iostream>\n#include <string>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\n\nint main() {\n    string s1, s2,s3;\n    int a1[210] = { 0 }, a2[210] = { 0 },a3[210] = { 0 };\n    getline(cin, s1);\n    getline(cin, s2);\n    for (int i = 0;i < size(s1);i++) {\n        a1[s1.size() - i - 1] = s1[i] - '0';\n    }\n    for (int i = 0;i < size(s2);i++) {\n        a2[s2.size() - i - 1] = s2[i] - '0';\n    }\n    int len = s1.size();\n    if (s2.size() > s1.size()) len = s2.size();\n    for (int i = 0;i < len;i++) {\n        a3[i] = a1[i] + a2[i];\n}\n    \n    for (int i = 0;i < len;i++) {\n        if (a3[i] >= 10) \n        {\n            a3[i + 1] = a3[i + 1]+a3[i] / 10;\n            \n            a3[i] =a3[i]% 10;\n        }\n    }\n    if (a3[len] != 0) {\n        len++;\n    }\n    for (int i = len-1;i >=0;i--) {\n        cout << a3[i];\n\n    }\n    return 0;\n}"
    },
    "冒泡排序.cpp": {
      "file": "冒泡排序.cpp",
      "cat": "排序算法",
      "title": "冒泡排序",
      "desc": "相邻两两比较、大的往后冒，O(n²)，最直观但最慢的一版手写排序。",
      "lines": 21,
      "code": "#include <iostream>\nusing namespace std;\nint main() {\n    int arr[10] = { 1,10,2,6,3,4,8,9,7,5 };\n    for (int i = 0;i < 10;i++) {\n        for (int j = 0;j < 9-i;j++) {\n            if (arr[j] > arr[j + 1]) {\n                int temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n            }\n        }\n    }\n    //如果前面的元素大于后面的元素 就让他与后面交换 \n    //那么第一轮结束后 最大的元素就在最后面\n    //即可让内层循环轮数减一 因为最后为最大的数 不必再比较\n    //多次循环 在相应区间的最大数在最后\n    for (auto x : arr) {\n        cout << x << \" \";\n    }\n}//如何用这个思路写从大到小排序呢"
    },
    "选择排序.cpp": {
      "file": "选择排序.cpp",
      "cat": "排序算法",
      "title": "选择排序",
      "desc": "每一轮选出剩下部分的最小值换到前面，交换次数少，O(n²)。",
      "lines": 35,
      "code": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    //int n;\n    //cin >> n;\n    //vector<int>arr(n);\n    //for (int i = 0;i < n;i++) {\n    //    cin >> arr[i];\n    //}\n    //int temp = arr[3];\n    //arr[3] = arr[1];\n    //arr[1] = temp;\n    //for (int i = 0;i < n;i++) {\n    //    cout << arr[i]<<\" \";\n\n    //}\n    int b[10] = { 1,10,2,6,3,4,8,9,7,5};\n    //选择最小的数字将他排到最前面\n    \n    for (int i = 0;i < 10;i++) {\n        int min = b[i];\n        for (int j = i;j < 10;j++) {\n            if (min > b[j]) {\n                min = b[j];\n                b[j] = b[i];\n                b[i] = min;\n            }\n        }\n    }\n    for (auto x : b) {\n        cout << x << \" \";\n    }\n}//如何用这个思路写从大到小排序呢"
    },
    "字符串的拆除与拼接.cpp": {
      "file": "字符串的拆除与拼接.cpp",
      "cat": "字符串与大数",
      "title": "字符串的拆分与拼接",
      "desc": "istringstream 按空格拆出 int / string / double，ostringstream 再拼回一个字符串。",
      "lines": 24,
      "code": "#include <iostream>\n#include <string>\n#include <cmath>\n#include <iomanip>\n#include <sstream>\n\nusing namespace std;\n\nint main() {\n    string s;\n    s = \"123456 abcdef 12.3\";\n    int a;\n    string b;\n    double c;\n    istringstream is(s);\n    is >> a >> b >> c;\n    cout << a << endl << b << endl << c << endl;\n    ostringstream os;\n    os << a << b << c;\n    string t = os.str();\n    cout << t;\n\n    return 0;\n}"
    },
    "algorithm.cpp": {
      "file": "algorithm.cpp",
      "cat": "算法库",
      "title": "algorithm 常用函数",
      "desc": "sort 升序与 greater 降序、max / min / swap / reverse、next_permutation 全排列、lower_bound 与 upper_bound 二分。",
      "lines": 62,
      "code": "#include <iostream>\n#include <algorithm>//算法库\n#include <vector>\nusing namespace std;\n\nint main() {\n    int arr[] = { 5,4,2,1,3 };\n    sort(arr, arr + 5);//给数组从小到大排序 （起始地址，结束地址）\n    for (auto x : arr) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-------------------\" << endl;\n    sort(arr, arr + 5,greater<int>());//给数组从大到小排序\n    for (auto x : arr) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-------------------\" << endl;\n    //建议使用容器stl 速度更快 vector演示\n    vector<int>li = { 1,3,4,2,6,5 };\n    sort(li.begin(), li.end());\n    for (auto x : li) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-------------------\" << endl;\n\n    cout << max(15, 10) << \" \";\n    cout << min(15, 10) << endl;\n    cout << \"-------------------\" << endl;\n\n    int a = 10, b = 15;\n    swap(a, b);//变量交换\n    cout << a << \" \" << b << endl;\n    cout << \"-------------------\" << endl;\n\n    vector<int>s1 = { 1,3,4,7,8 };\n    reverse(s1.begin(), s1.end());//反转\n    for (auto x : s1) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-------------------\" << endl;\n\n    //全排列 next_permutation\n    vector<char>c = { 'a','a','b','a','b','b', };//只有19种情况 少一种 最好用sort提前排好序\n    sort(c.begin(), c.end());\n    do {\n        for (auto x : c) {\n            cout << x <<\" \";\n        }\n        cout << endl;\n    } while (next_permutation(c.begin(), c.end()));\n    cout << \"-------------------\" << endl;\n    vector<int>s2 = { 1,2,3,4,5 };\n    cout << *lower_bound(s2.begin(), s2.end(), 3) << endl;\n    cout << *upper_bound(s2.begin(), s2.end(), 3) << endl;\n    //一定要是升序排列才可使用lower_bound与upper_bound 且返回的为迭代器\n\n\n}"
    },
    "iterator.cpp": {
      "file": "iterator.cpp",
      "cat": "STL 容器",
      "title": "迭代器",
      "desc": "像指针一样遍历容器：begin() 指向首元素、end() 指向最后一个元素的再下一个位置，取值要解引用。",
      "lines": 17,
      "code": "#include <iostream>\n#include <vector>\nusing namespace std;\n//迭代器 遍历容器 类似指针\n//用对应容器的迭代器 引入对应头文件 如vector 迭代器示例\n//.begin()起始点 与.end()指向最后值的下一个位置（已不属于容器）\n\n\nint main() {\n    vector<int>arr = { 1,3,4,5 };\n    vector<int>::iterator it;\n    \n    for (it = arr.begin();it != arr.end();it++) {\n        cout << *it<<endl;//访问迭代器的值时需要*解引用\n    }\n\n}"
    },
    "map+pair.cpp": {
      "file": "map+pair.cpp",
      "cat": "STL 容器",
      "title": "map 与 pair",
      "desc": "键值对映射、红黑树 O(log n) 与哈希表 unordered_map 的差别，pair 的 first / second 和按字典序比较。",
      "lines": 29,
      "code": "#include <iostream>\n#include <map>//映射 键值对 原理二叉树\n#include <unordered_map> //无序的map 查找效率比map高 原理哈希表\n#include <string>\n#include <utility>//引入pair可用<vector><map><set>代替\n\n\nusing namespace std;\n\nint main() {\n    map<string, string> Username;//O(log(n))\n    Username[\"用户名\"] = \"ligang\";//O(log(n))\n    cout << Username[\"用户名\"]<<endl;\n    \n    Username.insert(make_pair(\"密码\",\"123123\"));//O(log(n))\n    cout << Username[\"密码\"]<<endl;\n    //size() O(1) empyy() O(1) clear() O(1)\n    //find(key) O(log(n))  count(key) O(1)\n    \n    pair<string, int>p1(\"ligang\",2);\n    cout << p1.first <<\" \"<<p1.second << endl;\n    p1.first = \"egg\";\n    cout << p1.first << endl;\n    //pair 两个pair之间可以比较也可判断是否相等 按照字典顺序\n    pair<string, int>p2(\"2\", 3);\n    pair<string, int>p3(\"2\", 4);\n    cout << (p2 > p3) << \" \" << (p1 > p3) << endl;\n\n}"
    },
    "set.cpp": {
      "file": "set.cpp",
      "cat": "STL 容器",
      "title": "set 集合与去重",
      "desc": "set 自动升序、unordered_set 用哈希不排序、vector 喂给 set 去重、find / count / erase / lower_bound 的复杂度。",
      "lines": 60,
      "code": "#include <iostream>\n#include <string>\n#include <vector>\n#include <set>\n#include <unordered_set>\n#include <algorithm>\n\nusing namespace std;\n\nint main() {\n    set<int>s;//定义一个集合s\n    s = { 1,4,1,1,2,4,5,6,1,5,7,8 };//自动从小到大排序\n    s.insert(3);//O(log(n))\n    for (auto x : s) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-----------------\" << endl;\n\n    //从大到小排序用 set<int,greater<int>>s\n    //不排序 unordered_set 注意添加<unordered_set>头文件\n    unordered_set<int>b = { 3,1,4,3,2,5 };\n    for (auto x : b) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-----------------\" << endl;\n\n\n    vector<int>arr = { 1,1,3,4,5,7,7,1,4 };\n    set<int>a;//vector与set结合去重\n    for (int x : arr) {\n        a.insert(x);\n    }\n    for (auto x : a) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-----------------\" << endl;\n    cout << *s.find(5) << endl;//O(log(n))\n    //find返回集合中查找元素的地址\n    //若没有对应的指则返回s.end()的地址 为空没有任何值\n    cout << \"-----------------\" << endl;\n    //s.size()容器变量数量 O(1)\n    //s.empty()判断容器是否为空 是空返回1 不是空（有元素）返回0 O(1)\n    //s.clear()清空元素 O(n)\n    //s.count()对元素计数 有为1 无为0 因为set为集合元素不可重 O(log(n));\n    \n    //s = { 1,4,1,1,2,4,5,6,1,5,7,8 };\n    s.erase(5);//删除指定的数值 O(1) ==s.erase(s.find(5))\n    \n    for (auto x : s) {\n        cout << x << \" \";\n    }\n    cout << endl;\n    cout << \"-----------------\" << endl;\n    cout << *s.lower_bound(5)<<endl;//返回>=5的第一个元素 O(log(n)+n)\n    cout << *s.upper_bound(5) << endl;//返回>5的第一个元素 O(log(n)+n)\n\n}"
    },
    "stack and queue.cpp": {
      "file": "stack and queue.cpp",
      "cat": "STL 容器",
      "title": "栈与队列",
      "desc": "stack 先进后出（top / push / pop），queue 先进先出（front / back / push / pop）。",
      "lines": 28,
      "code": "#include <iostream>\n#include <stack>//先进后出\n#include <queue>//先进先出\n//栈与队列\nusing namespace std;\n\nint main() {\n    stack<int>st;//原理类似于向瓶子里扔石子 先取最上端的数据\n    //st.size()元素个数\n    //st.empty()是否为空\n    st.push(3);//压入一个元素进栈\n    st.push(2);\n    st.push(1);\n    cout << st.top() << \" \";//返回栈顶的数据\n    //st.pop() 弹出一个元素\n    st.pop();//1被弹出\n    cout << st.top() << endl;\n\n    queue<int>q;//类似排队 先进先出\n    q.push(1);\n    q.push(2);\n    q.push(3);\n    cout << q.front() << \" \";//输出第一个数据\n    cout << q.back() << endl;//输出最后的数据\n    q.pop();\n    cout << q.front() << \" \";\n\n}"
    },
    "vector.cpp": {
      "file": "vector.cpp",
      "cat": "STL 容器",
      "title": "vector 动态数组",
      "desc": "push_back / pop_back / insert / erase，以及 unique 相邻去重的正确用法（先去重先排序）。",
      "lines": 60,
      "code": "#include <iostream>\n#include <string>\n#include <vector>\n#include <algorithm>\n\nusing namespace std;\n\nint main() {\n    vector<int>arr = { 1,12,12 };\n    arr.push_back(55);//向最后插入\n    for (int x : arr) {\n        cout << x<<\" \";\n    }\n    cout <<endl<< \"-------------------\" << endl;\n    arr.pop_back();//删除最后的内容\n    for (int x : arr) {\n        cout << x << \" \";\n    }\n    cout <<endl<< \"-------------------\" << endl;\n    arr.insert(arr.begin() + 1, 2);//insert(地址+偏移,插入的数字)在哪个位置插入一个数\n    for (int x : arr) {\n        cout << x << \" \";\n        \n    }\n    cout <<endl<< \"-------------------\" << endl;\n    arr.insert(arr.begin(), 3);\n    for (int x : arr) {\n        cout << x << \" \";\n    }\n\n    cout <<endl<< \"-------------------\" << endl;\n    arr.erase(arr.begin());//擦除数组地址中的数据\n    for (int x : arr) {\n        cout << x << \" \";\n    }\n    cout <<endl<< \"-------------------\" << endl;\n    arr.erase(arr.begin()+1, arr.end());//擦除区域的数据\n    for (int x : arr) {\n        cout << x << \" \";\n    }\n    cout <<endl<< \"-------------------\" << endl;\n\n    vector<int>s = { 1,1,1,2,2,2,1,3,1,4,5,5,6,7 };//去除相邻重复元素，不相邻不可去除\n    s.erase(unique(s.begin(), s.end()), s.end());//使用了algorithm\n    for (int x : s) {\n        cout << x << \" \";\n    }\n    cout <<endl<< \"-------------------\" << endl;\n\n    s = { 1,1,1,2,2,2,1,3,4,5,5,6,7 };\n    sort(s.begin(),s.end());//若想去重先用sort排序;\n    //使用了algorithm\n    auto it=unique(s.begin(), s.end());\n    s.erase(it,s.end());\n    for (int x : s) {\n        cout << x << \" \";\n    }\n    cout <<endl<< \"-------------------\" << endl;\n  \n}"
    }
  }
};
