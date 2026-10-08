<?php
header('Content-Type: application/json');
echo json_encode([
    "api" => "Hari Haran A — Creative Portfolio REST API",
    "version" => "2.0.0",
    "author" => "Hari Haran A",
    "architecture" => "PHP 8+ REST Layer / SQLite / MySQL Compatible",
    "endpoints" => [
        "GET /backend/api/projects.php" => "List or filter portfolio projects",
        "POST /backend/api/projects.php" => "Create or update project record",
        "DELETE /backend/api/projects.php?id=ID" => "Delete project record",
        "GET /backend/api/vault.php" => "List creative digital assets",
        "POST /backend/api/vault.php" => "Create vault asset with Canva/Drive link",
        "POST /backend/api/upload.php" => "Upload asset media file",
        "POST /backend/api/contact.php" => "Submit contact inquiry",
        "POST /backend/api/auth.php" => "Admin PIN verification",
    ],
    "systemTime" => date('Y-m-d H:i:s'),
    "status" => "ONLINE"
]);
