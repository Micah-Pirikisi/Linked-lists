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

    append(value) {
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

    size() {
        let count = 0; 
        let current = this.head; 
        while(current) {
            count++; 
            current = current.next;
        }

        return count; 
    }

    insertAt(index, value) {
        if(index < 0 || index > this.size()) {
            console.error('Invalid index'); 
            return; 
        }

        const newNode = new Node(value); 
        if(index === 0) {
            newNode.next = this.head; 
            this.head = newNode; 
            return; 
        }

        let current = this.head; 
        for(let i = 0; i < index -1; i++) {
            current = current.next; 
        }

        newNode.next = current.next; 
        current.next = newNode; 
    }
}