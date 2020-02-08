function Load()
{
    let dark=sessionStorage.getItem("dark");
    if(dark==="0")
    {
        document.getElementById("pagestyle").setAttribute("href", "personaje_dark.css");  
        document.getElementById("navbar").setAttribute("href", "stil_dark.css");  
    }
    else 
    {
        document.getElementById("pagestyle").setAttribute("href", "personaje.css");  
        document.getElementById("navbar").setAttribute("href", "stil.css");  
    }
}
window.onload=Load();