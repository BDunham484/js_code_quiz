//create variabels
var quizEl = document.querySelector("#quiz");
var quizContentEl = document.querySelector("#quiz-content");
var buttonsEl = document.querySelector("#buttons");
var timerEl = document.querySelector("#time-left");
var responseEl = document.querySelector("#response");
var formEl = document.querySelector("#high-score-form")
//create variable to iterate through questions
var questionCounter = 1;
var timeLeft = 60;
var points = 0;

//create global variables for all of the list items
var listItemA = document.createElement("li");
var listItemB = document.createElement("li");
var listItemC = document.createElement("li");
var listItemD = document.createElement("li");
//create global variables for all the answer buttons
var firstButton = document.createElement("button");
var secondButton = document.createElement("button");
var thirdButton = document.createElement("button");
var fourthButton = document.createElement("button");




//create an array of questions for the quiz
var quizArr = [
    {
        heading: "Javascript Coding Quiz",
        description: "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds!",
        startButton: "Start Quiz!"
        
    },
    {
        question: "1. Which function is used to serialize an object into a JSON string in Javascript?",
        answerA: "stringify()",
        answerB: "parse()",
        answerC: "serial()",
        answerD: "convert()"
    },
    {
        question: "2. What are variables used for in Javascript",
        answerA: "Causing high-school flashbacks",
        answerB: "Varying randomly",
        answerC: "Storing numers, dates, or other values",
        answerD: "None of the above"
    },
    {
        question: "3. What is the best practice for naming Javascript variables?",
        answerA: "thisOne",
        answerB: "NoThisOne",
        answerC: "Prettysurethisisit",
        answerD: "how-about-this"
    },
    {
        question: "4. ________ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        answerA: "<title>",
        answerB: "<body>",
        answerC: "<head>",
        answerD: "<script>"
    },
    {
        question: "5. What is the correct syntax for a JavaScript Array?",
        answerA: "var arr = ['abcd']",
        answerB: "var arr = ('a', 'b', 'c')",
        answerC: "var arr = ['a', 'b', 'c']", 
        answerD: "var arr = (a), (b), (c)"
    },
    {
        question: "6. Using an _______ statement is how you test for a specific condition",
        answerA: "Select",
        answerB: "If",
        answerC: "Object",
        answerD: "For"
    },
    {
        question: "7. What is meant by the 'this' keyword in javascript",
        answerA: "It refers to the current object",
        answerB: "It refers to the previuos object",
        answerC: "It is a variable which contains the value",
        answerD: "None of the above"
    },
    {
        question: "8. Which JavaScript method is used to access an HTML element by ID?",
        answerA: "querySelector",
        answerB: "getElement(ID)",
        answerC: "getElementById(id)",
        answerD: "className"
    },
    {
        question: "9. Which property is used to define the HTML content to an HTML element with a specific Id?",
        answerA: "innerText",
        answerB: "innerContent",
        answerC: "elementText",
        answerD: "innerHTML"
    },
    {
        question: "10. Which JavaScript method is used to write on the browser's console?",
        answerA: "console.write()",
        answerB: "console.output()",
        answerC: "console.log()",
        answerD: "console.writeHTML()"
    }
]





//create the initial screen content to start the quiz
//the heading
responseEl.remove();
var quizTitleEl = document.createElement("h2");
quizTitleEl.className = "quiz-title";
quizTitleEl.textContent = quizArr[0].heading;
quiz.appendChild(quizTitleEl);
//the description
var quizDescriptionEl = document.createElement("p");
quizDescriptionEl.className = "description";
quizDescriptionEl.textContent = quizArr[0].description
quiz.appendChild(quizDescriptionEl);
//the start button
var startButtonEl = document.createElement("button");
startButtonEl.className = "btns";
startButtonEl.textContent = quizArr[0].startButton;
quiz.appendChild(startButtonEl);





//function to start the quiz once the startbutton has been clicked
var startQuiz = function() {
    //remove initial screen contents
    quizTitleEl.remove();
    quizDescriptionEl.remove();
    startButtonEl.remove();
    //start timer
    startTimer(timeLeft);
    questions();
}




