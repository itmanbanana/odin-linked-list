class Node {
    _value = null;
    _nextNode = null;
    constructor(val, next = null) {
        this._value = val;
        this._nextNode = next;
    }
    get value() { return this._value; }
    get nextNode() { return this._nextNode; }
    set value(newValue) { this._value = newValue; }
    set nextNode(node) { this._nextNode = node; }
}
class LinkedList {
    _head = null;
    constructor(newHead = null) {
        this._head = newHead;
    }
    head() { return this._head?.value; }
    tail() {
        let node = this._head;
        while (node?.nextNode)
            node = node.nextNode;
        return node?.value;
    }
    size() {
        let node = this._head;
        let count = 1;
        while (node?.nextNode) {
            node = node.nextNode;
            count++;
        }
        return count;
    }
    append(value = 0) {
        let tail = this._head;
        while (tail?.nextNode)
            tail = tail.nextNode;
        if (tail)
            tail.nextNode = new Node(value);
    }
    prepend(value = 0) {
        const newHead = new Node(value);
        newHead._nextNode = this._head;
        this._head = newHead;
    }
    at(index) {
        if (index < 1 || !Number.isInteger(index))
            return "Invalid index";
        let node = this._head;
        let current = 1;
        while (current < index && node?.nextNode) {
            node = node.nextNode;
            current++;
        }
        if (node && node.value)
            return node?.value;
        return "Index not found";
    }
    pop() {
        if (this.size() === 0)
            return;
        const oldHead = this._head;
        if (this._head?._nextNode)
            this._head = this._head._nextNode;
        return oldHead;
    }
    contains(value) {
        let node = this._head;
        while (node?.nextNode) {
            if (node.value === value)
                return true;
            node = node.nextNode;
        }
        return false;
    }
    findIndex(value) {
        let node = this._head;
        let index = 1;
        while (node?.nextNode) {
            if (node.value === value)
                return index;
            node = node.nextNode;
            index++;
        }
        return -1;
    }
    toString() {
        let llStr = "";
        let node = this._head;
        while (node) {
            llStr += ` ( ${node.value} ) ->`;
            node = node.nextNode;
        }
        llStr += " null";
        return llStr;
    }
}
const LL = new LinkedList(new Node(1));
LL.append(2);
LL.append(3);
LL.append(4);
LL.prepend(-1);
LL.append(5);
LL.prepend(0);
LL.append(6);
console.log(LL.toString());
console.log(LL.tail());
console.log(LL.size());
console.log(LL.at(5));
console.log(LL.findIndex(3));
console.log(LL.findIndex(7));
console.log(LL.contains(4));
console.log(LL.contains(8));
export {};
//# sourceMappingURL=index.js.map