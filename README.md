# 💕🌭 Guía de Amor y Estudio — AWS AI Practitioner

Examen de práctica interactivo (65 preguntas) para el examen **AWS Certified AI Practitioner**, con retroalimentación detallada por cada opción (por qué es correcta o incorrecta) y un tema romántico con perritos salchicha canela animados.

## Contenido

- `index.html` — página principal de la app.
- `css/style.css` — estilos, tema romántico y animaciones de los dachshunds.
- `js/questions.js` — banco de las 65 preguntas con explicaciones.
- `js/app.js` — lógica del quiz (selección, corrección, progreso, resumen final).
- `Guía de Estudio - AWS AI Practitioner (Examen de Práctica).md` — guía teórica original en la que se basó el contenido.

## Cómo usarlo localmente

Solo abre `index.html` en el navegador, o sirve la carpeta con cualquier servidor estático, por ejemplo:

```bash
python3 -m http.server 8000
```

y visita `http://localhost:8000`.

## Publicar en GitHub Pages

1. Ve a **Settings → Pages** en este repositorio.
2. En "Build and deployment", selecciona **Deploy from a branch**.
3. Elige la rama `main` y la carpeta `/ (root)`.
4. Guarda; en un par de minutos la página estará disponible en `https://<tu-usuario>.github.io/<nombre-del-repo>/`.

Tu progreso se guarda automáticamente en el navegador (localStorage), así que puedes cerrar y volver a abrir la página sin perder tus respuestas. Usa el botón "🔄 Reiniciar" para empezar de cero.
