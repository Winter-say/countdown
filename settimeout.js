"use strict";
let currentDate = new Date();
let targetDate = new Date("2024/11/29"); // write your target time here
function diffTime(currentDate, targetDate) {
    let sub = Math.ceil((targetDate.getTime() - currentDate.getTime()) / 1000);
    let day = parseInt((sub / (60 * 60 * 24)).toString());
    let hours = parseInt((sub % (60 * 60 * 24) / (60 * 60)).toString());
    let minutes = parseInt((sub % (60 * 60) / 60).toString());
    let seconds = sub % 60;
    let res = {
        day,
        hours,
        minutes,
        seconds,
    };
    return res;
}
setInterval(() => {
    let currentDate = new Date();
    let res = diffTime(currentDate, targetDate);
    //#listtime is page name(class or id)
    let element = document.querySelector("#leasttime");
    if (element) {
        element.innerHTML = `时间剩余(Time remaining)${res.day}天(day)${res.hours}时(hours)${res.minutes}分(minutes)${res.seconds}秒(seconds)`;
    }
}, 1000);
// setTimeout(() => {
//     console.log(currentDate,targetDate)
// }, 1000);
