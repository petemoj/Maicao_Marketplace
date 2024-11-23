# Maicao Marketplace - Proyecto MERN de comercio electrónico
Este es un proyecto de comercio electrónico desarrollado utilizando la pila MERN (MongoDB, Express.js, React.js, Node.js). Está diseñado para demostrar la funcionalidad y las características de un sitio web de comercio electrónico moderno.

## Características
- Autenticación y autorización de usuarios:** Registro de usuarios implementado, inicio de sesión y autorización basada en JWT para un acceso seguro a los datos específicos del usuario.
- **Catálogo de productos:** Mostrar productos con categorías y proporcionar una funcionalidad de búsqueda para que los usuarios encuentren productos fácilmente.
- Gestión de la cesta de la compra:** Permitir a los usuarios añadir y eliminar productos de sus cestas de la compra, ver el contenido de la cesta, guardar más tarde, y proceder a la compra.
- Procesamiento de pago seguro (integración con Stripe):** Implementar la pasarela de pago Stripe para pagos en línea seguros y convenientes. Los usuarios pueden completar sus compras utilizando tarjetas de crédito/débito.
- Historial de pedidos del usuario y gestión de pedidos:** Almacenar el historial de pedidos del usuario y proporcionar una interfaz fácil de usar para la gestión de pedidos, incluyendo el estado del pedido y el seguimiento.
- Panel de administración para la gestión de productos:** Los usuarios administradores pueden gestionar los listados de productos, las categorías y ver los pedidos. Accesible a través de la ruta `/dashboard/admin` (se requiere inicio de sesión).
- **Diseño responsivo con Tailwind CSS y Material UI:** Utiliza Tailwind CSS y Material UI para interfaces de usuario responsivas y visualmente atractivas tanto en dispositivos móviles como de escritorio.
- Cifrado de contraseñas con Bcrypt:** Almacene de forma segura las contraseñas de los usuarios mediante hashing y salting utilizando la biblioteca bcrypt.
- Almacenamiento de imágenes con Cloudinary:** Almacene y gestione imágenes de productos utilizando Cloudinary para un almacenamiento y recuperación de imágenes eficiente.

## Requisitos
Antes de empezar, asegúrate de que cumples los siguientes requisitos:

- Node.js y npm instalados
- Instancia MongoDB (local o remota)
## Configuración
1. **Configurar el backend
   - Navega al directorio del backend:
     ``sh
     cd backend
     ```
   - Crea un archivo `.env` y añade tus variables de entorno (mira el ejemplo de abajo).
   - Instala las dependencias:
     ``sh
     npm install
     ```
   - Inicia el servidor backend:
     ``sh
     npm run dev
     ```
2. **Configurar el frontend
   - Navega al directorio del frontend:
     ``sh
     cd ../cliente
     ```
   - Crea un archivo `.env` y añade tus variables de entorno (mira el ejemplo de abajo).
   - Instala las dependencias:
     ``sh
     npm install
     ```
   - Inicia el servidor de desarrollo frontend:
     ``sh
     npm run dev
     ```
3. **Accede a la aplicación:**
   - Visita `http://localhost:5173` en tu navegador.
   - Puede acceder al panel de administración en `http://localhost:5173/dashboard/admin` (se requiere inicio de sesión).

## Variables de entorno
### Backend (.env)

```plaintext
PORT=8080
MONGODB_URI=SU_MONGODB_BASE_URI/nombre_base_de_datos
JWT_SECRET=CADENA_ALEATORIA
CLOUD_NAME=NOMBRE_CLOUDINARIO_CLOUD
CLOUD_API_KEY=CLAVE_API_CLOUDINARY
CLOUD_SECRET=CLAVE_SECRETA_CLOUDINARY
STRIPE_SECRET_KEY=TU_CLAVE_SECRETA_DE_STRIPE
```
### Frontend (.env)
```plaintext
VITE_API=http://localhost:8080
VITE_STRIPE_PUBLISH_KEY=TU_CLAVE_DE_PUBLICACIÓN_DE_LA_TIRA
VITE_STRIPE_SECRET_KEY=TU_CLAVE_SECRETA_STRIPE
VITE_SERVER_URL=SERVER_BASE_URL_WITHOUT_TRAILING_SLASH (en caso de que desee desplegar el servidor url- https://e-commerce-mgtd.onrender.com sin ningún / al final)
```
