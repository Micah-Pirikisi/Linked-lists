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

    removeTop() {
        if(!this.head) {
            return; 
        }

        this.head = this.head.next; 
    }

    removeLast() {
        if(!this.head) {
            return; 
        }

        let current = this.head; 
        while(current.next.next) {
            current = current.next; 
        }

        current.next = null;
    }

    pop(index) {
        if(index < 0 || index > this.size()) {
            console.error('Invalid index'); 
            return; 
        }

        if(index === 0) {
            this.head = this.head.next; 
            return; 
        }

        let current = this.head; 
        for(let i = 0; i < index -1; i++) {
            current = current.next; 
        }

        if(current.next) {
            current.next = current.next.next; 
        }
    }
}

const linkedList = new LinkedList(); 

linkedList.prepend(5); 
linkedList.prepend(3); 
linkedList.prepend(8); 