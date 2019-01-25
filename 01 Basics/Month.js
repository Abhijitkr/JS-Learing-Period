const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let disp = function(month, number){
    console.log(`Month ${number + 1} is ${month}`)
}
months.forEach(disp)
