'use strict';
// lab 5
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

if(!welcom){
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
// lab 6
function checkAnswers(specificAnswer,repeateQuestions){
    specificAnswer=specificAnswer.toLocaleLowerCase();
    specificAnswer=specificAnswer.trim();
    if(specificAnswer===null || specificAnswer==""){
        allAnswers.push("invalid answer");
    }
    else if (specificAnswer=="yes" || specificAnswer=="no"){
        allAnswers.push(specificAnswer);
    }
    else{
        let validAnswers=prompt("Please just type yes or no to answer the questions\n"+repeateQuestions);
        checkAnswers(validAnswers,repeateQuestions);
    }
}

function askQuestions(que){
    for(let i=0;i<que.length;i++){
        let answer= prompt("Please answer with yes or no only \n "+que[i]);
        checkAnswers(answer,que[i])
    }
}

function questionsWithAnswers(allQuestions,allAnswers){
    for(let i=0;i<allQuestions.length;i++){
        console.log(allAnswers[i]);
    }
}

// Main code
const allQuestions= ["Do you have previous experience or projects in web development?",
"Do you prefer Telecommuting?","Do you have a laptop with high specifications?"];
const allAnswers=[];
askQuestions(allQuestions);
questionsWithAnswers(allQuestions,allAnswers);