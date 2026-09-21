# Portafolio — Carol Cárdenas

Portafolio personal de Carol Cárdenas, desarrolladora frontend freelance en
búsqueda de prácticas o contrato de aprendizaje. Construido con Next.js
(App Router), React y CSS Modules.

## Características

- Diseño tipo bento con animaciones de aparición al hacer scroll.
- Modo claro/oscuro con persistencia en `localStorage`.
- Selector de idioma Español/Inglés con traducción completa del contenido
  (`app/lib/content.ts` y `app/lib/content.en.ts`).
- Secciones de proyectos, experiencia, educación, certificaciones y
  contacto (correo, WhatsApp, LinkedIn, GitHub).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el sitio.

## Estructura del contenido

Todo el texto del sitio vive en `app/lib/content.ts` (español) y
`app/lib/content.en.ts` (inglés) — para editar textos, fechas o enlaces no
hace falta tocar los componentes.

## Build de producción

```bash
npm run build
```

## Deploy

El proyecto está desplegado en [Vercel](https://vercel.com), con
despliegue automático en cada push a `main`.
