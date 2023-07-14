// functions

const choices = document.getElementsByClassName("choice");
let myChoie = document.getElementsByClassName("my-choise");
let countElem = document.getElementsByClassName("counter");
let compChoise = document.getElementsByClassName("comp-choise");
let count = Number(countElem[0].innerText);

for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", () => {
    myChoie[0].innerText = choices[i].innerText;
    setTimeout(() => {
      counter();
      countElem[0].innerText = count;
    }, 1000);
  });
}

function computerChoise() {
  let face;
  const rand = Math.random();

  if (rand < 0.5) {
    face = "Xarash";
  } else {
    face = "Madax";
  }
  compChoise[0].innerText = face;
  // console.log(rand);

  return face;
}

const counter = () => {
  if (myChoie[0].innerText == computerChoise()) {
    count = count + 1;
  } else {
    count = count - 1;
  }
  console.log(count);
};
