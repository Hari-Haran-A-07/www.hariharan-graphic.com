<?php
require_once __DIR__ . '/../config/database.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Only POST requests allowed"]);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data || empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Name, Email, and Message are required"]);
    exit();
}

// Sanitize inputs
$name = htmlspecialchars(strip_tags(trim($data['name'])));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$projectType = htmlspecialchars(strip_tags($data['projectType'] ?? 'Design Inquiry'));
$budget = htmlspecialchars(strip_tags($data['budget'] ?? 'Unspecified'));
$message = htmlspecialchars(strip_tags(trim($data['message'])));
$ipAddress = $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid email address format"]);
    exit();
}

try {
    $pdo = Database::getConnection();
    $stmt = $pdo->prepare("
        INSERT INTO contacts (name, email, project_type, budget, message, ip_address)
        VALUES (:name, :email, :project_type, :budget, :message, :ip_address)
    ");
    $stmt->execute([
        ':name' => $name,
        ':email' => $email,
        ':project_type' => $projectType,
        ':budget' => $budget,
        ':message' => $message,
        ':ip_address' => $ipAddress,
    ]);

    // Optional mail notification
    $to = "suryahari971@gmail.com";
    $subject = "New Portfolio Inquiry from $name [$projectType]";
    $body = "Name: $name\nEmail: $email\nProject: $projectType\nBudget: $budget\n\nMessage:\n$message\n\nIP: $ipAddress";
    $headers = "From: no-reply@hariharan-design.com\r\nReply-To: $email";
    @mail($to, $subject, $body, $headers);

    echo json_encode([
        "status" => "success",
        "message" => "Thank you, $name. Your message has been transmitted successfully. I will connect with you shortly!",
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Failed to save message: " . $e->getMessage()]);
}
