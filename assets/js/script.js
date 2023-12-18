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