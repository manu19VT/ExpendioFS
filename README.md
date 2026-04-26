
```markdown
# 🍺 Expendio de Bebidas - Sistema de Gestión

Un sistema web Full-Stack basado en el patrón de arquitectura **MVC (Modelo-Vista-Controlador)** para la gestión y administración integral de un Expendio de Bebidas. 

El proyecto permite administrar múltiples rubros del negocio mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar) completamente funcionales y conectadas a una base de datos relacional.

## 🚀 Características Principales

- **Arquitectura MVC:** Separación clara entre la lógica de negocio (Modelos), las rutas/peticiones (Controladores) y la interfaz de usuario (Vistas).
- **Gestión Completa (CRUD):** Control total sobre 6 entidades clave del negocio:
  - 🏬 **Sucursales**
  - 👥 **Empleados**
  - 🤝 **Clientes**
  - 📦 **Proveedores**
  - 🍾 **Productos**
  - 🛒 **Ventas**
- **Dockerizado:** Entorno de desarrollo encapsulado con `docker-compose`, lo que significa que **no necesitas instalar Node.js ni MySQL en tu máquina local**, garantizando que funcione igual en cualquier computadora.
- **Manejo de Errores:** Validaciones interactivas en el Frontend para prevenir eliminaciones accidentales o errores de integridad referencial (Foreign Keys) en la base de datos.
- **Interfaz Responsiva:** Construida con Bootstrap 5, asegurando que el sistema sea fácil de usar en diferentes tamaños de pantalla.

## 🛠️ Stack Tecnológico

**Backend:**
- Node.js
- Express.js (Manejo de rutas y servidor HTTP)
- MySQL2 (Driver para conexión a la base de datos)

**Frontend:**
- HTML5 & CSS3
- JavaScript (Vanilla JS - Fetch API)
- Bootstrap 5

**Infraestructura & Base de Datos:**
- Docker & Docker Compose
- MySQL 8.0

## ⚙️ Requisitos Previos

Dado que el proyecto está contenerizado, el único requisito real es tener instalado Docker en tu sistema.

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (o Docker Engine + Docker Compose)
- Git

## 🏃‍♂️ Cómo ejecutar el proyecto

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd ExpendioFS
   ```

2. **Levantar los contenedores con Docker:**
   Abre tu terminal en la raíz del proyecto y ejecuta:
   ```bash
   docker compose up --build
   ```
   *Nota: La primera vez que se ejecute, Docker descargará las imágenes de Node y MySQL, instalará las dependencias necesarias y ejecutará el script SQL (`expendio_bebidas.sql`) para inicializar las tablas automáticamente.*

3. **Acceder a la aplicación:**
   Abre tu navegador web y visita: 
   👉 **http://localhost:3000**

## 📂 Estructura del Proyecto

```text
ExpendioFS/
├── config/                 # Lógica de conexión a MySQL
├── controllers/            # Controladores (Lógica de negocio y manejo de peticiones)
├── models/                 # Modelos (Consultas SQL e interacción con la BD)
├── public/                 # Archivos estáticos del Frontend
│   ├── css/                # Estilos personalizados
│   ├── js/                 # Lógica del cliente (Peticiones Fetch hacia la API)
│   └── *.html              # Vistas de la aplicación
├── routes/                 # Definición de extremos (Endpoints) REST API
├── expendio_bebidas.sql    # Archivo de inicialización de la Base de Datos
├── server.js               # Archivo principal de Express (Entry point)
└── docker-compose.yml      # Orquestador de contenedores (App Node + BD MySQL)
```

## 🧠 Flujo de Datos (Cómo funciona)

1. El usuario interactúa con la interfaz gráfica en las páginas estáticas (`public/html`).
2. Eventos como guardar o eliminar ejecutan código `JavaScript` (js) que realiza peticiones asíncronas (`fetch`) a la API de Node.
3. El server.js recibe la solicitud HTTP y la dirige al enrutador adecuado (routes).
4. El enrutador invoca a su respectivo `Controlador`, quien llama al `Modelo`.
5. El Modelo ejecuta la consulta directamente en el contenedor de **MySQL** y retorna los datos al Controlador para responder con un objeto `JSON` al Frontend.
```
