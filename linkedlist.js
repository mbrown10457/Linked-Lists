What is a linked list?
    A linked list is a list of elements called nodes, connected/linked together in single file line
Two types of linked lists:
1. Single Linked List: Each node only has access to the next node
2. Double Linked List: Each node has access to the next node and the previous node

Linked lists only need to know about two nodes to function properly
1. Head Node: The first node in a linked list
2. Tail Node: The last node in a linked list

We can adjust (add/subtract) head and tail nodes, and point the linked list to the correct
    head/tail nodes
    
Example Node
*****************
node3 {value: 7, next: node4, prev:2}

Linked list constructor function
******************************
function LinkedList(){
    this.head = null;
    this.tail = null;
}

Node constructor function
**************************
function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}

__________________________________________________________________
var LL = new LinkedList();

console.log(LL);
        {head: null, tail: null}
        
************
var todoList = new LinkedList();
var userList = new LinkedList();

Because a linked list is only aware of the next and previous nodes, if we can get to the head
    or tail of the LL, we can find the values of all the other nodes
    With a LL we cannot just point directly to node87 and ask for the value, we would have 
        to go through either node1 -> node87 OR nodeEnd -> node87(assuming a double LL)
    
*********************
var node1 = new Node(100, 'node2', null);
console.log(node1);
        {value: 100, next: 'node2', pre: null}
        
        
- We now know our cunstroctur functions are working properly
- Now to search and modify that data
- We will do this by creating a new prototype to add to our LinkedList function constructor:

  // First create new node using our previous constructors
  // First we take the value from addToHead and put in the value spot
  // Second for the next node we now point to what used to be the head node, now node2
  // And third for the previous node, we pass in null as there is no previous - this is the head
  // Now to attach new node to the head of the Linked List
  // If the linked list is empty, we can create a new node and use our head and tail pointers
  // And point it directly at this node, as it will be the only node in the LL
  // If the LL is not empty we need to modify all the other nodes to point to this new head

LinkedList.prototype.addToHead = function(value){
    var newNode = new Node (value, this.head, null);
    if(this.head) this.head.prev = newNode; //If head node exists, change prev to newNode
    else this.tail = newNode; //If LL is empty, point the tail to newNode
    this.head = newNode;
};

***********************************
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
If we want to add a node to the tail:
************************************
LinkedList.prototype.addToTail = function(value){
  var newNode = new Node(value, null, this.tail);
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}

***********************************
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
If we want to remove the head and return its value:
************************************

LinkedList.prototype.removeHead = function(){
  if(!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if(this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};


***********************************
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
If we want to remove the TAIL and return its value:
************************************
LinkedList.prototype.removeTail = function(){
  if(!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if(this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};












  
