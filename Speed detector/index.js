//Ask user to input the speed of the car
let speed = prompt("Enter the speed of the car:");

let demeritPoints = '';

//Print 'Ok' if the speed is less than 70
if (speed < 70) {
  console.log("Ok");

  //Otherwise calculate the demerit points to be displayed
} else {demeritPoints = Math.floor((speed - 70) / 5);

//If the demerit points are greater than 12 then display 'License suspended'
  if (demeritPoints > 12) {
    console.log("License suspended");

    //Otherwise just display the demerit points
  } else {

    console.log(demeritPoints);
  }
}
