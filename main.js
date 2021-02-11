const lagosTime = document.getElementById("lagos-time");
const madridTime = document.getElementById("madrid-time");
const vancouverTime = document.getElementById("vancouver-time");
const beijingTime = document.getElementById("beijing-time");

// Lagos Time
let getLagosTime = function () {
 lagosTime.innerHTML = moment();
 return getLagosTime;
}
getLagosTime();
setInterval(getLagosTime, 1000);

// Madrid Time
let getMadridTime = function () {
 madridTime.innerHTML = moment();
 return getMadridTime;
}
getMadridTime();
setInterval(getMadridTime, 1000);

// Vancouver-Canada Time
let getVancouverTime = function () {
 vancouverTime.innerHTML = moment().subtract(8, 'hours');
 return getVancouverTime;
}
getVancouverTime();
setInterval(getVancouverTime, 1000);

// Beijing Time
let getBeijingTime = function () {
 beijingTime.innerHTML = moment().add(7, "hours");
 return getBeijingTime;
}
getBeijingTime();
setInterval(getBeijingTime, 1000);

alert("hello");