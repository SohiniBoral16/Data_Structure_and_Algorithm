class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Adds a node to the end of the circular linked list
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        // If the list is empty, make the new node the head
        this.head = newNode;
        this.tail = newNode;
        newNode.next = this.head;
      } else {
        // If the list is not empty, append the new node to the end
        newNode.next = this.head;
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    // Traverses and prints the values in the circular linked list
    display() {
      if (!this.head) {
        console.log("Circular linked list is empty.");
        return;
      }
  
      let current = this.head;
      do {
        console.log(current.value);
        current = current.next;
      } while (current !== this.head);
    }
  }
  
  const circularLinkedList = new CircularLinkedList();
  circularLinkedList.append(1);
  circularLinkedList.append(2);
  circularLinkedList.append(3);
  
  circularLinkedList.display();
  