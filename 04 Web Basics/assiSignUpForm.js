document.querySelector('.myForm').addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event.target.username.value)
    console.log(event.target.email.value)
    console.log(event.target.password.value)
    console.log(event.target.confirm_password.value)
    event.target.username.value = ''
    event.target.email.value = ''
    event.target.password.value = ''
    event.target.confirm_password.value = ''
})
function validation(){
    let pass = document.querySelector('#pass1').value
    let conpass = document.querySelector('#pass2').value
    if(pass === conpass){
        var myMsg = document.createElement('p')
        myMsg.textContent = 'You are Signed Up.'
        document.querySelector('body').appendChild(myMsg)
    } else {
        var myMsg = document.createElement('p')
        myMsg.textContent = 'Password doesnot match!'
        document.querySelector('body').appendChild(myMsg)
    }
}

// document.querySelector('.myForm').addEventListener('submit', () => {
//   myMsg.textContent = ''  
// })