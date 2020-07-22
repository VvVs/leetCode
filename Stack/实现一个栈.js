class Stack { // 1, 2, 3
    constructor() {
        this.dataStore = {};
        this.count = 0;
    }

    push(ele) {
        this.dataStore[this.count] = ele;
        this.count++;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.dataStore[this.count - 1];
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        
        this.count --;

        let result = this.dataStore[this.count];
        delete this.dataStore[this.count];

        return result;
    }

    isEmpty() {
        return this.count === 0;
    }
}

let stack = new Stack;
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
// stack.pop();
// stack.pop();
console.log(stack.isEmpty());