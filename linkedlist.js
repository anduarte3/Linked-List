function createNode(value) {
    return {
      value: value,
      next: null,
    };
}
class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        let Node = createNode(value);
        let current;
        
        if (this.head == null) this.head = Node;
        else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }
            this.tail = Node;
            current.next = this.tail;
        }
        this.length++;
    }
    prepend(value) {
        let Node = createNode(value);

        if (this.head == null) this.head = Node;
        else {
            Node.next = this.head;
            this.head = Node;
        }
        this.length++;
    }
    sizeNode() {
        let size = this.length;
        return size
    }
    headNode() {
        let firstNode = this.head.value;
        return firstNode
    }
    tailNode() {
        let lastNode = this.tail.value;
        return lastNode
    }
    atIndex(index) {
        let current = this.head;
        let count = 1;

        while (current) {
          if (count === index) {  
            return current.value;
          }
          count++;  
          current = current.next;  
        }
        return -1;
    }
    pop() {
        let previous = this.head;

        if (this.head == null) return this.head
        if (this.head.next == null) return -1

        while (previous.next.next != null) {
            previous = previous.next;
        }
        previous.next = null;
        return this.head
    }
    contains(input) {
        let n = this.head;
        while (n != null) {
            if (n.value === input) console.log('true');
            else console.log('false');
            n = n.next;
        }
    }
    find(input) {
        let current = this.head;
        let count = 1;

        while (current) {
          if (current.value == input) {  
            return count;
          }
          count++;  
          current = current.next;  
        }
    }
    toString() {
        let list = this.head;
        let string = '';

        while (list) {
            string += `${list.value}${list.next ? " -> " : ""}`;
            list = list.next;
        }
        return string
    }
}

const ll = new LinkedList();

console.log(ll);

console.log(ll.append(3));
console.log(ll.append(true));
console.log(ll.append(14));
console.log(ll.append('ok'));
console.log(ll.prepend(6));
console.log(ll.prepend('something'));
console.log(ll.prepend(22));
console.log(ll.prepend('not ok'));
// console.log(ll.sizeNode());
// console.log(ll.headNode());
// console.log(ll.tailNode());
// console.log(ll.atIndex(4));
// console.log(ll.atIndex(7));
// console.log(ll.atIndex(2));
// console.log(ll.contains(3));
// console.log(ll.contains('ok'));
// console.log(ll.contains(44));
// console.log(ll.find(false));
// console.log(ll.find('not ok'));
console.log(ll.find(6));
console.log(ll.toString());
// console.log(ll.pop());
// console.log(ll.pop());
// console.log(ll.pop());
// console.log(ll.pop());
// console.log(ll.pop());
// console.log(ll.pop());

console.log(ll);

