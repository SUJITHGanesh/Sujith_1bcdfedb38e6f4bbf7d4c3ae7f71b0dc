function calculateGrade() {
  // Get input values
  const subject1 = parseFloat(document.getElementById("subject1").value);
  const subject2 = parseFloat(document.getElementById("subject2").value);
  const subject3 = parseFloat(document.getElementById("subject3").value);

  // Check if input values are valid
  if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3)) {
    alert("Please enter valid marks for all subjects.");
    return;
  }

  // Calculate total and average
  const total = subject1 + subject2 + subject3;
  const average = total / 3;

  // Determine grade
  let grade;
  if (average >= 90) {
    grade = 'A';
  } else if (average >= 75) {
    grade = 'B';
  } else if (average >= 60) {
    grade = 'C';
  } else if (average >= 45) {
    grade = 'D';
  } else {
    grade = 'F';
  }

  // Display results
  document.getElementById("total").textContent = total;
  document.getElementById("average").textContent = average.toFixed(2);
  document.getElementById("grade").textContent = grade;
}
