<?php
include 'config.php'; // Include database connection

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Delete student
    $sql = "DELETE FROM students WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        echo "Student deleted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Redirect back to the index page
    header("Location: index.php");
}

$conn->close();
?>
