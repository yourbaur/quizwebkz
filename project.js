(function() {
    const myQuestions = [
      {
        question: "Информатика",
        answers: "Ақпараттық үдерістерді зерттейтін, ақпаратты алу, түрлендіру, жинақтау, сақтау, жөнелту және пайдалану тәсілдері туралы ғылым"
      },
      {
        question: "Мәтіндік ақпарат",
        answers: "Компьютерлік алфавит символдарының қандай да бір тізбегі"
      },
      {
        question: "Бит",
        answers: "Екілік таңба, ақпараттың ең кіші өлшем бірлігі"

      },
      {
        question: "Мәтіндік хабардың ақпараттық көлемі",
        answers: "Хабардың ұзындығы, яғни, символдар саны"

      },
      {
        question: "Ақпаратты жеткізу жылдамдығы",
        answers: "Бір уақыт бірлігінде жөнелтілетін ақпарат саны"
      },
      {
        question: "JPEG",
        answers:"16 миллион түсті көтере алады және олардың ашықтығын және фотографиялардағы жолақтарын сақтай алады."

      },
      {
        question: "Алгоритм",
        answers: "бастапқы берілген мәліметтермен бір мәнде анықталатын нәтиже алу үшін қай амалды (жұмысты) қандай ретпен орындау қажеттігін белгілейтін есептерді (мәселелерді) шешу (математикалық есеп-қисаптар орындау, техникалық объектілерді жобалау, ғылыми-зерттеу жұмысын жүргізу т.б.) тәсілдерінің дәл сипаттамасы."

      },
      {
        question: "Компьютер",
        answers: "Компьютер (ағылш. computer — «есептегіш»)Есептеулерді жүргізуге, және ақпаратты алдын ала белгіленген алгоритм бойынша қабылдау, қайта өңдеу, сақтау және нәтиже шығару үшін арналған машина. Компьютер дәуірінің бастапқы кезеңдерінде компьютердің негізгі қызметі — есептеу деп саналатын. Қазіргі кезде олардың негізгі қызметі — басқару болып табылады."

      },
      {
        question: "Тышқан",
        answers: "Тышқан (ағылш. mouse — тышқан)Бейнебетте көрсетілген белгілі бір тілдесу элементтерін меңзеп, оларды бөлектеу үшін пайдаланушы қолданатын құрылғы"

      },
      {
        question: "Принтер",
        answers: "Мәтіндік не графиктік ақпаратты қағазға, пластикке шығаруға арналған құрылғы, ЭЕМ-ның ақпарат басып шығаруға арналған перифериялық құрылғыларының бір түрі."
      }
    ];

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
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
          <div class="flip-card">
           <div class="flip-card-inner">
             <div class="flip-card-front">
             ${currentQuestion.question}
             </div>
             <div class="flip-card-back">
             ${answers.join("")}
             </div>
           </div>
         </div>
         </div>`
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



      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;

      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }

      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }

    function showNextSlide() {
      showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
