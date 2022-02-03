document.addEventListener("DOMContentLoaded",()=>{
    let content=document.querySelector(".content")
    let hero=document.querySelector(".hero")
    document.querySelector('#about').onclick=function(){
        hero.className="hero";
        content.innerHTML ="<div id='aboutme'><h2><span>A</span><span>b</span><span>o</span><span>u</span><span>t</span><span>M</span><span>e</span></h2><p>20 years old, studing computer scince in University Of Jordan a front-end developer passionate about learning a new and unique design ideas and making cool animation using html and css.</p></div>"
    }
    document.querySelector('#home').onclick=function(){
       hero.className="hero";
        content.innerHTML="<h4>Hello, my name is</h4><h1 id ='name'> <span>M</span> <span>a</span> <span>l</span> <span>a</span> <span>k</span>  <span>L</span> <span>a</span> <span>w</span> <span>a</span> <span>n</span><span>s</span> <span>e</span> <span>h</span></h1><h3>I'am a Front End Developer.</h3>"
    }
    document.querySelector('#skill').onclick=function(){
        hero.className="hero2";
    }
});