const prev = document.getElementById("next");
const next = document.getElementById("prev");
const enable = document.getElementById("container1");
const question = document.getElementById("q");
const answer = document.getElementById("Answer");

let runningCard = 0;
let cards = [{
 question:"What does CSS stand for?",
 answer:"Cascading Style Sheets"},
 {
  question:"HTML",
  answer:"HyperText Markup Language"
}, {
  question:"JS",
  answer:"JavaScript"
}, {
  question:"WWW",
  answer:"World Wide Web"
}
]

const lastCard = cards.length-1 ;
function openCard(){
  if (answer.style.display == "none"){
      question.style.display = "none";
      answer.style.display = "block";
}
  else {
      question.style.display = "block";
      answer.style.display = "none";
  }
}
function change() {
  if (answer.style.display=="block") {
    question.style.display = "block";
    answer.style.display = "none";
  }

}
function nextCard(){
  if (runningCard<lastCard) {
    runningCard++;
    let q = cards[runningCard];
    question.innerHTML = q.question;
    answer.innerHTML = q.answer;
  }
  change();
}
function prevCard() {
  if (runningCard>0) {
    runningCard--;
    let q = cards[runningCard];
    question.innerHTML = q.question;
    answer.innerHTML = q.answer;

  }
  change();
}
enable.addEventListener("click",openCard);
next.addEventListener("click",nextCard);
prev.addEventListener("click", prevCard);
