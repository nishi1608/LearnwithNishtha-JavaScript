/*Operators in Java Script*/
console.log("--------------------Arthematic Operators------------------");
let a = 100 , b = 20;
console.log("Addition is "+a+b); // It will concatenate a and b , so output is 20100
console.log("Addiiton is"+(a+b)); // It will add a and b , so outpout is 30
console.log("Substraction is "+(a-b)); // It will substract a and b
console.log("Multiplication is "+(a*b)); // It will multiply a and b
console.log("Division is "+(a/b)); // It will divide a and b and gives quotient
console.log("Reminder is "+(a%b)); // It will give reminder
console.log(190/0); // JS will give output 'Infinity' instead of throwing arthematic exception like JAVA
console.log(-190/0); // JS will give output '-Infinity' instead of throwing arthematic exception like JAVA
console.log("Hi"/90); // JS will give output 'NaN' (Not a number) instead of throwing arthematic exception like JAVA
console.log("Hello"/"Hi"); // JS will give output 'NaN' (Not a number) instead of throwing arthematic exception like JAVA
console.log(undefined/99); // JS will give output 'NaN' (Not a number) instead of throwing arthematic exception like JAVA
console.log(0/0); // NaN No meaning of this operation
console.log("--------------------IsNaN()------------------"); //isNaN(): is value not a number , This function returns boolean value.
console.log(isNaN("Kay")); //Output will be true
console.log(isNaN(1000)); //Output will be false
console.log("--------------------Unary Operators---------------------------------");
console.log("--------------------(++a): Pre increment Unary Operator :It will increment first then value will be assigned -------------")
let a1=100;
console.log("Value of 'a1' before pre increment "+a1);//Output will be 100
console.log("Value of 'a1' after pre increment "+(++a1)); //Output will be 101
console.log("--------------------(a++): Post increment Unary Operator : Value will be assigned first then it will increment -------------")
let b1=100;
console.log("Value of 'b1' "+b1);//Output will be 100
console.log("Value of 'b1' before post increment "+(b1++)); //Output will be 100
console.log("Value of 'b1' after post increment "+b1); //Output will be 101
let c=500;
let d=c++; // Since It is Post Operator, Value will be intialized first then it will increment.
console.log("Value of c "+c);
console.log("Value of d "+d);
let x=100;
let y=++x; // Since It is Pre Operator,Value will be increment first then it will be intialized.
console.log("Value of x "+x); 
console.log("Value of y "+y);
console.log("--------------------(a--): Post decrement Unary Operator : Value will be assigned first then it will decrement -------------")
let a2=100;
console.log("Value of a2 "+a2); // Output will be 100, Since we are printing before any operation.
console.log("Value of a2 "+(a2--)); // Output will be 100, Since It is Post Decrement Operator, Value will be intialized first then it will decrement.
console.log("Value of a2 "+a2); //Output will be 99, Since It is Post Decremented in previous step
console.log("--------------------(--a): Pre decrement Unary Operator : Value will be assigned first then it will decrement -------------")
let b2=110;
console.log("Value of b2 "+b2); // Output will be 110, Since we are printing before any operation.
console.log("Value of b2 "+(--b2)); // Output will be 109, Since It is Pre Decrement Operator, Value will be decrement first then it will be intialized.
console.log("Value of b2 "+b2); //Output will be 109, Since It is Post Decremented in previous step
console.log("More examples of Post and Pre Decrement")
let u=120;
let v=u--;
console.log("Value of u "+u); // output will be 119
console.log("Value of v "+v); // output will be 120
let r=100;
let s=--r;
console.log("Value of r "+r); // output will be 99
console.log("Value of s "+s); //output will be 99
console.log("-----------------------------Relational operators (>,<,<=,>=,!)-----------------------------");

console.log("-----------------------------Relational operators (>=:greater than equal to )-----------------------------");
let marks = 75;
let passingMarks = 60;
console.log(marks >= passingMarks); // true → 75 is greater than or equal to 60
console.log(passingMarks >= 75);    // false
console.log("-----------------------------Relational operators (<=:less than equal to )-----------------------------");
let timeTaken = 45;
let maxTime = 45;
console.log(timeTaken <= maxTime); // true → 45 is equal to 45
console.log(timeTaken <= 30);      // false → 45 is not less than 30
console.log("-----------------------------Loose equality (type conversion happens)-----------------------------");
let val3 = 10;
let val4 = "10";
console.log(val3 != val4); // false → converts type, both are 10 
console.log("Since == refers to Loose Equality, then 'undefined==null' will return: ", undefined==null);
console.log("-----------------------------Strict equality (no type conversion)-----------------------------");
let val5 = 10;
let val6 = "10";
console.log(val5 !== val6); // false → converts type, both are 10 
console.log("Since === refers to Strict Equality, then 'undefined===null' will return:", undefined === null);
console.log("-----------------------------Relational operators (!=:not equal to ) : loose comparison-----------------------------");
let val7 = 10;
let val8 = 10;
console.log(val7 != val8); // false → converts type, both are 10 
console.log("-----------------------------Relational operators (!==:Strict not equal to ) : no type conversion-----------------------------");
let val9 = 10;
let val10 = "10";
console.log(val9 !== val10); // true → different data types
console.log(val9 !== 10);   // false → same value and type
console.log("Logical Operators");
/*

c1            c2           &&(AND)         ||(OR)          !(NOT)!c1

true        true            true            true            false
true        false           false           true            false
false       true            false           true            true
false       false           false           false            true

*/
//test data: r=s=76   u=119 v=120 c=877 x=y=68

console.log("-------&&--------");
console.log((c>u) && (x===y));//true
console.log((r===s) && (u>v));//false
console.log((c<v) && (r===s));//false
console.log((c<u) && (r!=s));//false


console.log("-------||--------");
console.log((c>u) || (x===y));//true
console.log((r===s) || (u>v));//true
console.log((c<v) || (r===s));//true
console.log((c<u) || (r!=s));//false


console.log("------!NOT------");
console.log(x===y);//true
console.log(!(x===y));//false
console.log(c<u);//false
console.log(!(c<u));//true
console.log((c>u) && !(c>u));//false
console.log((c>u) || !(c>u));//true