/*JavaScript has 8 main data types, divided into primitive and non-primitive categories. 
These types define how values are stored, accessed, and manipulated in your code.*/

//1.Number
console.log("-----------Number----------");
console.log("JavaScript has 8 main data types, divided into primitive and non-primitive categories.");
console.log("Primitive data type : 1. Number");
let num=1;
console.log("num is"+num); //1
console.log(typeof(num));  //number

//2.String
console.log("-----------String----------");
console.log("Primitive data type : 2. String");
console.log("String can be defined in 3 ways");
console.log("1. Using Single Quotes");
let userName='Nishtha';
console.log("User name is "+userName);// User name is Nishtha
console.log(typeof(userName));  //string
let gender='F';
console.log("Gender is "+gender); 
console.log(typeof gender);//a letter inside single quotes considered as a string instead of character, that is why its type is string
console.log("2. Using Double Quotes");
let surName='Jain';
console.log("User's  surname is "+surName);// User's surname is Jain
console.log(typeof(surName));  //string
console.log("3. Using Template Strings");
let profileInfo=`Hi My name is Nishtha Jain,
A Software QA and CMS Specialist with 11+ years of experience in manual
testing, automation testing and team management.`;
console.log("Profile info is",profileInfo);
console.log(typeof(profileInfo));




