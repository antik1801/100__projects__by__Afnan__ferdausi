function getDate(){
    const d = new Date();
    const days = ["Saturday","Sunday","Monday","Tuesday","Thursday","Friday"]
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const today = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${today}, ${date}, ${month}, ${year}`;

}
document.querySelector('.date').innerHTML= getDate();

function getTime(){
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    const amPm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    const time = `${h}:${m}:${s} ${amPm}`
    console.log(h,m,s,amPm);
    document.querySelector(".time").innerHTML = time;
}

setInterval(getTime, 1000)