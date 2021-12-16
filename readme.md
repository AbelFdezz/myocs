# PROPÓSITO Y FUNCIONALIDADES DE LA WEB:

Una web para compartir perfiles e historias de personajes, enfocada a personas que juegan a rol, o que escriben en general. Es común que los jugadores hagan sus perfiles en Google drive o sitios similares, o incluso que los almacenen en carpetas perdidas de sus equipos, y se queden pedidos sin que nadie los lea. Ya hay webs con un montón de servicios, incluso para jugar, pero ninguna se centra en la redacción de personajes y trasfondos. Aquí podrán dar rienda suelta a su imaginación.

## FUNCIONALIDADES DE LA WEB:

## Perfíl de usuario :

### Obligatorio:

- Solo el nombre de usuario, correo y contraseña. El resto de información será opcional. Aquí venimos a vivir la vida de nuestros pesonajes, el resto no es esencial.

### Datos opcionales:

Siempre debería existir la opción de mostrarnos al mundo, y aquí se podrá dar información sobre nosotros, e incluso enlaces a otras plataformas / redes sociales.

- Nombre (real)
- Foto (con créditos)
- Edad
- Pronombres
- Sobre mí
- Contacto (correo personal, redes sociales, mensaje directo, web, linktree, etc)

## CREACIÓN DE PERSONAJE
El eje pricipal de esta página son las historias y los personajes. A través de un formulario extensísimo se podrá dar forma a vuestras creaciones.

- Nombre
- Juego al que pertenecerá
- Estado (“jugando a”, “murió en”, “va a jugar en” y más opciones de ese estilo)
- Autoría
- Imagen
- TRASFONDO
- FORMULARIO

### El trasfondo:

Será la sección donde desarrollar la historia del personaje. De momento no habrá opción de agregar amigos, pero sí estará disponible la opción de mencionar y tagear a los personajes  que aparezcan en el trasfondo de tu personaje, creando así una red de personajes que jueguen, vayan a jugar o que hayan jugado juntos.  El propósito es hacer que se relacionen nuestros personajes, no nosotros.

### El formulario:

Será el contenedor de información principal a la hora de crear un personaje.Tendrá multitud de opciones a rellenar para detallar todo lo posible su personalidad. Con el tiepmo el formulario podría ir creciendo, ofreciendo más posibilidades, pero nunca decreciendo. Salvo trasfondo, y nombre, el resto de datos son totalmente opcionales. Cada uno es libre de dar forma a sus personajes como le venga en gana.

# Recursos

Dedicaré una página con enlaces a herramientas externas de utilidad, como creación de avatares, creación de mapas, páginas de nombres aleatorios, etc) y a artistas del mundillo (ilustradores, artesanos). A medida que reciba recomendaciones iré poniendo más enlaces de interés, o incluso desarrollando mis propias herramientas de este tipo.

# "Sobre la página” o "sobre nosotros"

Apartado en el que se explicará el concepto de la web, con un botón de reportar incidencias, un  buzón de sugerencias y un correo de  contacto 

---
---
---

# BACKEND:

# Dependencias en uso:

## Encriptación
"bcrypt": "^5.0.1",

## Ocultar credenciales
 "dotenv": "^10.0.0",

## Estructura de la aplicación
"express": "^4.17.1",

## Creación del token
 "jsonwebtoken": "^8.5.1",

## Librería utilizada
"mongoose": "^6.0.12"

# Instrucciones de instalación
## -Escribe "npm install" para instalar todas las dependencias

## - "npm run server" para iniciar el servidor
## - Crea cuenta en MongoDB Atlas
## - Crear un archivo .env para ocultar las credenciales
## - CRUD y conexión con la base de datos Mongo Atlas
## - ceación de modelos (Usuarios, Personajes, Trasfondos, Juegos)
## - Establecer rutas de creación, edición y borrado de cada uno de los modelos, según necesidades
## - Configurar la autenticación de usuarios con JWT
---
---
---
# FRONTEND:

# Dependencias en uso:

## Front realizado con React 
    "react": "^17.0.2",

 ## Peticiones y envío de datos con el backend
   "axios": "^0.24.0",

## Envío de imágenes al servidor
    "cloudinary-react": "^1.7.0",

## React Bootstrap para ultimar el diseño
    "react-bootstrap": "^2.0.2",

## Proxy para proteger y ocultar la dirección del servidor
        "react-bootstrap": "^2.0.2",

