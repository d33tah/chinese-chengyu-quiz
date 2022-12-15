async function load_chengyu() {
    response = await fetch('chengyu-parsed.json');
    ret = await response.json();
    return ret
}

function random_item(items) {
    return items[Math.floor(Math.random()*items.length)];
}

function gen_question(chengyu) {
    answers = [];
    while (answers.length < 4) {
        random_answer = random_item(chengyu);
        if (!answers.includes(random_answer)) {
            answers.push(random_answer);
        }
    }
    return answers;
}

function on_correct_answer() {
    score += 1
    display_next_question()
}

function on_wrong_answer() {
    alert('Wrong! The right answer was: ' + correct_answer[1]);
    display_next_question()
}

function build_question_html(question, body) {
    correct_answer = random_item(question);
    html = correct_answer[0] + '<br><ol>';
    for(i=0; i<question.length; i++) {
        if (question[i] == correct_answer) {
            html += '<li><button onclick="on_correct_answer()">' + question[i][1] + '</button></li>'
        }
        else {
            html += '<li><button onclick="on_wrong_answer()">' + question[i][1] + '</button></li>'
        }
    }
    return html + '</ol>'
}

async function display_next_question(){
    chengyu = await load_chengyu()
    question = gen_question(chengyu);
    body = document.getElementById('body');
    question_html = build_question_html(question, body);
    body.innerHTML = 'Score: ' + score + '<br>' + question_html;
}
score = 0;
display_next_question();
