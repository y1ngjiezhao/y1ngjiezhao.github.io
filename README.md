# Yingjie Zhao — personal website

A static, multipage website for GitHub Pages. No build tools or third-party frontend dependencies are required.

## Pages

- `/` — About: biography, research interests, academic profiles and contact details
- `/about/` — redirects to the merged About page at `/`
- `/publications/` — journal preprints and conference publications
- `/experience/` — research and academic experience
- `/talks/` — seminar slides, with online viewing and downloads
- `/service/` — teaching information and downloadable resources

Shared presentation lives in `assets/site.css`. `assets/theme.js` restores the saved theme before rendering; `assets/site.js` manages the theme button, mobile navigation and redirects from old homepage section links. New visitors see the light theme. Navigation and content remain available without JavaScript.

The homepage uses 640- and 960-pixel WebP landscape images with responsive selection. Keep the existing image attribution when replacing or re-encoding that photograph. Research interests appear in the biography. Labeled academic profile links replace the small footer icons on every main page. Body copy uses the full shared content width, with justified paragraphs on wider screens and natural wrapping on phones; publications and experience retain separate title, date and supporting-detail styles.

## Local preview

Run `python3 -m http.server 8000` from this directory and open `http://localhost:8000`.

## Publishing

The files can be served directly by GitHub Pages from the repository's configured publishing branch. Local edits do not update the public site until pushed to that branch.

`downloads/` retains the teaching guide, and `talks/yjz_confirmation_seminar.html` retains the linked seminar slides. The `/about/` redirect and legacy section-link redirects remain for incoming links. Portrait, active landscape, social-preview image, icon files and their attribution are part of the current site.

Unused alternative homepage and image files have been removed from the current tree. Earlier versions remain recoverable from Git history.
