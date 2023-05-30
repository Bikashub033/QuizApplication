const questionText=document.querySelector(".question-text");
const optionBox=document.querySelector(".option-box");
const currentQuestionNum=document.querySelector(".current-question-num");
const answerDescription=document.querySelector(".answer-description");
const nextQuestionBtn=document.querySelector(".next-question-btn");
const correctAnswers=document.querySelector(".correct-answer");
const seeResultBtn=document.querySelector(".see-result-btn");
const remainingTime=document.querySelector(".remaining-time");
const timeUpText=document.querySelector(".time-up-text");
const quizHomeBox=document.querySelector(".quiz-home-box");
const quizBox=document.querySelector(".quiz-box");
const quizOverBox=document.querySelector(".quiz-over-box");
const startAgainQuizBtn=document.querySelector(".start-again-quiz-btn");
const goHomeBtn=document.querySelector(".go-home-btn");
const categoryBox=document.querySelector(".category-box");
const categoryText=document.querySelector(".category-text");
//const startQuizBtn=document.querySelector(".start-quiz-btn");
let attempt=0;
let questionIndex=0;
let score=0;
let number=0;
let myArray=[];
let interval;
let categoryIndex;
    //you cant add your category and questions
myApp=[
{
     category:"HTML",
     quizWrap:[ 
    {
    question:'HTML stands for',
    options:[
         'HighText Machine Language',
           ' HyperText and links Markup Language',
           'HyperText Markup Language',
           'None of these',
    ],
    answer:2,
    
   },
   {
    question:'The correct sequence of HTML tags for starting a webpage is',
    options:[
        ' Head, Title, HTML, body',
        ' HTML, Body, Title, Head',
        ' HTML, Head, Title, Body',
        ' HTML, Head, Title, Body',
        ],
    answer:3
   },
   {
    question:'What are the types of unordered or bulleted list in HTML?',
    options:[
         'disc, square, triangle',
        ' polygon, triangle, circle',
         'disc, circle, square',
         'All of the above',
    ],
    answer:2
   },
   {
    question:'Which of the following is the paragraph tag in HTML?',
    options:[
       ' <p>',
        '<b>',
        '<pre>',
        'None of the above',
    ],
    answer:0
   },
   {
    question:'A program in HTML can be rendered and read by',
    options:[
       ' Web browser',
        'Server',
        'Interpreter',
        'None of the above',        
    ],
    answer:0,
	
   },
   {
    question:' The tags in HTML are',
    options:[
        'case-sensitive',
        'in upper case',
        'not case sensitive',
        'in lowercase',

        ],
    answer:2
   },
   {
    question:'The <hr> tag in HTML is used for',
    options:[
        'new line',
        'vertical ruler',
        'new paragraph',
        'horizontal ruler',

    ],
    answer:3
   },
   {
    question:' HTML tags are enclosed in',
    options:[
        '# and #',
       '{ and }',
       '! and ?',
       '< and >',

    ],
    answer:3
   },
   {
    question:' Which of the following tag is used to add rows in the table?',
    options:[
          '<td> and </td>',
          '<th> and </th>',
         ' <tr> and </tr>',
         ' None of the above',

    ],
    answer:2,
	
   },
   {
    question:'What are the types of unordered or bulleted list in HTML? ',
    options:[
       ' disc, square, triangle',
        'polygon, triangle, circle',
        'disc, circle, square',
        'All of the above',

    ],
    answer:2
   },
   
  ]
},
    {
     category:"CSS",
     quizWrap:[ 
        {
    question:'CSS stands for -',
    options:[

        

         'Cascade style sheets',
          'Color and style sheets',
          'Cascading style sheets',
          'None of the above',
    ],
    answer:2
   },
   {
    question:'The CSS property used to control the element font size is -',
    options:[
         

        'text-style',
        'text-size',
        'font-size',
        'None of the above',

    ],
    answer:2
   },
   {
    question:' The HTML attribute used to define the inline styles is -',
    options:[
       

              'style',
              'styles',
              'class',
              'None of the above',

    ],
    answer:0
   },
   {
    question:'The CSS property used to make the text bold is -',
    options:[
       ' font-weight : bold',
       ' weight: bold',
       ' font: bold',
       ' style: bold',
    
        
    ],
    answer:0
   },
   {
    question:' Are the negative values allowed in padding property',
    
    options:[
       
           'Yes',
           'No',
           'Can not say',
           'May be',
    ],
    answer:1
   },
   {
    question:' The CSS property used to specify the transparency of an element is -',
    options:[
       

        'opacity',
       ' filter',
        'visibility',
        'overlay',
        
        ],
    answer:0
	
   },
   {
    question:' How to select the elements with the class name "example"?',
    options:[

       

         'example',
         '#example',
         '.example',
         'Class example',

    ],
    answer:2
   },
//    8
   {
    question:'  Which of the following is not a value of the font-variant property in CSS?',
    options:[

       

               'normal',
               'small-caps',
               'large-caps',
               'inherit',

    ],
    answer:2
   },
//    9
   {
    question:'  Which of the following is not a type of combinator?',
    options:[

       
       

        '>',
        '~',
        '+',
        '*',

    ],
    answer:3
   },
//    10
   {
    question:'   The correct syntax to give a line over text is -',
    options:[

       

      

       ' text-decoration: line-through',
        'text-decoration: none',
       ' text-decoration: overline',
        'text-decoration: underline',

    ],
    answer:2
   },
        ]
},
    {
     category:"Computer Awareness",
     quizWrap:[ 
     {
         question:"How many bytes are equal to one kilobyte?",
         options:["1050","1024","1022","1000"],
         answer:1
        },
        {
         question:"Which of the following is not an input device?",
         options:["answerboard","Monitor","Joystick","Microphone"],
         answer:1,
        },
        {
         question:"The most powerful computer is_________",
         options:["super computer","micro computer","mini computer","all of these"],
         answer:0
        },
        {
         question:"Which of the following memories needs refresh ?",
         options:["drom","rom","sram","all of these"],
         answer:0,
		
        }
        ,
        {
         question:"Every computer connected to the Internet is identified by a unique four-part string, known as",
         options:["IP address","Host name","Domain name","None of the above"],
         answer:0
        }
        ]
    },
    
     {
     category:"JAVASCRIPT",
     quizWrap:[ 
     {
    question:' Which type of JavaScript language is',
    
    options:[

    
     'Object-Oriented',
     'Object-Based',
     'Assembly-language',
     'High-leve',
    ],
    answer:1
   },
   {
    question:' When interpreter encounters an empty statements, what it will do:',
    options:[

        'Shows a warning',
        'Prompts to complete the statement',
        'Throws an error',
        'Ignores the statements',

    ],
    answer:3
   },
   {
    question:' The "function" and " var" are known as:',
    options:[

       

           'Keywords',
           'Data types',
           'Declaration statements',
           'Prototypes',
    ],
    answer:2
   },
   {
    question:' Which of the following type of a variable is volatile?',
    options:[

       

               ' Mutable variable',                
               'Dynamic variable' ,               
                'Volatile variable' ,               
                'Immutable variable',                
    ],
    answer:0
	
   },
   {
    question:' Which of the following option is used as hexadecimal literal beginning?',
    options:[

       

              '00',
              '0x',
              '0X',
              'Both 0x and 0X',
    ],
    answer:3
   }
         
        ]
    },
//    END QUESTION
   
 ]
