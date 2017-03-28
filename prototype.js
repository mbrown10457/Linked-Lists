Prototype Object:

The prototype object is an object that any other constructor function can refer to and 
    get the information or functionality it needs

****************
function User(firstName, lastName, age, gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
};
**********************

We can add additonal fields to our User constructor:

User.prototype.emailDomain = '@facebook.com';

Now if we view our original user1 data set:

var user1 = new User('John', 'Smith', 27, 'Male', proto)

Now all instances of user# will have @facebook.com listed as their emailDomain


**********************
If we want to assign an email address using our information from User:

User.prototype.getEmailAddress = function(){
    return this.firstName + this.lastName + this.emailDomain;
}

Now our User constructor function will have an email as well:
user1.getEmailAddress();
    JohnSmith@facebook.com

Prototypes are useful if we know that a certain piece of information will be required, but 
    we do not necessarily need the user to fill out the info
This is useful to keep the constructor functions from becoming too large