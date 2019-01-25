const list = []
list.unshift('Buy Bread')
list.unshift('Learn Something New')
list.unshift('Workout')
for(let i=0; i<list.length; i++)
{
    console.log(`Your ${i+1} todo is ${list[i]}`)
}