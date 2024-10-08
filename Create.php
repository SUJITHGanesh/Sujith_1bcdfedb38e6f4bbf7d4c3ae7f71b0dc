create.php<?php
if ($_POST) {
    include_once '../config/database.php';

    $database = new Database();
    $db = $database->getConnection();

    $query = "INSERT INTO students (name, age, gender, course) VALUES (:name, :age, :gender, :course)";
    $stmt = $db->prepare($query);

    $stmt->bindParam(':name', $_POST['name']);
    $stmt->bindParam(':age', $_POST['age']);
    $stmt->bindParam(':gender', $_POST['gender']);
    $stmt->bindParam(':course', $_POST['course']);

    if ($stmt->execute()) {
        echo "Student added successfully!";
    } else {
        echo "Failed to add student.";
    }
}
?>

<!-- HTML Form for adding a student -->
<form action="create.php" method="post">
    <label>Name:</label>
    <input type="text" name="name" required><br>
    <label>Age:</label>
    <input type="number" name="age" required><br>
    <label>Gender:</label>
    <select name="gender" required>
        <option value="M">Male</option>
        <option value="F">Female</option>
    </select><br>
    <label>Course:</label>
    <input type="text" name="course" required><br>
    <button type="submit">Add Student</button>
</form>
