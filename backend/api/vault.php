<?php
require_once __DIR__ . '/../config/database.php';

header('Content-Type: application/json');

$pdo = Database::getConnection();
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $query = "SELECT * FROM vault_assets";
        $params = [];
        $conditions = [];

        if (isset($_GET['category']) && $_GET['category'] !== 'ALL') {
            $conditions[] = "category = :category";
            $params['category'] = $_GET['category'];
        }

        if (isset($_GET['format']) && $_GET['format'] !== 'ALL') {
            $conditions[] = "format = :format";
            $params['format'] = $_GET['format'];
        }

        if (isset($_GET['search']) && trim($_GET['search']) !== '') {
            $conditions[] = "(title LIKE :search OR description LIKE :search OR tags LIKE :search)";
            $params['search'] = '%' . trim($_GET['search']) . '%';
        }

        if (!empty($conditions)) {
            $query .= " WHERE " . implode(" AND ", $conditions);
        }

        $query .= " ORDER BY created_at DESC";
        $stmt = $pdo->prepare($query);
        $stmt->execute($params);
        $assets = $stmt->fetchAll();

        foreach ($assets as &$a) {
            $a['tools'] = json_decode($a['tools'] ?: '[]', true);
            $a['tags'] = json_decode($a['tags'] ?: '[]', true);
            $a['featured'] = (bool)$a['featured'];
        }

        echo json_encode(["status" => "success", "count" => count($assets), "data" => $assets]);
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        if (!$data || !isset($data['title']) || !isset($data['category'])) {
            http_response_code(400);
            echo json_encode(["status" => "error", "message" => "Title and Category required"]);
            exit();
        }

        $id = $data['id'] ?? 'vault-' . uniqid();
        $stmt = $pdo->prepare("
            INSERT OR REPLACE INTO vault_assets (
                id, title, category, format, year, tools, thumbnail, preview_url,
                canva_url, drive_url, figma_url, dimensions, description, tags, featured
            ) VALUES (
                :id, :title, :category, :format, :year, :tools, :thumbnail, :preview_url,
                :canva_url, :drive_url, :figma_url, :dimensions, :description, :tags, :featured
            )
        ");

        $stmt->execute([
            ':id' => $id,
            ':title' => $data['title'],
            ':category' => $data['category'],
            ':format' => $data['format'] ?? 'IMAGE',
            ':year' => $data['year'] ?? date('Y'),
            ':tools' => json_encode($data['tools'] ?? []),
            ':thumbnail' => $data['thumbnail'] ?? '',
            ':preview_url' => $data['previewUrl'] ?? '',
            ':canva_url' => $data['canvaUrl'] ?? '',
            ':drive_url' => $data['driveUrl'] ?? '',
            ':figma_url' => $data['figmaUrl'] ?? '',
            ':dimensions' => $data['dimensions'] ?? '',
            ':description' => $data['description'] ?? '',
            ':tags' => json_encode($data['tags'] ?? []),
            ':featured' => !empty($data['featured']) ? 1 : 0,
        ]);

        echo json_encode(["status" => "success", "message" => "Vault asset saved", "id" => $id]);
        break;

    case 'DELETE':
        $id = $_GET['id'] ?? null;
        if (!$id) {
            http_response_code(400);
            echo json_encode(["status" => "error", "message" => "Asset ID required"]);
            exit();
        }
        $stmt = $pdo->prepare("DELETE FROM vault_assets WHERE id = :id");
        $stmt->execute([':id' => $id]);
        echo json_encode(["status" => "success", "message" => "Asset deleted"]);
        break;

    default:
        http_response_code(405);
        echo json_encode(["status" => "error", "message" => "Method not allowed"]);
        break;
}
