const mario = document.querySelector(".mario");
const obs = document.querySelector(".obs");
mario.style.bottom = "0px";
obs.style.right = "0px";
mario.classList.add("mario")

var offsetsMario = document.querySelector(".mario").getBoundingClientRect();
var offsetsObs = document.querySelector(".obs").getBoundingClientRect();
var bottomMario = offsetsMario.bottom;
var topObs = offsetsObs.top;

document.addEventListener("keypress", (e) => {
  if (e.key == "w") {    
    mario.style.bottom = "80px";
    setTimeout(() => {
      mario.style.bottom = "0px";
    }, 500);
  }
});

document.addEventListener("keypress", (e) => {
  if (e.key == "s") {
    mario.style.height = "30px";
    mario.style.width = "30px";
    mario.style.bottom = "0px";
    setTimeout(() => {
      mario.style.height = "50px";
      mario.style.width = "50px";
    }, 500);
  }
});

let obsRun = () => {
  obs.classList.add("log")
  // console.log("dasd");
  let rightPos = obs.style.right;
  let value = parseInt(rightPos.substring(0, rightPos.length - 2));
  setInterval(() => {
    if (parseInt(rightPos.substring(0, rightPos.length - 2)) < 1200) {
      offsets = document.querySelector(".obs").getBoundingClientRect();      
      console.log("bottom",bottomObs)
      rightPos = obs.style.right;
      // console.log(rightPos);wd
      value += 20;
      obs.style.right = value + "px";
    }
    else{
      obs.style.display="none"
    }
  }, 200);
};

obsRun();
