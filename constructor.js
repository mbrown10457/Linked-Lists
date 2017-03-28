What is a constructor function?
A cons function:
    Creates an object class and allows us to create multiple objects of that class
    
Example: Facebook:
    All users on Facebook have similar properties (username, password, email)
    We can create a user function that will have the desired properties. This function
    can be re-used to create all the new users necessary.
    ***Constructor functions start with capital letters!
    The this keyword is used to assign parameters to our Users object

**************************
function User(firstName, lastName, age, gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
};
**************************

We invoke our constructor function use the new keyword:
    This creates an object called user1
    user1 has these properties: {firstName: "John", lastName: "Smith", age: 27, gender: "male"}
    
var user1 = new User('John', 'Smith', 27, 'Male');
var user200 = new User ('Jill', 'Robinson', 47, 'Female');

How did all these properties get assigned correctly?
    When we created our constructor function, we used this keyword
    The this keyword in constructor functions does not refer to the 'User' function, but
        rather the object that is being created by the constructor function
        
We are going to create a linked list using a constructor function

