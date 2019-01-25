const todos = [{
    title: 'Buy Bread',
    todo: true
}, {
    title: 'Workout',
    todo: false
}, {
    title: 'Learn Something New',
    todo: true
}]

// let check = function(taskDone){
// return taskDone.todo === true
// }

// const done = todos.filter(check)

// console.log(done)

const complete = todos.filter(function(done){
    return done.todo === true
})

console.log(complete)

// const complete = todos.filter((done) => done.todo === true )

// console.log(complete)