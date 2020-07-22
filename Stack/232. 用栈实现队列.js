class Queue {
    constructor() {
        this.dataStore = {};
        this.count = 0;
        this.close = 0;
    }

    push(ele) {
        this.dataStore[this.count] = ele;
        this.count++;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.dataStore[this.close];
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        let result = this.dataStore[this.close];
        delete this.dataStore[this.close];

        this.close++;

        return result;
    }

    isEmpty() {
        return this.count - this.close === 0;
    }
}

var queue = new Queue;

queue.push(1)
queue.push(2)
queue.push(3)
console.log(queue.peek());
queue.pop();
console.log(queue.peek());

