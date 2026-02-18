# Node.js + Express Backend

Este es un proyecto de servidor backend estructurado bajo el patrón **MVC** (Modelo-Vista-Controlador). Ha sido diseñado para ser escalable, limpio y fácil de mantener.

## Tecnologías y Herramientas
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para la creación de APIs.
- **Nodemon**: Herramienta de reinicio automático en desarrollo.
- **Dotenv**: Gestión segura de variables de entorno.
- **Git/GitHub**: Control de versiones con flujo de ramas (`main` y `dev`).

## Estructura del Proyecto
```text
node.js_express/
├── src/
│   ├── controllers/    # Lógica de las funciones
│   ├── routes/         # Definición de rutas (URLs)
│   └── app.js          # Configuración de la aplicación Express
├── .env                # Variables sensibles (No se sube a Git)
├── .gitignore          # Archivos excluidos de Git
├── server.js           # Punto de entrada (Arranca el servidor)
└── package.json        # Dependencias y scripts


Instalación y UsoClonar el repositorio:Bashgit clone <url-de-tu-repo>
Instalar dependencias:Bash npm install

Ejecutar en modo desarrollo:Bash npm run dev

Endpoints Disponibles (API)
GET /    Comprobación de estado del servidor
GET /api/saludar/:nombre             Saludo personalizado(JSON)

Desarrollado por Jorge - 2026