// Create our Linked List constructor function
function LinkedList(){
    this.head = null;
    this.tail = null;
};

//Create our Node constructor function
function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
};

//Create Prototypes:

// Add to Head
LinkedList.prototype.addToHead = function(value){
    var newNode = new Node (value, this.head, null);
    if(this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
};

// Add to Tail
LinkedList.prototype.addToTail = function(value){
  var newNode = new Node(value, null, this.tail);
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

// Remove from Head
LinkedList.prototype.removeHead = function(){
  if(!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if(this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

// Remove from Tail
LinkedList.prototype.removeTail = function(){
  if(!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if(this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};