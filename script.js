let score = 0;
let points = 10;

let question = document.body .childNodes; //list of a questions
let questionIterrator = 1;

function correct(button){
    score+=10; //add 10 to score
    button.style.backgroundColor = 'green';
    let parent = button.parentNode;
    let siblings = parent.childNodes; //list of buttons (answers)
    siblings.forEach(element => {
        element.disabled = true; //disabling
    });
    questionIterrator+=2;
    question[questionIterrator].scrollintoview({
        behavior: "smooth" , 
        block: "end" ,
        inline: "nearest"
    });
}
function incorrect(button){
   button.style.backgroundColor = 'red';
   let parent = button.parentNode;
    let siblings = parent.childNodes; //list of buttons (answers)
    siblings.forEach(element => {
        element.disabled = true; //disabling
    });
    questionIterrator+=2;
    question[questionIterrator].scrollintoview({
        behavior: "smooth" , 
        block: "end" ,
        inline: "nearest"
    });
}
function calculateScore(button){
    button.innerHTML = "Score: " + score;
}
