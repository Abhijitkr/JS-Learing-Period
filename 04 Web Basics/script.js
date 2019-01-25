const myElements = document.querySelectorAll('p')

myElements.forEach((para) => para.textContent = 'I Love my India'
)

const myPara = document.createElement('p')
myPara.textContent = 'Paragraph added via js'
document.querySelector('body').appendChild(myPara)

document.querySelector('button').addEventListener('click', (e) => {
    e.target.textContent = 'I was Clicked!'
})