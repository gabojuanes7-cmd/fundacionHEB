<?php
/**
 * API CRUD genérica para todas las tablas de contenido
 * 
 * Endpoints:
 *   GET    /api/crud.php?table=noticias              - Listar (público)
 *   POST   /api/crud.php?table=noticias              - Crear (requiere auth)
 *   PUT    /api/crud.php?table=noticias&id=1          - Actualizar (requiere auth)
 *   DELETE /api/crud.php?table=noticias&id=1          - Eliminar (requiere auth)
 */
session_start();
require_once __DIR__ . '/db.php';

// Tablas permitidas y sus campos editables
$TABLES = [
    'noticias' => ['titulo', 'fecha', 'categoria', 'contenido', 'image_url'],
    'directorio' => ['nombre', 'tipo', 'categoria', 'link', 'logo_url'],
    'publicaciones' => ['titulo', 'portada_url', 'pdf_url'],
    'actividades' => ['titulo', 'afiche_url', 'link_url'],
    'capacitaciones' => ['titulo', 'imagen_url', 'contacto_url', 'fecha_creacion'],
    'galeria' => ['titulo', 'image_url'],
    'pulso_noticias' => ['titulo', 'fecha', 'categoria', 'url', 'tipo'],
    'pulso_banners' => ['titulo', 'image_url', 'url'],
    'pulso_patrocinadores' => ['nombre', 'logo_url', 'link'],
];

// Tablas que pueden escribir sin auth (formularios públicos)
$PUBLIC_WRITE_TABLES = ['solicitudes', 'solicitudes_publicidad', 'suscriptores_pulso'];
$PUBLIC_WRITE_FIELDS = [
    'solicitudes' => ['tipo', 'nombre', 'email', 'telefono', 'empresa', 'mensaje', 'departamento', 'rubro', 'experiencia', 'motivacion', 'curso'],
    'solicitudes_publicidad' => ['empresa', 'contacto', 'email', 'telefono', 'tipo_publicidad', 'mensaje'],
    'suscriptores_pulso' => ['email'],
];

$table = $_GET['table'] ?? '';
$id = $_GET['id'] ?? null;
$method = $_SERVER['REQUEST_METHOD'];

// Validar tabla
$allTables = array_merge(array_keys($TABLES), $PUBLIC_WRITE_TABLES);
if (!in_array($table, $allTables)) {
    jsonResponse(['error' => 'Tabla no válida'], 400);
}

switch ($method) {
    // ========== LEER (público) ==========
    case 'GET':
        $limit = intval($_GET['limit'] ?? 100);
        $stmt = $pdo->prepare("SELECT * FROM `$table` ORDER BY timestamp DESC LIMIT ?");
        $stmt->execute([$limit]);
        $rows = $stmt->fetchAll();
        jsonResponse($rows);
        break;

    // ========== CREAR ==========
    case 'POST':
        $data = getJsonInput();

        // Tablas públicas (formularios) no requieren auth
        if (in_array($table, $PUBLIC_WRITE_TABLES)) {
            $fields = $PUBLIC_WRITE_FIELDS[$table];
        } else {
            // Tablas de contenido requieren auth
            if (empty($_SESSION['admin_id'])) {
                jsonResponse(['error' => 'No autorizado'], 401);
            }
            $fields = $TABLES[$table] ?? [];
        }

        $data['timestamp'] = round(microtime(true) * 1000); // ms like JS Date.now()

        $columns = [];
        $placeholders = [];
        $values = [];

        foreach ($fields as $field) {
            if (isset($data[$field])) {
                $columns[] = "`$field`";
                $placeholders[] = '?';
                $values[] = $data[$field];
            }
        }

        // Siempre agregar timestamp
        $columns[] = '`timestamp`';
        $placeholders[] = '?';
        $values[] = $data['timestamp'];

        $sql = "INSERT INTO `$table` (" . implode(', ', $columns) . ") VALUES (" . implode(', ', $placeholders) . ")";
        $stmt = $pdo->prepare($sql);
        $stmt->execute($values);

        jsonResponse(['success' => true, 'id' => $pdo->lastInsertId()], 201);
        break;

    // ========== ACTUALIZAR ==========
    case 'PUT':
        if (empty($_SESSION['admin_id'])) {
            jsonResponse(['error' => 'No autorizado'], 401);
        }
        if (!$id) {
            jsonResponse(['error' => 'ID requerido'], 400);
        }

        $data = getJsonInput();
        $fields = $TABLES[$table] ?? [];

        $sets = [];
        $values = [];

        foreach ($fields as $field) {
            if (isset($data[$field])) {
                $sets[] = "`$field` = ?";
                $values[] = $data[$field];
            }
        }

        // Update timestamp
        $sets[] = "`timestamp` = ?";
        $values[] = round(microtime(true) * 1000);
        $values[] = $id;

        $sql = "UPDATE `$table` SET " . implode(', ', $sets) . " WHERE id = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute($values);

        jsonResponse(['success' => true]);
        break;

    // ========== ELIMINAR ==========
    case 'DELETE':
        if (empty($_SESSION['admin_id'])) {
            jsonResponse(['error' => 'No autorizado'], 401);
        }
        if (!$id) {
            jsonResponse(['error' => 'ID requerido'], 400);
        }

        $stmt = $pdo->prepare("DELETE FROM `$table` WHERE id = ?");
        $stmt->execute([$id]);

        jsonResponse(['success' => true]);
        break;

    default:
        jsonResponse(['error' => 'Método no permitido'], 405);
}
