<?php
/**
 * Configuración de la Base de Datos
 * NUNCA subir este archivo a un repositorio público
 */

define('DB_HOST', 'localhost');
define('DB_NAME', 'hechoenbolivia');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_CHARSET', 'utf8mb4');

// Credenciales del administrador (cambiar en producción)
define('ADMIN_EMAIL', 'admin@hechoenbolivia.org');
define('ADMIN_PASSWORD_HASH', password_hash('admin123', PASSWORD_DEFAULT));
