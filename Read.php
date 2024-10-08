<?php
include_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

$query = "SELECT * FROM students";
$stmt = $db->prepare($query);
$stmt->execute();

echo "<table border='1'>";
echo "<tr><th>ID</th><th>Name</th><th>Age</th><th>Gender</th><th>Course</th><th>Action</th></tr>";

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    echo "<tr>";
    echo "<td>{$row['id']}</td>";
    echo "<td>{$row['name']}</td>";
    echo "<td>{$row['age']}</td>";
    echo "<td>{$row['gender']}</td>";
    echo "<td>{$row['course']}</td>";
    echo "<td><a href='update.php?id={$row['id']}'>Edit</a> | <a href='delete.php?id={$row['id']}'>Delete</a></td>";
    echo "</tr>";
}

echo "</table>";
?>
