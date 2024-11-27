
let currentDate = new Date()
let targetDate = new Date("2024/11/29") // write your target time here

function diffTime (currentDate: Date,targetDate: Date):any{
    let sub: number = Math.ceil((targetDate.getTime() - currentDate.getTime()) / 1000)
    let day: number = parseInt((sub / (60 * 60 * 24)).toString())
    let hours: number = parseInt((sub % (60 * 60 * 24) / (60 * 60)).toString())
    let minutes: number = parseInt((sub %(60*60)/60).toString())
    let seconds: number = sub % 60
    interface TimeRemaining {
        day: number;
        hours: number;
        minutes: number;
        seconds: number;
    }
    let res: TimeRemaining = {
        day,
        hours,
        minutes,
        seconds,
    }
    
    return res
}

setInterval(() => {
    let currentDate = new Date()
    let res = diffTime(currentDate,targetDate)
    //#listtime is page name(class or id)
    let element = document.querySelector("#leasttime")
    if (element) {
        element.innerHTML = `时间剩余(Time remaining)${res.day}天(day)${res.hours}时(hours)${res.minutes}分(minutes)${res.seconds}秒(seconds)`
    }
    
}, 1000);
// setTimeout(() => {
//     console.log(currentDate,targetDate)
// }, 1000);
