# Boda de Paty & Arturo

App web de la boda. Se sube igual que la de Majo & Adam (GitHub → Vercel).

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Toda la app |
| `manifest.json` | Para instalarla como app |
| `sw.js` | Actualización automática |
| `icon-192.png` / `icon-512.png` | Icono de la app |
| `favicon.png` | Icono de la pestaña |
| `og.png` | Imagen al compartir por WhatsApp |
| `img/` | **Súbela como carpeta entera** (fotos, rosas y perritos) |

El resto van sueltos en la raíz; la carpeta `img/` se sube tal cual.

## Lo único que editas: el bloque CONFIGURACIÓN (arriba del `<script>` en `index.html`)

- `fecha` → fecha y hora reales de la boda. **Ahora hay una de ejemplo (14 de marzo de 2027, su día de pi). Cámbiala.**
- `fechaTexto` → cómo se lee en pantalla (o "Por confirmar").
- `lugar` → nombre del lugar (opcional).
- `mapsUrl` → pega el link de Google Maps cuando Paty lo mande. Hasta entonces el botón se ve apagado.
- `whatsapp` → número para dudas, ej. `5215512345678` (sin +, sin espacios). Si lo dejas vacío, el botón se esconde.
- `spotifyEmbed` → el `src` del `<iframe>` de tu playlist de Spotify.
- `playlistUrl` → link normal de la playlist.
- `api` → URL `/exec` del Apps Script (deseos, canciones y confirmaciones). **Vacío = modo demostración** (se guarda solo en ese dispositivo). Con la URL puesta, se sincroniza entre todos.
- `pin` → clave del panel de los novios (ahora `1414`).

## Secciones

Inicio · Nuestra historia · Cómo llegar · Vestuario · Playlist · Deseos · Confirmar.
(Sin hospedaje ni recomendaciones de ciudad, como pediste.)

Los perritos aparecen de fondo en **Cómo llegar** y en **Deseos**, junto a las rosas.

## Pendientes cuando puedas

Fecha real · ubicación de Google Maps · WhatsApp de dudas · playlist de Spotify ·
la URL del Apps Script para sincronizar · la foto de "la primera vez que cocinaron juntos"
(hay un huequito reservado en la historia) · y las fotos que falten.

## Sincronizar deseos/canciones/confirmaciones

Igual que en la de Majo & Adam: una hoja de cálculo de Google con un Apps Script
publicado como aplicación web. Cuando lo tengas, pega su URL `/exec` en `api`.
