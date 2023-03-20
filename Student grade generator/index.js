let mark = prompt("Enter student's mark");
mark = Number(mark);
if (mark >= 0 && mark <= 100) {
    let grade;
    if (mark > 79) {
        grade = "A";
    } else if (mark >=60 && mark <= 79) {
        grade = "B";
    } else if (mark >=50 && mark <=59) {
        grade = "C";
    } else if (mark >=40 && mark <= 49) {
        grade = "D";
    } else if (mark <40){
        grade = "E"
    }
    
    console.log(grade);
}
  