// Q1.Find Grades
// Your school has the following grading system based upon the marks (M) obtained by a student:
//  If M≤10, the grade will be E.
//  If 11≥M≤20, the grade will be D.
//  If 21≥M≤30, the grade will be C.
//  If 31≥M≤40, the grade will be B.
//  If 41≥M≤50, the grade will be A.
// Your friend will enter his marks out of 5050, and your task is to print his grades using a switch statement.
// Note: You have to complete findGrades function. No need to take any input.

// Soln:
let grade;
function findGrades(marks) {
  switch (true) {
    case marks >= 41 && marks <= 50:
      grade = "A";
      break;
    case marks >= 31 && marks <= 40:
      grade = "B";
      break;
    case marks >= 21 && marks <= 30:
      grade = "C";
      break;
    case marks >= 11 && marks <= 20:
      grade = "D";
      break;
    case marks >= 0 && marks <= 10:
      grade = "E";
      break;
    default:
      grade = "Invalid marks Entered.";
  }
  return grade;
}

console.log(findGrades(45));

// Q2. Get Value
// You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the
// table corresponding to an input character and return it.
// | P or p - PrepBytes |
// | Z or z - Zenith |
// | E or e - Expert Coder |
// | D or d - Data Structure |
// Note: You have to complete getValue function. No need to take any input

// Soln:

let map = {
  p: "PrepBytes",
  z: "Zenith",
  e: "Exper Coder",
  d: "Data Structure",
};

function getValue(ch) {
  if (ch === "p" || ch === "P") {
    console.log(map["p"]);
    return;
  }
  if (ch === "z" || ch === "Z") {
    console.log(map["z"]);
    return;
  }
  if (ch === "e" || ch === "E") {
    console.log(map["e"]);
    return;
  }
  if (ch === "d" || ch === "D") {
    console.log(map["d"]);
    return;
  }
}

getValue("e");

// Q3. Find the maximum out of three numbers.
// Take three numbers and print the largest number among them if all of three are same print −1−1.
// Note: You have to complete Max_out_of_three. No need to take any input.

// Soln:

function Max_out_of_three(a, b, c) {
  if (a >= b && a >= c) {
    console.log(a);
    return;
  } else if (b >= c) {
    console.log(b);
    return;
  } else {
    console.log(c);
    return;
  }
}

Max_out_of_three(10, 20, 30);

// Q4. Second Smallest
// You are given 33 distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided
// integers.
// Note: You have to complete findSndSmallest function. No need to take any input.

// Soln:

function findSndSmallest(X, Y, Z) {
  if ((X > Y && X < Z) || (X > Z && X < Y)) {
    return X;
  } else if ((Y > X && Y < Z) || (Y > Z && Y < X)) {
    return Y;
  } else {
    return Z;
  }
}
console.log(findSndSmallest(10, 20, 30));

// Q5. Check whether the triangle is Acute or Obtuse
// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.
// Note: You have to complete Triangle_Check. No need to take any input

// Soln:

function Triangle_Check(A, B, C) {
  if (A < 90 && B < 90 && C < 90) {
    console.log("Acute");
  } else {
    console.log("Obtuce");
  }
}

Triangle_Check(10, 20, 30);
Triangle_Check(120, 20, 30);
