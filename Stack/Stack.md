# 栈
- 小问题
    - 浏览器的前进、后退
        - 描述
            - 当你一次访问完一串页面a-b-c,点击浏览器的后退按钮，就可以查看之前浏览过的页面b和a，点击前进按钮，就可以重新查看页面b和c，但是，如果你后退到页面b后，点击了刷新页面b，那就无法再通过前进和后退功能查看页面c了

- 关于栈
    - 理解
        - 一摞叠在一起的盘子，我们平时放盘子时，都是从下一个个放，取的时候也是从上到下一个个依次取，不能从中间随意抽出。后进者先出，先进者后出。(后入先出 LIFO[last-in-first-out])
    - 从栈的操作性角度看，栈是一种操作受限的线性表，只允许在一端插入和删除数据。

    - 思考
        - 相比数组和链表，栈只有限制，并没有任何优势，那么直接用数组和链表就好了，为什么还有这个操作受限的栈？
        - 解答：
            - 事实上，从功能上来说，数组和链表确实可以替代栈，但是在特定的数据结构是特定场景的抽象，而且，数组和链表暴露了太多的接口操作，操作的确灵活自由，但是使用时就比较不可控，自然也就更容易出错。当某个数据集合只涉及在一端插入和删除数据，并且满足后进先出、现进后出的特性、我们就应该首选栈这种数据结构。

- 如何实现一个栈？
    - 从定义中得出，栈主要包含两个操作，入栈和出栈。也就是在栈顶插入一个数据和栈顶删除一个数据。
    - 实际上栈可以用数组实现，也可以用链表来实现。用数组实现的栈叫做顺序栈，用链表实现的栈叫做链式栈。
    - case1
        ```JAVA
            // 基于数组实现的顺序栈
            public class ArrayStack {
                private String[] items; // 数组
                private int count; // 栈中的元素个数
                private int n; // 栈的大小

                // 初始化数组，申请一个大小为n的数组空间
                public ArrayStack(int n) {
                    this.items = new String[n];
                    this.n = n;
                    this.count = 0;
                }

                // 入栈操作
                public boolean push(String item) {
                    // 如果数组空间不够了 直接返回false 入栈失败
                    if (count == n) return false;
                    // 将item放到下标为count的位置并且count加1
                    items[count] = item;
                    ++count;
                    return true;
                }

                // 出栈操作
                public String pop() {
                    // 栈为空 择直接返回null
                    if (count == 0) return null;
                    // 返回下标为count-1的元素，并且栈中元素个数count减1
                    String tmp = items[count - 1];
                    --count;
                    return tmp;
                }
            }
        ```
    - case2
        ```Javascript
            class ArrayStack {
                constrctor() {
                    this.dataStore = [];
                    this.top = 0;
                    this.push = push;
                    this.pop = pop;
                    this.peek = peek;
                    this.length = length;
                    this.clear = clear;
                }

                push(element) {
                    this.dataStore[this.top++] = element;
                }

                pop() {
                    return this.dataStore[--this.top];
                }

                peek() {
                    return this.dataStore[this.top - 1];
                }

                length() {
                    return this.top;
                }

                clear() {
                    this.top = 0;
                }
            }
        ```
- 栈复杂度
    - 不管是顺序栈还是链式栈，我们存储数据只需要一个大小为n的数组就够了。在入栈和出栈的过程中，只需要一两个变量存储空间。所以空间复杂度为O(1)
    - 时间复杂度为O(1)