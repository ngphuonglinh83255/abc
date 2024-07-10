<?php
// Dangnhap.php

// Database connection
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $action = $_POST['action'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    if ($action == "sign_up") {
        // Sign-up process
        $name = $_POST['name'];
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$hashed_password')";

        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } elseif ($action == "sign_in") {
        // Sign-in process
        $sql = "SELECT password FROM users WHERE email='$email'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if (password_verify($password, $row['password'])) {
                echo "Login successful";
                // Start a session or redirect to another page
            } else {
                echo "Invalid password";
            }
        } else {
            echo "No user found with this email";
        }
    }
}


<?php
$app_id = '833979365285652'; // Thay thế bằng ID ứng dụng của bạn
$app_secret = 'YOUR_APP_SECRET'; // Thay thế bằng mã bí mật ứng dụng của bạn
$access_token = $_POST['access_token']; // Nhận mã thông báo truy cập từ phía client

// Tạo URL để xác thực mã thông báo truy cập
$token_validation_url = "https://graph.facebook.com/debug_token?input_token={$access_token}&access_token={$app_id}|{$app_secret}";

// Gửi yêu cầu đến Facebook để xác thực mã thông báo truy cập
$response = file_get_contents($token_validation_url);
$token_data = json_decode($response, true);

if ($token_data['data']['is_valid']) {
    // Mã thông báo hợp lệ, tiếp tục xử lý đăng nhập
    echo "Access token is valid. User ID: " . $token_data['data']['user_id'];
} else {
    // Mã thông báo không hợp lệ
    echo "Invalid access token.";
}
?>
