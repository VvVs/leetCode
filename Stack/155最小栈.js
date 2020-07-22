/*
    设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

    push(x) —— 将元素 x 推入栈中。
    pop() —— 删除栈顶的元素。
    top() —— 获取栈顶元素。
    getMin() —— 检索栈中的最小元素。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/min-stack
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

class MinStack {
    constructor() {
        this.dataStore = [];
        this.minStore = [Infinity]
    }

    push(x) {
        this.dataStore.push(x);
        this.minStore.push(Math.min(this.minStore[this.minStore.length - 1], x));
    }

    pop() {
        this.dataStore.pop();
        this.minStore.pop();
    }

    top() {
        return this.dataStore[this.dataStore.length - 1]
    }

    getMin() {
        return this.minStore[this.minStore.length - 1]
    }
}

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top()); 
console.log(minStack.getMin());