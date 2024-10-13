<?php
include 'config.php'; // Include database connection

// Check if ID is set
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Fetch current student data
    $sql = "SELECT * FROM students WHERE id = $id";
    $result = $conn->query($sql);
    $student = $result->fetch_assoc();
}

// Update student information
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $course = $_POST['course'];

    $sql = "UPDATE students SET name='$name', email='$email', phone='$phone', course='$course' WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Student updated successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Redirect back to the index page
    header("Location: index.php");
}

$conn->close();
?>