//function to display questions and listen for answer clicks
var questions = function() {
     //display questions
     quizContentEl.className = "description";
     quizContentEl.textContent = quizArr[questionCounter].question;
     //display answer buttons
     //first list item
     // var listItemA = document.createElement("li");
     listItemA.id = "list-item-a";
     listItemA.className = "answers";
     buttonsEl.appendChild(listItemA);
     ///first button
     // var firstButton = document.createElement("button");
     firstButton.id = "firstClick"
     firstButton.className = "btns";
     firstButton.textContent = quizArr[questionCounter].answerA;
     listItemA.appendChild(firstButton);
 
     //second list item
     // var listItemB = document.createElement("li");
     listItemB.id = "list-item-b";
     listItemB.className = "answers";
     buttonsEl.appendChild(listItemB);
     //second button
     // var secondButton = document.createElement("button");
     secondButton.className = "btns";
     secondButton.textContent = quizArr[questionCounter].answerB;
     listItemB.appendChild(secondButton);
 
     //third list item
     // var listItemC = document.createElement("li");
     listItemC.id = "list-item-c";
     listItemC.className = "answers";
     buttonsEl.appendChild(listItemC);
     //third button
     // var thirdButton = document.createElement("button");
     thirdButton.className = "btns";
     thirdButton.textContent = quizArr[questionCounter].answerC;
     listItemC.appendChild(thirdButton);
 
     //fourth list item
     // var listItemD = document.createElement("li");
     listItemD.id = "list-item-d";
     listItemD.className = "answers";
     buttonsEl.appendChild(listItemD);
     //fourth button
     // var fourthButton = document.createElement("button");
     fourthButton.className = "btns";
     fourthButton.textContent = quizArr[questionCounter].answerD;
     listItemD.appendChild(fourthButton);
    //create event listeners for all of the answer buttons
    listItemA.onclick = function() {
        // debugger;
        if ( quizContentEl.textContent === quizArr[1].question) {
            points += 5
            responseEl.textContent = "Correct!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[2].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl)        
        } else if ( quizContentEl.textContent === quizArr[3].question) {
            points += 5
            responseEl.textContent = "Correct!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[4].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[5].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[6].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[7].question) {
            points += 5
            responseEl.textContent = "Correct!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[8].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[9].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[10].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        }
    };
    listItemA.addEventListener("click", nextQuestion);



    
    listItemB.onclick = function() {
        if ( quizContentEl.textContent === quizArr[1].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[2].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl)        
        } else if ( quizContentEl.textContent === quizArr[3].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[4].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[5].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[6].question) {
            points += 5
            responseEl.textContent = "Correct!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[7].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[8].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[9].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[10].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        }
    };
    listItemB.addEventListener("click", nextQuestion);





    
    listItemC.onclick = function() {
        // debugger
        if ( quizContentEl.textContent === quizArr[1].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[2].question) {
            points += 5
            responseEl.textContent = "Correct!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl)       
        } else if ( quizContentEl.textContent === quizArr[3].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[4].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[5].question) {
            points += 5
            responseEl.textContent = "Correct!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[6].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[7].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[8].question) {
            points += 5
            responseEl.textContent = "Correct!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[9].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[10].question) {
            points += 5
            responseEl.textContent = "Correct!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        }
    };
    listItemC.addEventListener("click", nextQuestion);





    
    listItemD.onclick = function() {
        if ( quizContentEl.textContent === quizArr[1].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[2].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl)        
        } else if ( quizContentEl.textContent === quizArr[3].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[4].question) {
            points += 5
            responseEl.textContent = "Correct!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[5].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[6].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[7].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[8].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[9].question) {
            points += 5
            responseEl.textContent = "Correct!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        } else if ( quizContentEl.textContent === quizArr[10].question) {
            timeLeft = timeLeft - 10;
            responseEl.textContent = "Wrong Answer!";
            responseEl.className = "answer";
            buttonsEl.appendChild(responseEl);
        }
    };
    listItemD.addEventListener("click", nextQuestion);
}
   




//function to initiate timer
var startTimer = function(timeLeft) {  
    var timer = setInterval(function() {
        // debugger;
        if (timeLeft > 0 && questionCounter <= (quizArr.length-1)) {
            timerEl.textContent = timeLeft;
            timeLeft--;
            if (responseEl.textContent === "Wrong Answer!") {
                timeLeft-=10;
            }
        } else {
        stopTimer(timer);
        endQuiz();
        highScoreForm();
        }
    }, 1000);
}





//function to stop timer
var stopTimer = function(timer) {
    timeLeft = 0;
    clearInterval(timer);
    timerEl.textContent = "--";
}





 //function cycle to next question and re-run questions() if there are any questions left.  If not, run endQuiz()
 var nextQuestion = function() {
     firstButton.remove();
     secondButton.remove();
     thirdButton.remove();
     fourthButton.remove();
    if (questionCounter >= (quizArr.length-1)) {
        endQuiz();
    }  else {
        questionCounter++ 
        //next question
        questions();
    }  
}




//funciton to end the quiz
var endQuiz = function() {
    quizContentEl.textContent = "All Done!";
    listItemA.remove();
    listItemB.remove();
    listItemC.remove();
    listItemD.remove();
    questionCounter = 11;
}





//function to create high score submission form and to capture and save high score
var highScoreForm = function() {
    //display final score
    responseEl.textContent = "Your final score is " + points + ".";
    //create and display input field for high score
    var labelEl = document.createElement("label");
    labelEl.setAttribute("for", "name");
    labelEl.id = "enter-initials";
    labelEl.textContent = "Enter Initials: ";
    formEl.appendChild(labelEl);

    var inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    inputEl.setAttribute("name", "name");
    inputEl.id = "name";
    formEl.appendChild(inputEl)
    //create and display submit button for input field
    var submitEl = document.createElement("button");
    submitEl.setAttribute("type", "submit");
    submitEl.className = "btns";
    submitEl.id = "submitBtn";
    submitEl.textContent = "Submit";
    formEl.appendChild(submitEl);

    //capture the input and save initials and high score to local storage
    formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    //capture the input in an variable
    var inputInitials = document.querySelector("input[name='name']").value;
    //create high score array
    var highScoreArr = [];
    //create high score object 
    var highScoreObj = {
    initials: inputInitials,
    score: points
    };
    //retrieve current high score and save to variables
    var highScore = localStorage.getItem("high-score");
    highScore = JSON.parse(highScore);
    if (!highScore) {
        initials = "";
        highScore = 0;
    } else {
        initials = highScore.initials
        highScore = highScore.score
    }
    //compare current score to high score and save to local storage if true
    if (points > highScore) {
        //push object to array
        highScoreArr.push(highScoreObj);
        //save high score to local storage
        localStorage.setItem("high-score", JSON.stringify(highScoreArr[0]));
        var highScore = localStorage.getItem("high-score");
        highScore = JSON.parse(highScore);
        initials = highScore.initials
        highScore = highScore.score
    }
    
    //call the highScorePage function
    highScorePage(initials, highScore);
    });   
}





//create function to display high score page
var highScorePage = function(initials, highScore) {
    //clear and update previous content
    firstButton.remove();
    secondButton.remove();
    thirdButton.remove();
    fourthButton.remove();
    quizContentEl.textContent = "Current High Score";
    responseEl.textContent ="The Champ: " + initials + " - " + highScore;
    formEl.remove();
    //create try again and clear scores buttons
    buttonsEl.appendChild(listItemA);
    var goBackBtn = document.createElement("button");
    goBackBtn.textContent = "Try Again";
    goBackBtn.className = "btns";
    listItemA.appendChild(goBackBtn);
    

    buttonsEl.appendChild(listItemB);
    var clearScoreBtn = document.createElement("button");
    clearScoreBtn.textContent = "Clear High Score";
    clearScoreBtn.className = "btns";
    listItemB.appendChild(clearScoreBtn);
    //reload quiz on go back button click
    goBackBtn.addEventListener("click", function() {
        window.location.reload(true);
    });

    clearScoreBtn.addEventListener("click", function() {
        localStorage.clear();
        window.location.reload(true);
    });
}





//event listener to listen for the start button being clicked to begin quiz
startButtonEl.addEventListener("click", startQuiz);






