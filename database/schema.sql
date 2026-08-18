-- =============================================
-- Base de Datos: Fundación Hecho en Bolivia
-- =============================================

CREATE DATABASE IF NOT EXISTS hechoenbolivia
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE hechoenbolivia;

-- Tabla de administradores
CREATE TABLE IF NOT EXISTS admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar admin por defecto (contraseña: admin123 - CAMBIAR EN PRODUCCIÓN)
INSERT INTO admins (email, password_hash) VALUES
  ('admin@hechoenbolivia.org', '$2y$10$placeholder')
ON DUPLICATE KEY UPDATE email=email;

-- Noticias de la Fundación
CREATE TABLE IF NOT EXISTS noticias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(500) NOT NULL,
  fecha VARCHAR(50),
  categoria VARCHAR(100),
  contenido TEXT,
  image_url TEXT,
  timestamp BIGINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Directorio de empresas
CREATE TABLE IF NOT EXISTS directorio (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(500) NOT NULL,
  tipo VARCHAR(50),
  categoria VARCHAR(100),
  link TEXT,
  logo_url TEXT,
  timestamp BIGINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Publicaciones (revistas, dossier)
CREATE TABLE IF NOT EXISTS publicaciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(500) NOT NULL,
  portada_url TEXT,
  pdf_url TEXT,
  timestamp BIGINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Actividades y eventos
CREATE TABLE IF NOT EXISTS actividades (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(500) NOT NULL,
  afiche_url TEXT,
  link_url TEXT,
  timestamp BIGINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Capacitaciones (Academia FHB)
CREATE TABLE IF NOT EXISTS capacitaciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(500) NOT NULL,
  imagen_url TEXT,
  contacto_url TEXT,
  fecha_creacion VARCHAR(50),
  timestamp BIGINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Galería de fotos
CREATE TABLE IF NOT EXISTS galeria (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(500) NOT NULL,
  image_url TEXT NOT NULL,
  timestamp BIGINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Solicitudes (contacto, certificación, voluntariado, cursos)
CREATE TABLE IF NOT EXISTS solicitudes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tipo VARCHAR(100),
  nombre VARCHAR(500),
  email VARCHAR(255),
  telefono VARCHAR(50),
  empresa VARCHAR(500),
  mensaje TEXT,
  departamento VARCHAR(100),
  rubro VARCHAR(100),
  experiencia TEXT,
  motivacion TEXT,
  curso VARCHAR(500),
  timestamp BIGINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Solicitudes de publicidad (Pulso Económico)
CREATE TABLE IF NOT EXISTS solicitudes_publicidad (
  id INT AUTO_INCREMENT PRIMARY KEY,
  empresa VARCHAR(500),
  contacto VARCHAR(500),
  email VARCHAR(255),
  telefono VARCHAR(50),
  tipo_publicidad VARCHAR(100),
  mensaje TEXT,
  timestamp BIGINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Suscriptores de Pulso Económico
CREATE TABLE IF NOT EXISTS suscriptores_pulso (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  timestamp BIGINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Noticias de Pulso Económico
CREATE TABLE IF NOT EXISTS pulso_noticias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(500) NOT NULL,
  fecha VARCHAR(50),
  categoria VARCHAR(100),
  url TEXT,
  tipo VARCHAR(50) DEFAULT 'nacional',
  timestamp BIGINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Banners publicitarios de Pulso
CREATE TABLE IF NOT EXISTS pulso_banners (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(500),
  image_url TEXT,
  url TEXT,
  timestamp BIGINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Patrocinadores de Pulso
CREATE TABLE IF NOT EXISTS pulso_patrocinadores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(500) NOT NULL,
  logo_url TEXT,
  link TEXT,
  timestamp BIGINT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Configuración general (redes sociales, contacto, junta directiva, PDFs)
CREATE TABLE IF NOT EXISTS configuracion (
  clave VARCHAR(100) PRIMARY KEY,
  valor JSON,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
