# Yuanzou Gao — Personal Website

A static portfolio for Yuanzou Gao, focused on applied AI, evaluation, and data science.

The site uses an editorial visual system: warm paper tones, oversized type, fine rules, restrained motion, and a portrait-led homepage. The layout adapts to mobile screens and honors reduced-motion preferences.

The English pages live at the repository root and the matching Chinese pages live in `zh/`. Each page has a language switch and reciprocal `hreflang` links. The shared `map.js` chooses English or Chinese place labels from the document language.

## Preview

Open `index.html` in a browser, or run `python3 -m http.server 8000` from the repository root and visit `http://localhost:8000/`.

The site uses plain HTML and CSS, with no build step. `about.html` loads Leaflet and OpenStreetMap tiles for the interactive map. The contact form submits to Formspree.

## Content notes

Project summaries link to public repositories. Research and prototype status is described on each card. The resume page includes a link to the current Chinese PDF résumé. The older PDF files remain in the repository as archives and are not linked from the current page.
