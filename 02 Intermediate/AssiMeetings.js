let myTodos = {
    'day': 'Monday',
    'meetings': 0,
    'meetingsDone': 0,
    'meetingsLeft': 0,
    addMeetings: function(num) {
        this.meetings = this.meetings + num
    },
    removeMeeetings: function(num){
        this.meetingsDone = this.meetings - num
    },
    leftMeetings: function(){
        this.meetingsLeft = this.meetings - this.meetingsDone
    },
    daySummary: function(){
        return `You had ${this.meetings} meetings, you did ${this.meetingsDone} and your are left with ${this.meetingsLeft} meetings.`
    },
    dayReset: function(){
        this.meetings = 0,
        this.meetingsDone = 0,
        this.meetingsLeft = 0
    }
}
myTodos.addMeetings(4)
myTodos.removeMeeetings(2)
myTodos.leftMeetings()
console.log(myTodos.daySummary())
myTodos.dayReset()
console.log(myTodos.daySummary())