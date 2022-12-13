const restartBtn = document.getElementById('restart')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const doneBtn = document.getElementById('done')
//const trueBtn = document.getElementById('true')
//const falseBtn = document.getElementById('false')
const questionText = document.getElementById('question-text')

let currentQuestion = 0

let questions = [
    {
        question: 'FDIC covers up to how much per depositor?'
    },
    {
        question: 'Name one deposit product available at financial institutions?'
    },
    {
        question: 'Name one credit product available at financial institutions?'
    },
    {
        question: 'True or False: <br> Everyone is not approved for an account.'
    },
    {
        question: 'What does ATM stand for?'
    },
    {
        question: 'What are the benefits of having a savings account?'
    },
    {
        question: 'What is Cash App an example of?'
    },
    {
        question: 'Give an example of how to apply for an account?'
    },
    {
        question: 'Provide me an example of how a checking account is utilized?'
    },
    {
        question: 'Banking history includes information such as...'
    },
    {
        question: '24/7 access to your account, person to person transfers, and bill pay are advantages of ______?'
    },
    {
        question: 'How many components make up a check?'
    },
    {
        question: 'Provide me 3 of the 12 components of a check?'
    },
    {
        question: 'Fill in the blank:  <br> Online banking provides you _____ access to your account?'
    },
    {
        question: 'What are TWO programs that cover ATM and Debit Card Transactions?'
    },
    {
        question: 'Fill in the blank:  <br> Many employers offer ______ for payroll pay checks?'
    },
    {
        question: 'Fill in the blank: <br>  ______ offers you the ability to schedule and send payments through your financial institution.'
    },
    {
        question: 'What is one way to pay your bills?'
    },
    {
        question: 'Fill in the blank: <br> ____ cards look like _____ cards because they have a card network logo on them, but they are not the same.'
    },
    {
        question: 'Rudy has chosen to opt in. He has $100 in his account, he spends $50 at HEB, $15 at Chick-Fil-A, $30 at Starbucks, and his phone bill is $35. What is his available balance and will he be charged an overdraft fee?'
    }
    
]

function beginQuiz() {
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    prevBtn.classList.add('hide')
}

function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove('hide')
    nextBtn.classList.remove('hide')
    doneBtn.classList.remove('hide')

    beginQuiz()
}

function next() {
    currentQuestion++;
    if (currentQuestion >= 2){
        prevBtn.classList.remove('hide')
    }
    questionText.innerHTML = questions[currentQuestion].question;

    prevBtn.classList.remove('hide')
}

function prev() {
    currentQuestion--;
    if (currentQuestion <= 0){
        nextBtn.classList.remove('hide')
    }
    questionText.innerHTML = questions[currentQuestion].question;

    nextBtn.classList.remove('hide')
}

function done() {
    prevBtn.classList.add('hide')
    nextBtn.classList.add('hide')
    doneBtn.classList.add('hide')

    questionText.innerHTML = "Congratulations on completing Amegy Banks Financial Literacy Course!"
}



restartBtn.addEventListener('click', restart)
prevBtn.addEventListener('click',prev)
nextBtn.addEventListener('click',next)
doneBtn.addEventListener('click',done)