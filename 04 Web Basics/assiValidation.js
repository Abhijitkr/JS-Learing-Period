function myValidation () {
    let myValue = document.querySelector('#myForm').value
    if (isNaN(myValue) || myValue < 1 || myValue > 20){
         return 'Invalid Input!'
    } else {
         return 'Input is Ok.'
    }
}
document.querySelector('button').addEventListener('click', () => {
    let selectPara = document.querySelector('#idOne')
    selectPara.textContent = myValidation()
})
