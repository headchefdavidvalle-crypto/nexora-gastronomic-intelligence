# NEXORA — versión PWA para GitHub Pages

## Contenido
- `index.html`: aplicación NEXORA.
- `manifest.webmanifest`: nombre, icono y modo de instalación.
- `sw.js`: service worker para caché básica de la aplicación.
- `icons/nexora-icon.svg`: icono de NEXORA.

## Publicar en GitHub Pages
1. Descarga y descomprime este paquete.
2. En el repositorio `headchefdavidvalle-crypto/nexora-gastronomic-intelligence`, sube el contenido de esta carpeta a la raíz del repositorio. No subas la carpeta contenedora como una carpeta adicional.
3. Confirma que `index.html`, `manifest.webmanifest` y `sw.js` queden en la raíz y que `icons/nexora-icon.svg` quede dentro de `icons/`.
4. En GitHub abre **Settings → Pages** y selecciona la rama `main` y la carpeta `/ (root)` si todavía no está configurado.
5. Espera a que termine la publicación y abre la URL HTTPS de GitHub Pages.
6. En Android, abre la web publicada con Chrome y usa el menú ⋮ → **Instalar aplicación** o **Añadir a pantalla de inicio**. En iPhone, abre la URL con Safari → Compartir → **Añadir a pantalla de inicio**.

## Notas
- La instalación PWA requiere que la página esté servida por HTTPS (GitHub Pages lo proporciona).
- El service worker almacena la carcasa de la aplicación; los videos externos y otros recursos remotos necesitan conexión y podrían no estar disponibles sin internet.
- Después de publicar una actualización, si el teléfono mantiene una versión antigua, cierra la app y vuelve a abrirla. En Chrome también puedes borrar los datos del sitio para forzar una instalación limpia.
- Esta entrega no incluye backend nuevo ni cambia Firebase.
