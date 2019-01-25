let myGrade = function(marks, totalMarks){
let grade = ''
let percentage = (marks/totalMarks) * 100
if(percentage >= 90){
    grade = 'A'
}
else if(percentage >= 80){
    grade = 'B'
}
else if(percentage >= 70){
    grade = 'C'
}
else if(percentage >= 60){
    grade = 'D'
}
else if(percentage >= 50){
    grade = 'E'
}
else{
    grade = 'F'
}
return `Your Grade is ${grade} and Percentage is ${percentage}`
}
let result = myGrade(360, 500)
console.log(result)