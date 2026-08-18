<?php
/**
 * API de Configuración
 * GET  /api/configuracion.php?key=redes_sociales     - Leer config
 * POST /api/configuracion.php?key=redes_sociales     - Guardar config (requiere auth)
 */
session_start();
require_once __DIR__ . '/db.php';

$key = $_GET['key'] ?? '';
$validKeys = ['redes_sociales', 'datos_contacto', 'junta_directiva', 'pulso_pdfs'];

if (!in_array($key, $validKeys)) {
    jsonResponse(['error' => 'Clave de configuración no válida'], 400);
}

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $stmt = $pdo->prepare("SELECT valor FROM configuracion WHERE clave = ?");
        $stmt->execute([$key]);
        $row = $stmt->fetch();
        if ($row) {
            jsonResponse(json_decode($row['valor'], true));
        } else {
            jsonResponse(null);
        }
        break;

    case 'POST':
        if (empty($_SESSION['admin_id'])) {
            jsonResponse(['error' => 'No autorizado'], 401);
        }
        $data = getJsonInput();
        $jsonValue = json_encode($data, JSON_UNESCAPED_UNICODE);

        $stmt = $pdo->prepare("INSERT INTO configuracion (clave, valor) VALUES (?, ?) ON DUPLICATE KEY UPDATE valor = ?");
        $stmt->execute([$key, $jsonValue, $jsonValue]);

        jsonResponse(['success' => true]);
        break;

    default:
        jsonResponse(['error' => 'Método no permitido'], 405);
}
