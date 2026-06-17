# what is variable
in Js variable is like a container that you store data,that container has a label and inside it it has contents.
example`let name = "tracy";`
let is the variable(container)
name (container lable)
"tracy" (what's inside the container)

# Declaring variables in js
two ways of declaring variables in Js

 1. let
 2. const
Example

    `let age = 20;`
    `const country = "kenya";`

# Rules for naming Variables

 - spaces not allowed in variables name.
 `let first name ="tracy";// bad`
  `let firstName ="tracy";//good`

 
 - Only letters, digits, underscores, and dollar signs are permitted in variable names.
 `let user-name ="mary";`
 `let userName2 ="mary";`
 `let $price =100;`
 ` let total_amount=50;`
 - Variables are case sensitive
 `username`
 `userName`
  even tho they look similar they are different variables,Js treats uppercase and lower case letters as different.
  
 
 - A letter (alphabet), an underscore (_), or a dollar sign ($) must be the first character in a variable name, any other special characters must not be taken.
 `let userName="john";`
  `let $price=100;`
 ` let _count=10;`
bad example -it cannot start with numbers
`let 1user="john";//error`


 - You cannot use reserved words in Js, such as let,function...
 `let let='"hello";//error`
 `let myLet="hello";//good`

 

# Ways of writing variables

 1. Pascal Case<Js>
 for pascal first letter for new word starts with a capital letter.
 `let FirstName ="tracy";`
 ` StudentAge`
 

 2. Camel Case<Js recommended>
 the first word starts with small letter then each next word starts with capital letter
 `let firstName="tracy";`
 `studentAge`
 3. Snake Case<Python>
 all letters are small with new words separated by underscore( _ )
 `let first_name ="tracy";`
 `student_age`

 

# summary

 - we learnt that variables that variables are containers use to store data and we cane use it later.
 - two ways of declaring variables ie, let &const.
 - we have rules for naming variables and ways for writing variables,camel case is recommended in js.


# Data types
we have two types

 - primitive
 - object
 
 ## Primitive data types
 Are most basic data types,we have;
 
 
 **- Number**
 this includes all number(integers and decimals)
 - string
 rep words ,we have 3 ways of writing strings
 `let  str1="double quotes i am tracy";`
 `let  str2='single quotes i am tracy';`
 let  str3=`back ticks i am tracy`;

 

 **- boolean**
 defines true or false

> `let  johnIsMale=true;`
> `console.log(johnIsMale);`
> `let  johnIsMarried=false;`
> `console.log(johnIsMarried);`

 
 **- undefined-**
 this means absence of value because it has not been assigned(you have declared a variable but have not assigned a value)
 

> `let a;`
> `console.log(a); //undefined`

 **- null**
 this is absence of value because the developer sets the variable to have no value
 

> `let b=null;`
> `console.log(b); //null`