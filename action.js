const gorilla = document.getElementById("gorilla");
const rocks = document.getElementById("rocks");
const score = document.getElementById("score");
function jump(){
  gorilla.classList.add("jump-animation");  
  setTimeout(() => {
    gorilla.classList.remove("jump-animation");
  },500);
 }
 document.addEventListener("",() => {
   if(!gorilla.classList.contains('jump-animation')){
     jump();
   }
  });

// setInterval(function() {
  setInterval(() => { 
    //update score
    score.innerText++;
    //gorilla x position
  const gorillatop = parseInt(window.getComputedStyle(gorilla).getPropertyValue("top"));
   //get current rock y position
  const rockleft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));
    if(rockleft < 0){
      rock.style.display = 'none';
    }else{
      rock.style.display = '';
    }  
  //detect collision
  if(rockleft < 60 && rockleft > 0 && gorillatop > 120){
    //collision
    alert("GAME OVER! \n\n You got a score of : "+  score.innerText + "\n\n Press OK to Play Again");
    location.reload(); 
    
  }

},50);






 

















