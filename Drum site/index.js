// for loop to traverse from button 0 to button 6
// and whenever any button is clicked its inner html is stored
//  in buttoninnerHtml variable and passed to makesound function

for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //----------------------------------------------------type  , listener(js function)

    var buttoninnerHtml = this.innerHTML;
    makeSound(buttoninnerHtml);
    buttonAnimation(buttoninnerHtml);
  });
}

// whenever a keydown type event happen it is recorded in
// event.key and this key is passed to make sound and switch
// case happen

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
  //   alert(event.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
  }
}

// Animation after pressing the button
function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  // to remove the animation after defined time
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 1000);
}
// Objects
// var bellBoy1 = {
//   name: "Nikhil",
//   age: 21,
//   languages: ["Hindi", "english"],
// };
// Constructor function
// function BellBoy(name, age, language) {
//   this.name = name;
//   this.age = age;
//   this.language = language;
// }
// var bellBoy1 = new BellBoy("Nikhil", 21, ["Hindi", "English"]);
// var bellBoy2 = new BellBoy("Naman", 22, ["Hindi", "French"]);
// console.log(bellBoy2.name);
