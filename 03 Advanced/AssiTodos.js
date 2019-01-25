const list = [{
    title: 'Buy Bread',
    todo: true
}, {
    title: 'Workout',
    todo: false
}, {
    title: 'Learn Something New',
    todo: true
},{
    title: 'Go to School',
    todo: false
}, {
    title: 'HomeWork',
    todo: false
}, {
    title: 'Upload Github',
    todo: true
}]

const taskCompleted = list.filter((taskDone) => {
    return taskDone.todo === false
})
console.log('Task not Done :-\n')
for(i=0; i<taskCompleted.length; i++)
    console.log(taskCompleted[i].title)
 
