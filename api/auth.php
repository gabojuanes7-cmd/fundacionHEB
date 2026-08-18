<?php
/**
 * API de Autenticación
 * POST /api/auth.php?action=login  - Login
 * POST /api/auth.php?action=logout - Logout
 * GET  /api/auth.php?action=check  - Verificar sesión
 */
session_start();
require_once __DIR__ . '/db.php';

$action = $_GET['action'] ?? '';

switch ($action) {
    case 'login':
        requireMethod('POST');
        $data = getJsonInput();
        $email = $data['email'] ?? '';
        $password = $data['password'] ?? '';

        if (empty($email) || empty($password)) {
            jsonResponse(['error' => 'Email y contraseña son requeridos'], 400);
        }

        $stmt = $pdo->prepare("SELECT id, email, password_hash FROM admins WHERE email = ?");
        $stmt->execute([$email]);
        $admin = $stmt->fetch();

        if ($admin && password_verify($password, $admin['password_hash'])) {
            $_SESSION['admin_id'] = $admin['id'];
            $_SESSION['admin_email'] = $admin['email'];
            jsonResponse(['success' => true, 'email' => $admin['email']]);
        } else {
            jsonResponse(['error' => 'Credenciales incorrectas'], 401);
        }
        break;

    case 'logout':
        session_destroy();
        jsonResponse(['success' => true]);
        break;

    case 'check':
        if (!empty($_SESSION['admin_id'])) {
            jsonResponse(['authenticated' => true, 'email' => $_SESSION['admin_email']]);
        } else {
            jsonResponse(['authenticated' => false]);
        }
        break;

    default:
        jsonResponse(['error' => 'Acción no válida'], 400);
}
