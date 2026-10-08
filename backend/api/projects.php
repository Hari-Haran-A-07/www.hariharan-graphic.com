<?php
require_once __DIR__ . '/../config/database.php';

header('Content-Type: application/json');

$pdo = Database::getConnection();
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            $stmt = $pdo->prepare("SELECT * FROM projects WHERE id = :id");
            $stmt->execute(['id' => $_GET['id']]);
            $project = $stmt->fetch();
            if ($project) {
                // Decode JSON fields
                $project['tools'] = json_decode($project['tools'] ?: '[]', true);
                $project['gallery'] = json_decode($project['gallery'] ?: '[]', true);
                $project['typography'] = json_decode($project['typography'] ?: '[]', true);
                $project['colorSystem'] = json_decode($project['color_system'] ?: '[]', true);
                $project['results'] = json_decode($project['results'] ?: '[]', true);
                $project['metrics'] = json_decode($project['metrics'] ?: '[]', true);
                $project['featured'] = (bool)$project['featured'];
                
                echo json_encode(["status" => "success", "data" => $project]);
            } else {
                http_response_code(404);
                echo json_encode(["status" => "error", "message" => "Project not found"]);
            }
        } else {
            $query = "SELECT * FROM projects";
            $params = [];

            if (isset($_GET['category']) && $_GET['category'] !== 'ALL') {
                $query .= " WHERE category = :category";
                $params['category'] = $_GET['category'];
            }

            if (isset($_GET['featured']) && $_GET['featured'] === '1') {
                $query .= empty($params) ? " WHERE featured = 1" : " AND featured = 1";
            }

            $query .= " ORDER BY number ASC";
            $stmt = $pdo->prepare($query);
            $stmt->execute($params);
            $projects = $stmt->fetchAll();

            foreach ($projects as &$p) {
                $p['tools'] = json_decode($p['tools'] ?: '[]', true);
                $p['gallery'] = json_decode($p['gallery'] ?: '[]', true);
                $p['featured'] = (bool)$p['featured'];
            }

            echo json_encode(["status" => "success", "count" => count($projects), "data" => $projects]);
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        if (!$data || !isset($data['title']) || !isset($data['category'])) {
            http_response_code(400);
            echo json_encode(["status" => "error", "message" => "Title and Category are required"]);
            exit();
        }

        $id = $data['id'] ?? strtolower(preg_replace('/[^a-zA-Z0-9]+/', '-', $data['title']));
        $stmt = $pdo->prepare("
            INSERT OR REPLACE INTO projects (
                id, number, title, subtitle, category, year, client, tools, thumbnail,
                badge, featured, layout_style, accent_color, canva_url, drive_url,
                figma_url, behance_url, github_url, live_demo_url, video_url,
                summary, problem, concept, visual_direction, solution, typography,
                color_system, gallery, results, metrics
            ) VALUES (
                :id, :number, :title, :subtitle, :category, :year, :client, :tools, :thumbnail,
                :badge, :featured, :layout_style, :accent_color, :canva_url, :drive_url,
                :figma_url, :behance_url, :github_url, :live_demo_url, :video_url,
                :summary, :problem, :concept, :visual_direction, :solution, :typography,
                :color_system, :gallery, :results, :metrics
            )
        ");

        $stmt->execute([
            ':id' => $id,
            ':number' => $data['number'] ?? '001',
            ':title' => $data['title'],
            ':subtitle' => $data['subtitle'] ?? '',
            ':category' => $data['category'],
            ':year' => $data['year'] ?? date('Y'),
            ':client' => $data['client'] ?? '',
            ':tools' => json_encode($data['tools'] ?? []),
            ':thumbnail' => $data['thumbnail'] ?? '',
            ':badge' => $data['badge'] ?? '',
            ':featured' => !empty($data['featured']) ? 1 : 0,
            ':layout_style' => $data['layoutStyle'] ?? 'portrait',
            ':accent_color' => $data['accentColor'] ?? '#A100FF',
            ':canva_url' => $data['canvaUrl'] ?? '',
            ':drive_url' => $data['driveUrl'] ?? '',
            ':figma_url' => $data['figmaUrl'] ?? '',
            ':behance_url' => $data['behanceUrl'] ?? '',
            ':github_url' => $data['githubUrl'] ?? '',
            ':live_demo_url' => $data['liveDemoUrl'] ?? '',
            ':video_url' => $data['videoUrl'] ?? '',
            ':summary' => $data['summary'] ?? '',
            ':problem' => $data['problem'] ?? '',
            ':concept' => $data['concept'] ?? '',
            ':visual_direction' => $data['visualDirection'] ?? '',
            ':solution' => $data['solution'] ?? '',
            ':typography' => json_encode($data['typography'] ?? []),
            ':color_system' => json_encode($data['colorSystem'] ?? []),
            ':gallery' => json_encode($data['gallery'] ?? []),
            ':results' => json_encode($data['results'] ?? []),
            ':metrics' => json_encode($data['metrics'] ?? []),
        ]);

        echo json_encode(["status" => "success", "message" => "Project saved successfully", "id" => $id]);
        break;

    case 'DELETE':
        $id = $_GET['id'] ?? null;
        if (!$id) {
            http_response_code(400);
            echo json_encode(["status" => "error", "message" => "Project ID required"]);
            exit();
        }
        $stmt = $pdo->prepare("DELETE FROM projects WHERE id = :id");
        $stmt->execute([':id' => $id]);
        echo json_encode(["status" => "success", "message" => "Project deleted successfully"]);
        break;

    default:
        http_response_code(405);
        echo json_encode(["status" => "error", "message" => "Method not allowed"]);
        break;
}
