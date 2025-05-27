window.addEventListener("load", function () {
  var jungleAudio = new Audio("./sounds/white_lotus_theme.mp3");
  jungleAudio.volume = 0.5;
  jungleAudio.loop = true;
  jungleAudio.play();
});

var buttons = document.querySelectorAll(".animal");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    showAnimalName(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  showAnimalName(event.key);
  buttonAnimation(event.key);
});

var currentAudio;

function makeSound(key) {
  if (currentAudio) {
    currentAudio.pause();
  }

  switch (key) {
    case "b":
      currentAudio = new Audio("./sounds/bee.wav");
      break;
    case "c":
      currentAudio = new Audio("./sounds/cat.wav");
      break;
    case "d":
      currentAudio = new Audio("./sounds/dragon.wav");
      break;
    case "h":
      currentAudio = new Audio("./sounds/horse.wav");
      break;
    case "o":
      currentAudio = new Audio("./sounds/owl.wav");
      break;
    case "r":
      currentAudio = new Audio("./sounds/rooster.wav");
      break;
    case "w":
      currentAudio = new Audio("./sounds/wolve.wav");
      break;
    default:
      alert("לא קיים סאונד  😢");
      return;
  }

  currentAudio.play();
}

function showAnimalName(key) {
  const animalDiv = document.getElementById("animal-name");

  const animals = {
    b: "🐝 Bee",
    c: "🐱 Cat",
    d: "🐉 Dragon",
    h: "🐴 Horse",
    o: "🦉 Owl",
    r: "🐓 Rooster",
    w: "🐺 Wolve",
  };

  if (animals[key]) {
    animalDiv.textContent = animals[key];
    animalDiv.classList.add("show");

    setTimeout(() => {
      animalDiv.classList.remove("show");
    }, 1500);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 150);
  }
}

// Using document.createElement – a JavaScript DOM method that was not taught in class.
// It allows dynamically creating new HTML elements with JavaScript (in this case: raindrops).

const rainContainer = document.querySelector(".rain-container");
function createDrop() {
  const drop = document.createElement("div");
  drop.classList.add("drop");
  drop.style.left = Math.random() * 100 + "vw";
  drop.style.animationDuration = Math.random() * 0.5 + 0.5 + "s";
  rainContainer.appendChild(drop);

  setTimeout(() => {
    drop.remove();
  }, 1000);
}

setInterval(createDrop, 50);
