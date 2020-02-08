function Load()
{
    let dark=sessionStorage.getItem("dark");
    if(dark==="0")
    {
        document.getElementById("pagestyle").setAttribute("href", "oras_dark.css");  
        document.getElementById("navbar").setAttribute("href", "stil_dark.css");  
    }
    else 
    {
        document.getElementById("pagestyle").setAttribute("href", "oras.css");  
        document.getElementById("navbar").setAttribute("href", "stil.css");  
    }
}

function sendInformation(){
    let name = document.getElementById('name').value;
    let comment = document.getElementById('comment').value;

    fetch("http://localhost:3000", {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: 
        {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({name: name, comment: comment})
    }).then((data) => {
        return data.json()
    }).then((json)=>{
        if(json.Status === 'OK'){
            setTimeout(refresh,2000);
            move();
            setTimeout(getinformation,1500);
        } else {
            setTimeout(refresh,2000);
            movefail();
        }
        console.log(json);
     }) .catch( function(){
         setTimeout(refresh,2000);
         movefail();
         })
}
function refresh()
{
    document.getElementById('responseArea').innerText='Waiting comment...';
    document.getElementById('name').value='';
    document.getElementById('comment').value='';
}


function move() 
{
    let i = 0;
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        elem.style.width=0;
        document.getElementById('responseArea').innerText="Comment Posted!";
        i = 0;
      } else {
        width++;
        document.getElementById('responseArea').innerText=width + "%";
        elem.style.width = width + "%";
      }
    }
  }
}

function movefail() 
{
    let i = 0;
    let randomvar=Math.floor(Math.random() * 100)
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= randomvar) {
        clearInterval(id);
        elem.style.width=0;
        document.getElementById('responseArea').innerText="FAILED Posting!";
        i = 0;
      } else {
        width++;
        document.getElementById('responseArea').innerText=width + "%";
        elem.style.width = width + "%";
      }
    }
  }
}

function getinformation()
{
    fetch("http://localhost:3000", {
        method: 'GET',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: 
        {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then((data) => {
        return data.json()
    }).then((message)=>{

        console.log(message);
        let DOM=document.getElementById('viewcomments');
        document.getElementsByTagName('body')[0].removeChild(DOM);
        let T=document.createElement('DIV');
        T.id="viewcomments";
        document.getElementsByTagName('body')[0].appendChild(T);
        let hh=document.createElement('H1');
        hh.style.textAlign='center';
        hh.style.fontFamily='cursive';
        hh.innerText='User Comments';
        T.appendChild(hh);
       
        for (data in message)
        {
        let newp=document.createElement('P');
        newp.id="tobesters";
        T.appendChild(newp);
        newp.innerText=message[data].name + " : " +message[data].comment;
        }
    })
}