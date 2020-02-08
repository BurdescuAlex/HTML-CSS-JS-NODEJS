function Load()
{
    let dark=sessionStorage.getItem("dark");
    if(dark==="0")
    {
        document.getElementById("pagestyle").setAttribute("href", "home_dark.css");  
        document.getElementById("navbar").setAttribute("href", "stil_dark.css");  
    }
    else 
    {
        document.getElementById("pagestyle").setAttribute("href", "home.css");  
        document.getElementById("navbar").setAttribute("href", "stil.css");  
    }
}
function Schimba()
{
    let dark=sessionStorage.getItem("dark");
    if(dark==="0")
    {
        sessionStorage.setItem("dark", "1");
    }
    else 
    {  
        sessionStorage.setItem("dark", "0");
    }
    Load();
}
function bubbleup()
{
    let bule=document.createElement('IMG');
    let DOM=document.getElementsByTagName('body')[0];
    bule.src="bubble.png";
    bule.setAttribute("id","bubbles")
    DOM.appendChild(bule);

    let x=Math.floor(Math.random() * 30);
    bule.style.width=x + "px";
    bule.style.height=x + "px";
    bule.style.opacity="0.5";
    bule.style.marginLeft=Math.floor(Math.random() * 100) + "%";
    bule.style.marginTop="100%";
    bule.style.position="fixed";
    bule.style.animationName= "bulesus";
    bule.style.animationDuration="10s";
    setTimeout(Removebule,11000,bule);
}
function Removebule(elemnt)
{
    elemnt.parentNode.removeChild(elemnt);
}