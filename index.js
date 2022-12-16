async function loadChengyu() {
  response = await fetch('chengyu-parsed.json');
  ret = await response.json();
  return ret;
}

function randomItem(items) {
  return items[Math.floor(Math.random()*items.length)];
}

function genQuestion(chengyu) {
  answers = [];
  while (answers.length < 4) {
    randomAnswer = randomItem(chengyu);
    if (!answers.includes(randomAnswer)) {
      answers.push(randomAnswer);
    }
  }
  return answers;
}

function onCorrectAnswer() {
  score += 1;
  displayNextQuestion();
}

function onWrongAnswer() {
  alert('Wrong! The right answer was: ' + correctAnswer[1]);
  displayNextQuestion();
}

function buildQuestionHTML(question, body) {
  correctAnswer = randomItem(question);
  html = correctAnswer[0] + '<br><ol>';
  for (i=0; i<question.length; i++) {
    html += '<li><button onclick="';
    if (question[i] == correctAnswer) {
      html += 'onCorrectAnswer()">' + question[i][1] + '</button></li>';
    } else {
      html += 'onWrongAnswer()">' + question[i][1] + '</button></li>';
    }
  }
  return html + '</ol>';
}

async function displayNextQuestion() {
  chengyu = await loadChengyu();
  question = genQuestion(chengyu);
  body = document.getElementById('body');
  questionHTML = buildQuestionHTML(question, body);
  body.innerHTML = 'Score: ' + score + '<br>' + questionHTML;
}
score = 0;
displayNextQuestion();
