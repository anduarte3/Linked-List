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
        
        if (this.head == null) {
            this.head = Node;
        }
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

        //to arrange
        if (this.head == null) {
            this.head = Node;
        }
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
        for (let i=0;i<index;i++) {

        }
    }
}

const ll = new LinkedList();

console.log(ll.append(3));
console.log(ll.append(true));
console.log(ll.append(14));
console.log(ll.append('ok'));
console.log(ll.prepend(6));
console.log(ll.prepend(false));
console.log(ll.prepend(22));
console.log(ll.prepend('not ok'));
console.log(ll.sizeNode());
console.log(ll.headNode());
console.log(ll.tailNode());
console.log(ll.atIndex(4));

console.log(ll);