// HTML elements I want to target
const questionElement = document.getElementById('question');
const yesButton = document.getElementById('answer-yes');
const noButton = document.getElementById('answer-no');

// Data for questions and answers that are displaying
const decisionTree = [{
    question: 'I would typically describe myself as:',
    options: ['Creative', 'Analytical']
},
{
    question: 'I am interested in technology:',
    options: ['Yes', 'No']
},
{
    question: 'I enjoy building things from scratch:',
    options: ['Yes', 'No']
},
{
    question: 'A competitive salary is important to me:',
    options: ['Yes', 'No']
},
{
    question: 'I struggle with time management:',
    options: ['Yes', 'No']
},
{
    question: 'I enjoy problem-solving and completing puzzles:',
    options: ['Yes', 'No']
},
{
    question: 'I am self-motivated and can work alone:',
    options: ['Yes', 'No']
},
{
    question: 'I enjoy coming up with new ideas:',
    options: ['Yes', 'No']
},
{
    question: 'I struggle with thinking outside of the box:',
    options: ['Yes', 'No']
}
]

// Default question when page is visited
let currentQuestion = 0;
questionElement.textContent = decisionTree[0].question;

// Add event listeners for buttons to display another question 
yesButton.addEventListener('click', () => buttonClick('Yes'));
noButton.addEventListener('click', () => buttonClick('No'));

// Function for buttonClick
function buttonClick(answer) {
    // Update the question based on the answer and current question index
    switch (currentQuestion) {
        case 0:
            currentQuestion = (answer === 'Yes') ? 1 : 5;
            break;
        case 1:
            currentQuestion = (answer === 'Yes') ? 5 : 2;
            break;
        case 2:
            currentQuestion = (answer === 'Yes') ? 6 : 3;
            break;
        case 3:
            currentQuestion = (answer === 'Yes') ? 7 : 4;
            break;
        case 4:
            if (answer === 'Yes') {
                // Display message and hide buttons
                questionElement.textContent = "Coding might not be a good fit.";
                hideButtons();
                return;
            } else if (answer === 'No') {
                currentQuestion = 8;
            }
            break;
        case 5:
            currentQuestion = (answer === 'Yes') ? 6 : 2;
            break;
        case 6:
            currentQuestion = (answer === 'Yes') ? 7 : 3;
            break;
        case 7:
            currentQuestion = (answer === 'Yes') ? 8 : 4;
            break;
        case 8:
            if (answer === 'Yes') {
                // Display message and hide buttons
                questionElement.textContent = "Coding might not be a good fit.";
                hideButtons();
                return;
            } else if (answer === 'No') {
                // Display message and hide buttons
                questionElement.textContent = "You should definitely consider learning to code!";
                hideButtons();
                return;
            }
            break;
    }

    // Update question and options
    questionElement.textContent = decisionTree[currentQuestion].question;
    yesButton.textContent = decisionTree[currentQuestion].options[0];
    noButton.textContent = decisionTree[currentQuestion].options[1];
}