
class TwoStacksInArray {
    
    constructor(capacity) {
        this.capacity = capacity;
        this.top1 = -1;
        this.top2 = capacity;
        this.items = [];
    }

    push1(key) {
        if (this.top1 < this.top2-1) {
            this.items[++this.top1] = key;
        } else {
            console.log('stack overflow!!')
        }
    }

    push2(key) {
        if (this.top1 < this.top2-1) {
            this.items[--this.top2] = key;
        } else {
            console.log('stack overflow!!')
        }
    }

    pop1() {
        if (this.top1 > -1) {
            return this.items[this.top1--]
        } else {
            console.log('stack underflow!!')
        }
    }

    pop2() {
        if (this.top2 < this.capacity) {
            return this.items[this.top2++]
        } else {
            console.log('stack underflow!!')
        }
    }

    peek1() {
        return this.items[this.top1];
    }

    peek2() {
        return this.items[this.top2];
    }

}

/*  Usage
    const stack = new TwoStacksInArray(6);
    stack.push1(1);
    stack.push1(2);
    stack.push2(4);
    console.log(stack.peek1())
    console.log(stack.peek2())
    console.log(stack.pop1())
    console.log(stack.pop2())
    console.log(stack.peek1())
*/