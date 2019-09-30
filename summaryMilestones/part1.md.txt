## 'use strict'
This is put at the beggining of the code to mean modern version 
## Data types
Javascript is "dynamically typed", meaning that there are data types but variables are not bound to any of them.
There basically seven data types
1. numbers (integers and floating point numbers,Infinity, NaN)
2. Strings, we use " ", '', `backticks`
  Nb: backticks enable embedding of variables or expressions inside strings 
### example 
let name = "World";
alert(`hello, ${name}`);
3. Boolean: true or false
4. null: means nothing
5.undifined: it indicates no value assigned
6. object: used to store collections of data and more complex entities
7. Symbol for unique identifiers
typeof: returns the type of operator

## Data convertions
Js generally converts data automatically
### example 
alert("10" / "5") // 2 will be the answer
We simply use the data type name and then brackets
### example
 let age = "50";
 age = Number(age);

