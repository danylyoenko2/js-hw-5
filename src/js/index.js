// 1 task

const choose = "tea";

switch (choose) {
  case "tea":
    console.log("your choose tea");
    break;
  case "coffee":
    console.log("your choose coffee");
    break;
  case "juice":
    console.log("your choose juice");
    break;

  default:
    console.log("your choose nothing");
    break;
}

// 2 task

const day = "Friday";

switch (day.toLowerCase()) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("this is workday");
    break;
  case "saturday":
  case "sunday":
    console.log("this is chillday");
    break;

  default:
    console.log("you dont choose day");
    break;
}

// 3 task

const nMonth = 10;

switch (nMonth) {
  case 1:
  case 2:
  case 12:
    console.log("Your season is Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Your season is Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Your season is Summer");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Your season is Fall");
    break;

  default:
    console.log("Invalid number of month");
    break;
}

// 4 task

const color = "green";

switch (color) {
  case "green":
    console.log("go");
    break;
  case "yellow":
    console.log("wait");
    break;
  case "red":
    console.log("stop");
    break;
}

// 5 task
// const fNum = 10;
// const sNum = 3;

// const operator = "+";

// switch (operator) {
//   case "+":
//     console.log(fNum + sNum);
//     break;
//   case "-":
//     console.log(fNum - sNum);
//     break;
//   case "*":
//     console.log(fNum * sNum);
//     break;
//   case "/":
//     if (fNum === 0 || sNum === 0) {
//       console.log("Can't divide on zero");
//       return false;
//     }
//     console.log(fNum / sNum);
//     break;
//   default:
//     console.log("Invalid operator");
//     break;
// }

// my idea for before task

const btn = document.querySelector("#callBtn");

function calc() {
  const fNum = Number(prompt("Write a first number"));
  const sNum = Number(prompt("Write a second number"));

  const chooseOperator = prompt("Write a operator (+, -, *, /)");
  const operators = ["+", "-", "*", "/"];

  switch (chooseOperator) {
    case operators[0]:
      alert(`Your number is: ${fNum + sNum}`);
      break;
    case operators[1]:
      alert(`Your number is: ${fNum - sNum}`);
      break;
    case operators[2]:
      alert(`Your number is: ${fNum * sNum}`);
      break;
    case operators[3]:
      if (fNum === 0 || sNum === 0) {
        alert("Can't divide on zero");
        return false;
      }
      alert(`Your number is: ${fNum / sNum}`);
      break;
    default:
      alert("Invalid operator");
      break;
  }
}

btn.addEventListener("click", () => {
  calc();
});
