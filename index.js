const day = new Date()
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const newday = weekdays[day.getDay()]
document.querySelector(".theday").innerHTML = newday


let timenow = Date.now()
document.querySelector(".thetime").innerHTML = timenow