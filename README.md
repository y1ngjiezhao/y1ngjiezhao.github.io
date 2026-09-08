# Yingjie Zhao — personal website

A static, multipage website for GitHub Pages. No build tools or third-party frontend dependencies are required.

## Pages

- `/` — About: biography, research interests, education, academic profiles and contact details
- `/about/` — redirects to the merged About page at `/`
- `/publications/` — journal preprints and conference publications
- `/experience/` — research and academic experience
- `/service/` — teaching information and downloadable resources

Shared presentation lives in `assets/site.css`. `assets/theme.js` restores the saved theme before rendering; `assets/site.js` manages the theme button, mobile navigation and redirects from old homepage section links. New visitors see the light theme. Navigation and content remain available without JavaScript.

## Local preview

Run `python3 -m http.server 8000` from this directory and open `http://localhost:8000`.

## Publishing

The files can be served directly by GitHub Pages from the repository's configured publishing branch. Local edits do not update the public site until pushed to that branch.

`downloads/` retains the existing teaching guide. Older alternative homepages and image assets are preserved.
