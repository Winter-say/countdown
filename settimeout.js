
let currentDate = new Date()
let targetDate = new Date("2025/6/29") // write your target time here
function diffTime (currentDate,targetDate){
    let sub = Math.ceil( (targetDate - currentDate ) / 1000 )
    let day = parseInt( sub/(60*60*24))
    let hours = parseInt(sub%(60*60*24) / (60*60))
    let minutes = parseInt(sub%(60*60)/60)
    let seconds = sub % 60
    let obj ={
        day,
        hours,
        minutes,
        seconds
    }
    return obj
}

setInterval(() => {
    let currentDate = new Date()
    let res = diffTime(currentDate,targetDate)
    //#listtime is page name(class or id)
    document.querySelector("#leasttime").innerHTML = `时间剩余(Time remaining)${res.day}天(day)${res.hours}时(hours)${res.minutes}分(minutes)${res.seconds}秒(seconds)`
}, 1000);
// setTimeout(() => {
//     console.log(currentDate,targetDate)
// }, 1000);

export default diffTime
