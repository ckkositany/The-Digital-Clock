const hourEl=document.getElementById("hour");

const minuteEl=document.getElementById("minutes");

const secondEl=document.getElementById("seconds");

const ampmEl=document.getElementById("ampm");

function updateclock()
{
    let today=new Date();
    let hr = today.getHours();
    let min=today.getMinutes();
    let sec=today.getSeconds();
    let ampm="AM"

    if(hr>12)
    {
        hr=hr-12
        ampm="PM"
    }


   hr=hr <10 ? "0" + hr : hr;
    min=min < 10 ?"0" + min :min;
    sec=sec < 10 ? "0" + sec : sec;
    

    hourEl.innerText=hr;
    minuteEl.innertext=min;
    secondEl.innertext=sec;
    ampmEl,(innertext=ampm);

   let t=setTimeout(updateclock,500);
}

   
    
    
    


updateclock()
