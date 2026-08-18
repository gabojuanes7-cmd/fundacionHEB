<?php
/**
 * Script de instalación automática
 * Ejecutar UNA VEZ desde el navegador: http://localhost/HechoEnBolivia/database/setup.php
 * Crea la base de datos, las tablas y el usuario admin por defecto.
 */
require_once __DIR__ . '/config.php';

echo "<h1>Instalación de la Base de Datos - Hecho en Bolivia</h1>";
echo "<pre>";

try {
    // 1. Conectar sin seleccionar DB
    $pdo = new PDO("mysql:host=" . DB_HOST . ";charset=" . DB_CHARSET, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);
    echo "✓ Conectado a MySQL\n";

    // 2. Crear base de datos
    $pdo->exec("CREATE DATABASE IF NOT EXISTS `" . DB_NAME . "` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
    echo "✓ Base de datos '" . DB_NAME . "' creada/verificada\n";

    // 3. Seleccionar DB
    $pdo->exec("USE `" . DB_NAME . "`");

    // 4. Leer y ejecutar schema.sql
    $lines = explode("\n", file_get_contents(__DIR__ . '/schema.sql'));
    $cleanSchema = "";
    foreach($lines as $line) {
        $line = trim($line);
        if(!str_starts_with($line, '--')) {
            $cleanSchema .= $line . "\n";
        }
    }
    
    // Separar por sentencias
    $statements = array_filter(
        array_map('trim', explode(';', $cleanSchema)),
        function($s) { return !empty($s); }
    );

    foreach ($statements as $sql) {
        $sql = trim($sql);
        if (empty($sql) || str_starts_with($sql, '--')) continue;
        
        try {
            $pdo->exec($sql);
            // Extract table name for display
            if (preg_match('/CREATE TABLE.*?`?(\w+)`?/i', $sql, $m)) {
                echo "✓ Tabla '{$m[1]}' creada\n";
            } elseif (preg_match('/INSERT/i', $sql)) {
                echo "✓ Datos iniciales insertados\n";
            } elseif (preg_match('/CREATE DATABASE/i', $sql)) {
                // Already handled above
            } elseif (preg_match('/USE /i', $sql)) {
                // Already handled above
            }
        } catch (PDOException $e) {
            echo "⚠ " . $e->getMessage() . "\n";
        }
    }

    // 5. Crear admin con contraseña hasheada
    $adminEmail = 'admin@hechoenbolivia.org';
    $adminPass = password_hash('admin123', PASSWORD_DEFAULT);
    
    $stmt = $pdo->prepare("INSERT INTO admins (email, password_hash) VALUES (?, ?) ON DUPLICATE KEY UPDATE password_hash = ?");
    $stmt->execute([$adminEmail, $adminPass, $adminPass]);
    echo "✓ Usuario admin creado\n";
    echo "  Email: $adminEmail\n";
    echo "  Contraseña: admin123\n";
    echo "  ⚠ ¡CAMBIA LA CONTRASEÑA EN PRODUCCIÓN!\n";

    echo "\n====================================\n";
    echo "✓ INSTALACIÓN COMPLETADA\n";
    echo "====================================\n";
    echo "\nAhora puedes:\n";
    echo "1. Ir al sitio: <a href='../index.php'>Página Principal</a>\n";
    echo "2. Ir al admin: <a href='../admin/admin.php'>Panel de Administración</a>\n";
    echo "   (Email: admin@hechoenbolivia.org / Contraseña: admin123)\n";

} catch (PDOException $e) {
    echo "✗ ERROR: " . $e->getMessage() . "\n";
    echo "\n¿XAMPP está corriendo? Asegúrate de que Apache y MySQL estén activos.\n";
}

echo "</pre>";
