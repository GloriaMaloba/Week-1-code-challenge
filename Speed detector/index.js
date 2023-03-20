let speed = prompt("Enter the speed of the car:");
let demeritPoints = '';
if (speed < 70) {
  console.log("Ok");
} else {demeritPoints = Math.floor((speed - 70) / 5);

  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log(demeritPoints);
  }
}
