'use strict';
var userName;
var gender;
var age;
var welcom;
userName = prompt("Please inter your name");
gender=prompt("Enter your gender");
age=prompt("If you don't mind enter your age ..");
while (age<=0){
    age=prompt("Your age shoudn't be less than or equal 0");
}
welcom=confirm("Did you need to skip welcom message? ");
console.log(welcom);

if(!welcom){
    console.log(gender);
    if(gender.toLocaleUpperCase() == "MALE"){
        alert("Mr "+userName+" welcome in our website" );
    }
    else if(gender.toLocaleUpperCase() == "FEMALE"){
        alert("Ms "+userName+" welcome in our website" );
    }
    else{
        alert("Welcome in our website" );
    }
}