function createCategory(){
   //console.log(myApp[1].category);
    for(let i=0; i<myApp.length; i++){
        categoryList=document.createElement("div");
        categoryList.innerHTML=myApp[i].category;
        categoryList.setAttribute("data-id",i);
        categoryList.setAttribute("onclick","selectCategory(this)");
        categoryBox.appendChild(categoryList)
    }
    
}
function selectCategory(ele){
    categoryIndex=ele.getAttribute("data-id");
    //console.log(categoryIndex)
    categoryText.innerHTML=myApp[categoryIndex].category;
    quizHomeBox.classList.remove("show");
    quizBox.classList.add("show");
    nextQuestion();
}
function load(){
    number++;
   questionText.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].question;
    creatOptions();
    scoreBoard();
    currentQuestionNum.innerHTML=number + " / " +myApp[categoryIndex].quizWrap.length;
}
function creatOptions(){
    optionBox.innerHTML="";
    let animationDelay=0.2;
    for(let i=0; i<myApp[categoryIndex].quizWrap[questionIndex].options.length; i++){
        const option=document.createElement("div");
              option.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].options[i];
              option.classList.add("option");
              option.id=i;
              option.style.animationDelay=animationDelay + "s";
              animationDelay=animationDelay+0.2;
              option.setAttribute("onclick","check(this)");
              optionBox.appendChild(option);
        
    }
}

function generateRandomQuestion(){
    const randomNumber=Math.floor(Math.random() * myApp[categoryIndex].quizWrap.length);
   let hitDuplicate=0;
   if(myArray.length == 0){
        questionIndex=randomNumber;
    }
    else{
        for(let i=0; i<myArray.length; i++){
            if(randomNumber == myArray[i]){
                //if duplicate found
                hitDuplicate=1;
                
            }
        }
        if(hitDuplicate == 1){
            generateRandomQuestion();
            return;
        }
        else{
            questionIndex=randomNumber;
        }
    }
    
    myArray.push(randomNumber);
    console.log(myArray)
    load();
}

