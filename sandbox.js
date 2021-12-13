// js code for indexpage

const btnQuiz = document.querySelector('.btnQuiz');
const btnTodo = document.querySelector('.btnTodo');
const quizDiv = document.querySelector('.quizClass')
const todoDiv = document.querySelector('.todoClass')


btnQuiz.addEventListener('click', function() {
    if (quizDiv.classList.contains('quizClass')) {
        quizDiv.classList.add('quizClassShow')
    } else {
        quizDiv.classList.add('quizClass')
    }
} )

btnQuiz.addEventListener('click', function() {
    if (todoDiv.classList.contains('todoClassShow')) {
        todoDiv.classList.remove('todoClassShow')
    } 
} )

btnTodo.addEventListener('click', function() {
    if (quizDiv.classList.contains('quizClassShow')) {
        quizDiv.classList.remove('quizClassShow')
    } 
} )

btnTodo.addEventListener('click', function() {
    if (todoDiv.classList.contains('todoClass')) {
        todoDiv.classList.add('todoClassShow')
    } else {
        todoDiv.classList.add('todoClass')
    }
} )


// js code for Quiz


const correctanswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result'); 

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0; 
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answer, index ) => {
        if(answer === correctanswers[index]) {
            score += 25;
        } 
    });

    // show result on page
    scrollTo(0,0);
    
    result.classList.remove('d-none'); 

    let output = 0; 
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        }else {
            output++;
        }
    }, 20);

});

// js code for todo list 

const addForm = document.querySelector('.add'); 
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')

// add todos
const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
          </li>
    `;

    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    
    if(todo.length) {
    generateTemplate(todo);
    addForm.reset();
}

});

// delete todos 
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// search in todos

const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo) =>  !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'))

    Array.from(list.children)
    .filter((todo) =>  todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'))
};

search.addEventListener('keyup', e => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});

