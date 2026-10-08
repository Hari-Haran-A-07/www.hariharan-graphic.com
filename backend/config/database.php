<?php
/**
 * Database & Environment Configuration
 * Supports zero-configuration SQLite with MySQL failover
 */

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

class Database {
    private static $pdo = null;

    public static function getConnection() {
        if (self::$pdo === null) {
            $dbPath = __DIR__ . '/../database/portfolio.sqlite';
            $dbDir = dirname($dbPath);

            if (!is_dir($dbDir)) {
                mkdir($dbDir, 0755, true);
            }

            try {
                // Default to portable, zero-configuration SQLite
                self::$pdo = new PDO("sqlite:" . $dbPath);
                self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                self::$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
                
                // Initialize database tables if not present
                self::initializeTables(self::$pdo);
            } catch (PDOException $e) {
                // Fallback / MySQL configuration
                $host = getenv('DB_HOST') ?: '127.0.0.1';
                $dbname = getenv('DB_NAME') ?: 'hariharan_portfolio';
                $user = getenv('DB_USER') ?: 'root';
                $pass = getenv('DB_PASS') ?: '';
                
                try {
                    self::$pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $user, $pass);
                    self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    self::$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
                    self::initializeTables(self::$pdo);
                } catch (PDOException $mysqlError) {
                    http_response_code(500);
                    echo json_encode(["status" => "error", "message" => "Database connection failed: " . $mysqlError->getMessage()]);
                    exit();
                }
            }
        }
        return self::$pdo;
    }

    private static function initializeTables($pdo) {
        // Projects Table
        $pdo->exec("
            CREATE TABLE IF NOT EXISTS projects (
                id TEXT PRIMARY KEY,
                number TEXT NOT NULL,
                title TEXT NOT NULL,
                subtitle TEXT,
                category TEXT NOT NULL,
                year TEXT,
                client TEXT,
                tools TEXT,
                thumbnail TEXT,
                badge TEXT,
                featured INTEGER DEFAULT 0,
                layout_style TEXT DEFAULT 'portrait',
                accent_color TEXT DEFAULT '#A100FF',
                canva_url TEXT,
                drive_url TEXT,
                figma_url TEXT,
                behance_url TEXT,
                github_url TEXT,
                live_demo_url TEXT,
                video_url TEXT,
                summary TEXT,
                problem TEXT,
                concept TEXT,
                visual_direction TEXT,
                solution TEXT,
                typography TEXT,
                color_system TEXT,
                gallery TEXT,
                results TEXT,
                metrics TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        ");

        // Vault Assets Table
        $pdo->exec("
            CREATE TABLE IF NOT EXISTS vault_assets (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                category TEXT NOT NULL,
                format TEXT NOT NULL,
                year TEXT,
                tools TEXT,
                thumbnail TEXT,
                preview_url TEXT,
                canva_url TEXT,
                drive_url TEXT,
                figma_url TEXT,
                dimensions TEXT,
                description TEXT,
                tags TEXT,
                featured INTEGER DEFAULT 0,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        ");

        // Contacts & Inquiries Table
        $pdo->exec("
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                project_type TEXT,
                budget TEXT,
                message TEXT NOT NULL,
                ip_address TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        ");
    }
}