function check(ele){
    const id=ele.id;
    if(id==myApp[categoryIndex].quizWrap[questionIndex].answer){
       ele.classList.add("correct");
        score++;
        scoreBoard();
    }
    else{
        ele.classList.add("wrong");
        //show correct option when clicked answer is wrong
        for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==myApp[categoryIndex].quizWrap[questionIndex].answer){
                optionBox.children[i].classList.add("show-correct");
            }
        }
    }
    attempt++;
    disableOptions()
    showAnswerDescription();
    showNextQuestionBtn();
    stopTimer();
    
    if(number == myApp[categoryIndex].quizWrap.length){
        quizOver();
    }
}
function timeIsUp(){
    showTimeUpText();
    //when time is up Show Correct Answer
    for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==myApp[categoryIndex].quizWrap[questionIndex].answer){
                optionBox.children[i].classList.add("show-correct");
                if(number == myApp[categoryIndex].quizWrap.length){
                    quizOver();
                  }
            }
        }
    disableOptions()
    showAnswerDescription();
    showNextQuestionBtn();
    if(number == myApp.length){
        quizOver();
      }
}
function startTimer(){
    let timeLimit=15;
    remainingTime.innerHTML=timeLimit;
    remainingTime.classList.remove("less-time");
    interval=setInterval(()=>{
      timeLimit--;
        if(timeLimit < 10){
            timeLimit="0"+timeLimit;
            
            }
            if(timeLimit < 6){
                remainingTime.classList.add("less-time");  
            }
            remainingTime.innerHTML=timeLimit;
            if(timeLimit == 0){
            clearInterval(interval);
            timeIsUp();
    }
    },1000)
}
function stopTimer(){
    clearInterval(interval);
}
function disableOptions(){
    for(let i=0; i<optionBox.children.length; i++){
        optionBox.children[i].classList.add("already-answered")
    }
}
function showAnswerDescription(){
    if(typeof myApp[categoryIndex].quizWrap[questionIndex].description !== 'undefined'){
        answerDescription.classList.add("show");
        answerDescription.innerHTML=myApp[categoryIndex].quizWrap[questionIndex].description;
    }
    
}
function hideAnswerDescription(){
    answerDescription.classList.remove("show");
    answerDescription.innerHTML="";
}

function showNextQuestionBtn(){
    nextQuestionBtn.classList.add("show");
}
function hideNextQuestionBtn(){
    nextQuestionBtn.classList.remove("show");
}
function showTimeUpText(){
    timeUpText.classList.add("show");
}
function hideTimeUpText(){
    timeUpText.classList.remove("show");
    
}
function scoreBoard(){
    correctAnswers.innerHTML=score;
}

nextQuestionBtn.addEventListener("click",nextQuestion);

function nextQuestion(){
   generateRandomQuestion();
    hideNextQuestionBtn();
    hideAnswerDescription();
    hideTimeUpText();
    startTimer();
}
function quizResult(){
    document.querySelector(".total-questions").innerHTML=myApp[categoryIndex].quizWrap.length;
    document.querySelector(".total-attempt").innerHTML=attempt;
    document.querySelector(".total-correct").innerHTML=score;
    document.querySelector(".total-wrong").innerHTML=attempt-score;
    const percentage=(score/myApp[categoryIndex].quizWrap.length)*100;
    document.querySelector(".percentage").innerHTML=percentage.toFixed(2) +"%";
}
function resetQuiz(){
  attempt=0;
  //questionIndex=0;
  score=0;
  number=0;
  myArray=[];
}

function quizOver(){
    nextQuestionBtn.classList.remove("show");
    seeResultBtn.classList.add("show");
}
seeResultBtn.addEventListener("click", ()=>{
    quizBox.classList.remove("show");
    seeResultBtn.classList.remove("show");
    quizOverBox.classList.add("show");
    quizResult();
     })

startAgainQuizBtn.addEventListener("click", ()=>{
    quizBox.classList.add("show");
    quizOverBox.classList.remove("show");
    resetQuiz();
    nextQuestion();
})

goHomeBtn.addEventListener("click", ()=>{
    quizOverBox.classList.remove("show");
    quizHomeBox.classList.add("show")
    resetQuiz();
})
  
//startQuizBtn.addEventListener("click", ()=>{
   // quizHomeBox.classList.remove("show");
   // quizBox.classList.add("show");
   // nextQuestion();
//})

window.onload=()=>{
    createCategory();
}