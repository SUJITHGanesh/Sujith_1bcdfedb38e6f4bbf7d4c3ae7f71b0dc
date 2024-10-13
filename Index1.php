<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Management System</title>
</head>
<body>
    <h1>Student Management System</h1>

    <!-- Form to Add a New Student -->
    <h2>Add Student</h2>
    <form action="insert.php" method="POST">
        <label for="name">Name:</label><br>
        <input type="text" name="name" id="name" required><br><br>

        <label for="email">Email:</label><br>
        <input type="email" name="email" id="email" required><br><br>

        <label for="phone">Phone:</label><br>
        <input type="text" name="phone" id="phone"><br><br>

        <label for="course">Course:</label><br>
        <input type="text" name="course" id="course"><br><br>

        <input type="submit" value="Add Student">
    </form>

    <h2>List of Students</h2>
    <?php
    // Display all students from the database
    include 'config.php'; // Include database connection file

    $sql = "SELECT * FROM students";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<table border='1'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Course</th>
                    <th>Action</th>
                </tr>";
        while ($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>" . $row['id'] . "</td>
                    <td>" . $row['name'] . "</td>
                    <td>" . $row['email'] . "</td>
                    <td>" . $row['phone'] . "</td>
                    <td>" . $row['course'] . "</td>
                    <td>
                        <a href='edit.php?id=" . $row['id'] . "'>Edit</a> |
                        <a href='delete.php?id=" . $row['id'] . "'>Delete</a>
                    </td>
                </tr>";
        }
        echo "</table>";
    } else {
        echo "No students found.";
    }
    ?>
</body>
</html>
