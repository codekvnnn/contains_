class SLL {
    constructor() {
        this.head = null;
    }

    // Assuming you have other methods here, e.g., insert, delete, etc.

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

// Inner class for Node representation (assuming this wasn't provided earlier)
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Sample usage
let list = new SLL();
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

list.head = node1;

console.log(list.contains(2)); // true
console.log(list.contains(5)); // false
