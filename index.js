class Node {
    constuctor(value) {
        this.value = value; 
        this.next = null; 
    }
}

class LinkedList {
    constructor() {
        this.head = null; 
    }

    prepend(value) {
        const newNode = new Node(value); 
        newNode.next = this.head; 
        this.head = newNode; 
    }

    append(data) {
        const newNode = new Node(value); 

        if(!this.head) {
            this.head = newNode; 
            return; 
        }

        let current = this.head; 
        while(current.next) {
            current = current.next; 
        }

        current.next = newNode; 
    }
}