window.onload=function(){
    Cz=document.querySelectorAll("div div");
    tab=["1.jpg","3.jpg","4.png","5.jpg","6.jpeg","7.jpg"];
    
    function zmien(scana){
    i=Math.floor(Math.random()*6);
    scana.style.backgroundImage="url("+tab[i]+")";
    }
    for(j=0; j<5; j++){
    Cz[j].onmouseover=function(){
        zmien(this);
        }
    }
}