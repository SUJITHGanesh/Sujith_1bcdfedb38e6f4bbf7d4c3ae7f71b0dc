<?php
include_once '../config/database.php';

$database = new Database();
$db = $database->getConnection();

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $query = "SELECT * FROM students WHERE id = :id LIMIT 0,1";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $id);
    $stmt->execute();

    $student = $stmt->fetch(PDO::FETCH_ASSOC);
}

if ($_POST) {
    $query = "UPDATE students SET name = :name, age = :age, gender = :gender, course = :course WHERE id = :id";
    $stmt = $db->prepare($query);
    
    $stmt->bindParam(':name', $_POST['name']);
    $stmt->bindParam(':age', $_POST['age']);
    $stmt->bindParam(':gender', $_POST['gender']);
    $stmt->bindParam(':course', $_POST['course']);
    $stmt->bindParam(':id', $_POST['id']);
    
    if ($stmt->execute()) {
        echo "Student updated successfully!";
    } else {
        echo "Failed to update student.";
    }
}
?>

<!-- HTML form for editing student -->
<form action="update.php?id=<?php echo $student['id']; ?>" method="post">
    <input type="hidden" name="id" value="<?php echo $student['id']; ?>">
    <label>Name:</label>
    <input type="text" name="name" value="<?php echo $student['name']; ?>" required><br>
    <label>Age:</label>
    <input type="number" name="age" value="<?php echo $student['age']; ?>" required><br>
    <label>Gender:</label>
    <select name="gender" required>
        <option value="M" <?php echo $student['gender'] == 'M' ? 'selected' : ''; ?>>Male</option>
        <option value="F" <?php echo $student['gender'] == 'F' ? 'selected' : ''; ?>>Female</option>
    </select><br>
    <label>Course:</label>
    <input type="text" name="course" value="<?php echo $student['course']; ?>" required><br>
    <button type="submit">Update Student</button>
</form>
