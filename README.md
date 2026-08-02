# Boda de Paty & Arturo

App web de la boda, con la misma estética que la de Majo & Adam (Baloo 2 / Outfit / Space Mono,
tarjetas crema, fotos tipo instantánea y muro de corcho). Se sube igual: GitHub → Vercel.

## ⚠️ Imágenes temporales (cámbialas)
- `img/rose-a.png`, `rose-b.png`, `rose-c.png`, `flor-2.png`, `flor-6.png` → flores de fondo PROVISIONALES.
  Reemplázalas por tus 6 flores PNG (las de Majo & Adam u otras nuevas).
- `img/corcho.jpg` → textura de corcho PROVISIONAL. Reemplázala por la tuya.
Basta con subir tus archivos con esos mismos nombres para que entren solos.

## Archivos
| Archivo | Qué es |
|---|---|
| `index.html` | Toda la app |
| `manifest.json` / `sw.js` | Instalación + actualización automática |
| `icon-192.png` / `icon-512.png` / `favicon.png` / `og.png` | Iconos e imagen al compartir |
| `img/` | **Súbela como carpeta entera** (fotos, flores, corcho y perritos) |

## Solo editas el bloque CONFIGURACIÓN (arriba del `<script>`)
- `fecha` → fecha y hora reales. **Ahora hay una de ejemplo (14 mar 2027). Cámbiala.**
- `fechaTexto`, `lugar`, `mapsUrl`, `whatsapp`, `spotifyEmbed`, `playlistUrl`.
- `api` → URL `/exec` del Apps Script. **Vacío = modo demostración** (guarda en cada dispositivo).
- `pin` → clave del panel de los novios (ahora `1414`).

## Secciones
Inicio · Nuestra historia · Cómo llegar · Vestuario · Playlist · Deseos · Confirmar.
(Sin hospedaje ni recomendaciones de ciudad.) Los perritos salen de fondo en *Cómo llegar* y *Deseos*.

## Pendientes
Flores y corcho reales · fecha · ubicación Maps · WhatsApp · playlist Spotify ·
URL del Apps Script · la foto de "la primera vez que cocinaron juntos" (hay un hueco reservado).
