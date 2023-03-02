'use strict';
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
        console.log(allQuestions[i]+" "+allAnswers[i]);
    }
}

// Main code
const allQuestions= ["Do you have previous experience or projects in web development?",
"Do you prefer Telecommuting?","Do you have a laptop with high specifications?"];
const allAnswers=[];
askQuestions(allQuestions);
questionsWithAnswers(allQuestions,allAnswers);