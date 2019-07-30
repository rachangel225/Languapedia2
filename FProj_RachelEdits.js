function translateThis(){

  var text = document.getElementById("translate").value;
  var query = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190724T184317Z.51d2ebbd65041ccb.a5b00361d90de26de1863bb0f53747718f06b9c9&text=" + text + "&lang=zh";
  query = query.replace(/ /g, '%20');

  var translationRequest= new XMLHttpRequest();
  translationRequest.open("GET", query, false);

  translationRequest.send();

  if(translationRequest.readyState != 4 || translationRequest.status != 200 || translationRequest.responseText ===''){
    window.console.error('Request had an error');
    return;
  }

  var translationInfo = JSON.parse(translationRequest.responseText);

  var translated = translationInfo.text[0];

  var person = ("Chinese translation: " + translate);
  if (person != null) {
    document.getElementById("demo").innerHTML = "Chinese translation: " + translated ;
  }
}


function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();












(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }


  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "What is 'I don't understand' in Mandarin?",
      answers: {
        a: "我五岁了",
        b: "再见",
        c: "我听不懂"
      },
      correctAnswer: "c"
    },
    {
      question: "What is 'I' in Mandarin",
      answers: {
        a: "我",
        b: "你",
        c: "不"
      },
      correctAnswer: "a"
    },
    {
      question: "What is 'I'm sorry' in Mandarin?",
      answers: {
        a: "对不起",
        b: "谢谢",
        c: "你好",
      },
      correctAnswer: "a"
    }
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
