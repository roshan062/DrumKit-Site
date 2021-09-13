
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfDrums; i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var buttonValue = this.innerHTML;
        makeSound(buttonValue);
        makeAnimation(buttonValue);
    });
   
}

document.addEventListener("keypress", function(Event) {
    makeSound(Event.key);
    makeAnimation(Event.key);
});

function makeSound(key) {
  
   if( key == "w")
   {
    var sound = new Audio("sounds/tom-1.mp3");
    sound.play();
   }

   else if( key == "a")
   {
    var sound = new Audio("sounds/tom-2.mp3");
    sound.play();
   }
   else if( key == "s")
   {
    var sound = new Audio("sounds/tom-3.mp3");
    sound.play();
   }

   else if( key == "d")
   {
    var sound = new Audio("sounds/tom-4.mp3");
    sound.play(); 
   }

   else if( key == "j")
   {
    var sound = new Audio("sounds/crash.mp3");
    sound.play();
   }

   else if( key == "k")
   {
    var sound = new Audio("sounds/kick-bass.mp3");
    sound.play(); 
   }

   else if( key == "l")
   {
    var sound = new Audio("sounds/snare.mp3");
    sound.play();
   }

   else {
       alert("Hello, This is else part")
   }

}

function makeAnimation(currentkey)
{
    document.querySelector("." + currentkey).classList.add("pressed");
   setTimeout(function() {
         document.querySelector("." + currentkey).classList.remove("pressed");}, 100);
 }