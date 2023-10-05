let score = 0;
const totalQuestions = 2;
const correctAnswers = ['Green', 'BJP'];

function checkAnswer(questionNumber) {
    const selectedOption = document.querySelector(`input[name="q${questionNumber}"]:checked`);
    if (!selectedOption) {
        alert('Please select an answer.');
        return;
    }

    const selectedValue = selectedOption.value;

    if (selectedValue === correctAnswers[questionNumber - 1]) {
        score++;
        if (questionNumber < totalQuestions) {
            document.getElementById(`question-${questionNumber}`).style.display = 'none';
            document.getElementById(`question-${questionNumber + 1}`).style.display = 'block';
        } else {
            showResult();
        }
    } else {
        displayCorrectAnswer(questionNumber);
    }
}

function displayCorrectAnswer(questionNumber) {
    const correctAnswer = correctAnswers[questionNumber - 1];
    const feedbackElement = document.createElement('p');
    feedbackElement.classList.add('feedback');
    feedbackElement.textContent = `Correct Answer: ${correctAnswer}`;
    document.getElementById(`question-${questionNumber}`).appendChild(feedbackElement);
}

function showResult() {
    const resultText = document.getElementById('result-text');
    resultText.textContent = `You scored ${score} out of ${totalQuestions}!`;
    document.getElementById('result').style.display = 'block';
}
