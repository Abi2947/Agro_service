<?php

// Connect to the MySQL database
$mysqli = new mysqli("localhost", "username", "password", "minor");

// Check for errors
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Get the input value from the request
$input = $_REQUEST['input'];

// Escape the input value to prevent SQL injection attacks
$input = $mysqli->real_escape_string($input);

// Construct the INSERT statement
$sql = "INSERT INTO users (U_ID ,
U_Name,
U_Address ,
U_Gender ,
U_Contact_No ) VALUES ('$input')";

// Execute the query
if ($mysqli->query($sql) === TRUE) {
    echo "Record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}

// Close the connection
$mysqli->close();

?>


