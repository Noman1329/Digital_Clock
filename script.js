const getTime = document.querySelector(".clock"),
getDate = document.querySelector(".date");

setInterval(()=>
{
    const today = new Date(),
    hh = today.getHours(),
    mm = today.getMinutes(),
    ss = today.getSeconds(),
    date = today.toDateString();

    getTime.innerText= `${padding(hh)} : ${padding(mm)} : ${padding(ss)}`;
    getDate.innerText= date;
    
}, 1000);

function padding(p)
{
    return p.toString().padStart(2, "0"); 
}