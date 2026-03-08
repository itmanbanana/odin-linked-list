class Node {
  _value: number | null = null;
  _nextNode: Node | null = null;

  constructor(val: number | null, next: Node | null = null) {
    this._value = val;
    this._nextNode = next;
}

  get value(): number | null | undefined { return this._value }
  get nextNode(): Node | null | undefined { return this._nextNode }

  set value(newValue: number) { this._value = newValue; }
  set nextNode(node: Node) { this._nextNode = node; }
}

class LinkedList { 
  _head: Node | null = null;

  constructor(newHead: Node | null = null) {
    this._head = newHead;
  }
  
  head() { return this._head?.value }
  
  tail() {
    let node = this._head;
    while(node?.nextNode) node = node.nextNode;
    return node?.value;
  }

  size() {
    let node = this._head;
    let count = 1;
    while(node?.nextNode) {
      node = node.nextNode;
      count++;
    }
    return count;
  }

  append(value: number = 0) {
    let tail = this._head;
    while(tail?.nextNode) tail = tail.nextNode;
    if (tail) tail.nextNode = new Node(value);
  }

  prepend(value: number = 0) {
    const newHead = new Node(value);
    newHead._nextNode = this._head;
    this._head = newHead;
  }

  at(index: number): number | string {
    if (index < 1 || !Number.isInteger(index)) return "Invalid index";
    let node = this._head;
    let current = 1;
    while(current < index && node?.nextNode) {
      node = node.nextNode;
      current++;
    }
    if (node && node.value) return node?.value;
    return "Index not found";
  }

  pop() {
    if (this.size() === 0) return;
    const oldHead = this._head;
    if (this._head?._nextNode) this._head = this._head._nextNode;
    return oldHead;    
  }

  contains(value: number | string) {
    let node = this._head;
    while(node?.nextNode) {
      if (node.value === value) return true;
      node = node.nextNode;
    }
    return false;
  }

  findIndex(value: number | string): number {
    let node = this._head;
    let index = 1;
    while(node?.nextNode) {
      if (node.value === value) return index;
      node = node.nextNode;    
      index++;
    }
    return -1;
  }

  insertAt(index: number, ...values: number[]) {
    if (index < 0 || index > this.size()) throw new RangeError("Index out of range");
    let current: Node = this._head!;
    let i = 0;
    
    while(i < (index - 1)) {
      if (current?.nextNode) current = current.nextNode;
      i++;
    }

    let prev = current!;
    const oldNext = current.nextNode!;
    
    for (const v of values) {
      const newCurrent: Node = new Node(v);
      prev._nextNode = newCurrent;
      prev = newCurrent;
    }
    
    prev.nextNode = oldNext;
  }

  removeAt(index: number) {
    if (index < 0 || index > this.size()) throw new RangeError("Index out of range");
    let current: Node = this._head!;
    let prev: Node = this._head!;
    let i = 0;
    
    while(i < index) {
      if (prev) prev = current;
      if (current?.nextNode) current = current.nextNode;
      i++;
    }

    prev._nextNode = current._nextNode;
    return current?.value;
  }

  toString() {
    let llStr = "";
    let node: Node | null | undefined = this._head;
    while(node) {
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
console.log(LL.toString());
LL.insertAt(1, 10, 11, 12, 13);
console.log(LL.toString());