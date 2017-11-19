var paragraph = document.querySelector("p");
//I'm using the <b> tag for bold not strong
var wordItems = document.getElementsByTagName("b");

for(var i = 0; i < wordItems.length; i += 1){
        (function(i){
         wordItems[i].addEventListener("mouseover", function(){
                                      wordItems[i].style.color = "red";
                                       
                                       });
         }(i));
    //change back to black if no longer hovering
    (function(j){
     wordItems[i].addEventListener("mouseout", function(){
                                   wordItems[j].style.color = "black";
                                
                                   });
     }(i));
}
if(paragraph){
    paragraph.addEventListener("mouseover", function(){
                              
                               });
}
