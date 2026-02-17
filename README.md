# Visual Artist Portfolio

Portafolio profesional para artista visual desarrollado con HTML5 semántico, CSS3 moderno y JavaScript vanilla. Desplegado en GitHub Pages.

## 🚀 Características

- **Diseño responsivo** - Se adapta perfectamente a móvil, tablet y escritorio
- **Galería filtrable** - Obras organizadas por categorías (Pintura, Escultura, Fotografía, Digital)
- **Lightbox** - Visualizador de imágenes en detalle con navegación por teclado
- **Navegación suave** - Scroll suave entre secciones
- **Formulario de contacto** - Integrado con Formspree para envío de emails
- **Accesibilidad WCAG** - Semantic HTML, ARIA labels, navegación por teclado
- **Animaciones suaves** - Transiciones y efectos hover elegantes
- **Optimizado** - Imágenes con lazy loading, código optimizado

## 📁 Estructura del Proyecto

```
luispri2001.github.io/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Todos los estilos
├── js/
│   └── main.js            # Funcionalidad JavaScript
├── images/
│   ├── hero.jpg           # Imagen hero (reemplazar)
│   ├── artist-portrait.jpg # Retrato del artista
│   └── gallery/           # Imágenes de obras
├── plans/
│   └── SPEC.md            # Especificación técnica
└── README.md              # Este archivo
```

## 🛠️ Personalización

### 1. Actualizar información del artista

Edita [`index.html`](index.html) y busca:
- Nombre del artista en la sección Hero (línea ~100)
- Biografía en la sección About (líneas ~150-165)
- Datos de contacto en la sección Contact (líneas ~280-300)

### 2. Agregar tus propias imágenes

Reemplaza los archivos en la carpeta `images/`:
- `hero.jpg` - Imagen de fondo del hero (1920x1080px recomendado)
- `artist-portrait.jpg` - Tu foto de perfil (400x500px)
- `gallery/obra-01.jpg` hasta `obra-12.jpg` - Tus obras

### 3. Actualizar la galería

Edita [`js/main.js`](js/main.js) y modifica el array `galleryData`:

```javascript
const galleryData = [
    {
        id: 1,
        title: "Título de tu obra",
        category: "pintura", // pintura, escultura, fotografia, digital
        image: "images/gallery/tu-imagen.jpg",
        description: "Técnica y dimensiones"
    },
    // ... más obras
];
```

### 4. Configurar el formulario de contacto

1. Ve a [Formspree](https://formspree.io/) y crea una cuenta gratuita
2. Crea un nuevo formulario
3. Copia el URL del formulario
4. Actualiza el atributo `action` en [`index.html`](index.html) línea ~210:

```html
<form class="contact-form" id="contact-form" action="TU_URL_FORMSPREE" method="POST">
```

### 5. Actualizar redes sociales

Edita los enlaces en [`index.html`](index.html) líneas ~320-350:
- Instagram: `href="https://instagram.com/tu-perfil"`
- Behance: `href="https://behance.net/tu-perfil"`
- LinkedIn: `href="https://linkedin.com/in/tu-perfil"`

## 📱 Despliegue en GitHub Pages

### ✅ Tu sitio está listo para GitHub Pages

Este proyecto ya está configurado correctamente con:
- ✅ Rutas relativas en todos los archivos
- ✅ Archivo `.nojekyll` incluido (evita procesamiento de Jekyll)
- ✅ Estructura optimizada para GitHub Pages

### Opción 1: Subir desde Git CLI (Recomendado)

Este repositorio ya está en GitHub. Para actualizar el sitio:

```bash
# Añade todos los cambios
git add .

# Haz commit
git commit -m "feat: actualizar sitio web"

# Sube a GitHub
git push origin main
```

**Tu sitio estará disponible en:** `https://luispri2001.github.io`

⏱️ **Tiempo de despliegue:** 1-2 minutos después del push

### Opción 2: Verificar configuración de GitHub Pages

Si es tu primera vez, asegúrate de que GitHub Pages está activado:

1. Ve a tu repositorio en GitHub: `https://github.com/luispri2001/luispri2001.github.io`
2. Click en **Settings** → **Pages**
3. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click en **Save**
5. Espera 1-2 minutos

### Opción 3: Verificar que todo funciona

Después de hacer push, verifica tu sitio:

```bash
# Ver el estado de tu repo
git status

# Ver el último commit
git log -1

# Abrir el sitio en el navegador (Linux)
xdg-open https://luispri2001.github.io

# O simplemente abre: https://luispri2001.github.io
```

### 🔍 Solución de problemas

**Si el sitio no carga:**
1. Verifica que el archivo `.nojekyll` existe en la raíz
2. Asegúrate de que los archivos están en la rama `main`
3. Revisa el estado de despliegue en Settings → Pages
4. Espera 2-3 minutos (el primer despliegue puede tardar más)

**Si las imágenes no cargan:**
- Todas las rutas son relativas, así que deberían funcionar automáticamente
- Verifica que las imágenes existen en la carpeta `images/`

## 🎨 Personalización de Estilos

Edita [`css/styles.css`](css/styles.css) para cambiar:

### Colores principales
```css
:root {
    --bg-primary: #0D0D0D;    /* Fondo principal */
    --accent-primary: #C9A962; /* Color de acento (oro) */
    --text-primary: #F5F5F5;    /* Color de texto principal */
}
```

### Tipografías
Las fuentes están configuradas en la sección `:root`:
- Encabezados: `Cormorant Garamond` (serif)
- Cuerpo: `Raleway` (sans-serif)

## ♿ Accesibilidad

El sitio cumple con las pautas WCAG 2.1 nivel AA:
- Navegación por teclado completa
- Roles ARIA apropiados
- Contraste de color adecuado
- Texto alternativo en imágenes
- Skip link para usuarios de teclado

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo freely para tu portafolio personal.

---

Desarrollado con ❤️ para artistas visuales
