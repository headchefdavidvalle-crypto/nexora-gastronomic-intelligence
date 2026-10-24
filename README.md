# NEXORA — Gastronomic Intelligence

Laboratorio gastronómico digital (PWA): barismo, panadería, pizzaiolo, costos, herramientas y bitácora.
Desarrollado por **Headchef David Valle**.

## Publicar en GitHub Pages
1. Sube **todo** el contenido de esta carpeta a la raíz del repositorio (incluida la carpeta `fonts/`).
2. Borra del repositorio `README-GITHUB-PAGES.md` (ya no se usa).
3. Settings → Pages → rama `main`, carpeta `/ (root)`.
4. Abre la URL HTTPS publicada.

## Instalar
- **Android / Chrome / Edge:** menú ⋮ → *Instalar aplicación*.
- **iPhone:** Safari → Compartir → *Añadir a pantalla de inicio*.
- **Computadora (Chrome/Edge):** ícono de instalar en la barra de dirección.

Si antes visitaste una versión anterior, borra una vez los datos del sitio (Chrome → ⓘ junto a la URL → Configuración del sitio → Borrar datos) y recarga.

## Actualizar
Las páginas se cargan primero desde la red, así que los cambios llegan solos. Si cambias íconos o tipografías, sube el número de `VERSION` en `sw.js`.

## Datos y privacidad
Todo se guarda en el dispositivo (localStorage). No hay servidor ni rastreo. Respaldo: Proyecto → *Exportar todos mis datos*.

## Seguridad
`index.html` incluye una Content-Security-Policy que solo permite recursos propios. Al conectar Firebase habrá que añadir sus dominios en `connect-src` y `script-src`.

## Derechos
© 2026 David Valle. Todos los derechos reservados (ver `LICENSE`).
Tipografías Montserrat y Playfair Display bajo SIL Open Font License 1.1 (ver `fonts/`).
