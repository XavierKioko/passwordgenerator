const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordOne = document.getElementById("password-1");
let passwordTwo = document.getElementById("password-2");

function readLength() {
  const length = document.querySelector("input").value;
  return length;
}

function generatePassword() {
  passwordOne.textContent = " ";
  passwordTwo.textContent = " ";
  for (let i = 1; i <= readLength(); i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    passwordOne.textContent += characters[randomIndex];
  }
  for (let i = 1; i <= readLength(); i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    passwordTwo.textContent += characters[randomIndex];
  }
}

function copy1() {
  let copyText = document.getElementById("password-1");
  navigator.clipboard.writeText(copyText.textContent);

  alert("Password has been copied");
}
function copy2() {
  let copyText = document.getElementById("password-2");
  navigator.clipboard.writeText(copyText.textContent);

  alert("Password has been copied");
}
