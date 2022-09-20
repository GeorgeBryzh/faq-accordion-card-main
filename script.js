const questionHeader = document.querySelector('.question-header')
const questionItems = document.querySelectorAll('.question-item')
const questionText = document.querySelector('.question-text')

questionItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        questionItems.forEach((element, i) => {
            if (element.firstElementChild.firstElementChild.matches('h2.show-text') && item !== element ) {
                console.log(element.childNodes)
                element.firstElementChild.querySelector('.question-toggle').classList.remove('show-text');  
                element.firstElementChild.firstElementChild.classList.remove('show-text');
                element.lastElementChild.classList.remove('show-text');
                console.log(element.classList)
            }
        })
        item.firstElementChild.querySelector('.question-toggle').classList.toggle('show-text');
        item.firstElementChild.firstElementChild.classList.toggle('show-text');
        item.lastElementChild.classList.toggle('show-text');

    })
    
})