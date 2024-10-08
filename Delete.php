<?php
include_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

if (isset($_GET['id'])) {
    $query = "DELETE FROM students WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $_GET['id']);

    if ($stmt->execute()) {
        echo "Student deleted successfully!";
    } else {
        echo "Failed to delete student.";
    }
}
?>
