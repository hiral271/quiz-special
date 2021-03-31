var buttonEl = document.getElementById('button');
var timerEl = document.getElementById('timer')
var wrongEl = document.querySelectorAll('.wrong')
var rightEl= document.querySelectorAll('.right')
var questionArr = document.querySelectorAll('.question');
var scoreDiv = document.getElementById('finalscored');
var highScoreDiv = document.querySelector('#highScoreDiv');
var highScoreListEl = document.getElementById('#list')
var userIn = document.getElementById('userIn');
var scoreButton = document.getElementById('scoreButton');
var bodyEl = document.querySelector('body');



highScoreDiv.style.display = "none";
scoreDiv.style.display = "none";
var currentQuestion = -1;



var rightAnswer = 10;
var wrongAnswer = 0;
let score = 0;
var time = 60;


//start button 
buttonEl.addEventListener('click', function() {
        buttonEl.style.display= "none";
        showQuestions();
   
        starttimer();
    
  
});
// providing time limit for quiz
  function  starttimer(){

timer = setInterval(()=> {

time--;

timerEl.textContent = time;
if(time <= 0){

clearInterval(timer);
alert("TIMES UPP!!!!");

}
},1000);

};

//creating question array function
questionArr.forEach(function (element) {
  element.style.display = "none";
});



//function for each right answer for questions
rightEl.forEach(function(element){

  element.addEventListener("click",rightAns)

});

//function for each wrong answer of questions
wrongEl.forEach(function(element){

element.addEventListener("click",wrongAns)

});

//function for showing question one by one 

function  showQuestions(){

  if(currentQuestion >= 0){
    questionArr[currentQuestion].style.display = "none";
  }
   if (currentQuestion < questionArr.length - 1){
     currentQuestion++;
     questionArr[currentQuestion].style.display = "block";
   }
    else{
      console.log("rightAnswer,wrongAnswer",rightAnswer,wrongAnswer)
      clearInterval(timer)
       displayScore();

    }


}
// function define score with right and wrong selection
function wrongAns(){ 

      wrongAnswer++;
      time = time - 10 ;
showQuestions();

}

function rightAns(){

  rightAnswer++
  showQuestions()


}
//function for score 
 function   displayScore(){

     scoreDiv.style.display = "block";
     document.getElementById('userscore').innerHTML = "score =" + rightAnswer;
 }
  
 function savedScore(highScore){
    
  highScoreDiv.style.display = "block";
  localStorage.setItem("previousScore",JSON.stringify(highScore));

 }
//ading score to localstorage
 scoreButton.addEventListener('click',function(){

 highScoreDiv.innerHTML = '';
 var counter = 0;
 var user = userIn.value;
 var highScore = JSON.parse(localStorage.getItem('previusScores')) || []
 highScore.push({
     userIn : user,
     score : rightAnswer

 })

  savedScore(highScore);
  scoreDiv.style.display = "none";
  highScoreDiv.style.display = "block";
  console.log(highScore);

  for(let i = highScore.length - 1; i >= 0; i--){

     if(counter===10){
        return;

     }


    
  }

   
  
   document.write('<h1>' + "your high score is " + (highScore[0].score) + "</br> "  +"your name is " + (highScore[0].userIn) + '</h1>')
    
  
  
  

 })

 

console.log(JSON.parse(window.localStorage.getItem(userIn,score)));



















// wrongEl.addEventListener('click',function(){
// wrongAnswer++;
// time = time - 10


// });


// rightAnEl.addEventListener('click',function(){
// rightAnswer++;









































// function updateTime() {
//   // decrement time
//   time--;
// ​
//   // display time to web page with timer DOM element textContent
//   timerEl.textContent = time;

//   // check if user ran out of time (time <= 0)
//   // call quizEnd function if true
//   if (time <= 0) {
//     quizEnd();
//   }
// }












// next1El.addEventListener('click',function(){
//     let p = document.getElementById('displayquestion');
//     displayquestion2.removeAttribute("hidden");
//      displayquestion.removeAttribute('visible')
// })





