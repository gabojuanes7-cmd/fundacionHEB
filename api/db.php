<?php
/**
 * Conexión compartida a la base de datos (PDO)
 * Todos los endpoints de la API incluyen este archivo.
 */
require_once __DIR__ . '/../database/config.php';

// Headers CORS y JSON para todas las APIs
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Manejar preflight OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Conexión PDO
try {
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error de conexión a la base de datos']);
    exit;
}

// Funciones helper
function jsonResponse($data, $code = 200) {
    http_response_code($code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function getJsonInput() {
    return json_decode(file_get_contents('php://input'), true) ?? [];
}

function requireAuth() {
    session_start();
    if (empty($_SESSION['admin_id'])) {
        jsonResponse(['error' => 'No autorizado'], 401);
    }
}

function requireMethod($methods) {
    if (!in_array($_SERVER['REQUEST_METHOD'], (array)$methods)) {
        jsonResponse(['error' => 'Método no permitido'], 405);
    }
}
