window.onload=function(){
    
    
   poj=document.getElementById("pojemnik");
  poj2=document.getElementById("pojemnik2");
   
    
    
    function tworzenie(){
       
        for (i=0; i<49; i++)
            {
                ob=document.createElement("div");
                ob.classList.add("d");
                ob.innerHTML=i+1;
                poj.appendChild(ob);
               
                }
        ob=document.getElementsByClassName("d");

            }
    
    
    tworzenie();    
    
     function tworzenie2(){
       
        for (i=0; i<6; i++)
            {
                ob2=document.createElement("input");
                ob2.classList.add("i");
                poj2.appendChild(ob2);
               
                }
         
            }
    tworzenie2();    

      Button=document.getElementById("button");
   
    Trafione=document.getElementById("trafione");
      
    function losuj(){
        
        t49=[];
        t6=[];
         ob5=document.getElementsByClassName("i");

    
        
       
        
   
        for(i=0; i<49; i++){
            t49[i]=i+1;
            ob[i].style.backgroundColor="rgb(221, 224, 255)";
             ob[i].style.color="rgb(255, 155, 112)";
        }
        
        for(j=0; j<6; j++){
            index=(Math.floor(Math.random()*t49.length));
            t6[j]=t49[index];
            t49.splice(index,1);
        }
        
        for(k=0; k<6; k++){
             for(i=0; i<49; i++){
                  if(ob[i].innerHTML==t6[k])
                      {
                     ob[i].style.backgroundColor="rgb(98, 231, 165)"
  
                      }
             }
        }
  for(k=0; k<6; k++){
             for(i=0; i<49; i++){
                  if(ob[i].innerHTML==ob5[k].value)
                      {
                     ob[i].style.backgroundColor="#3366ff"
                      
                      }
             }
        }
        tr=[]
        for(k=0; k<6; k++){
             for(i=0; i<49; i++){
                  if(ob[i].innerHTML==ob5[k].value)
                      {
                     tr=t6[i];
                      
                      }
             }
        }
          for(k=0; k<6; k++){
             for(i=0; i<49; i++){
                  if(t6[k]==ob5[k].value)
                      {
                          
                     if(ob[i].innerHTML==ob5[k].value)
                              {
                     ob[i].style.backgroundColor="#ffcc33";
          
                       
                              } 
                      }
             }
        }
        Trafione.innerHTML=t6.join(" ");
        
        }
      Button.onclick = function(){
        losuj();
    }
        
        
    }
   