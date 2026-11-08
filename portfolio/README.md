# Mark Alexis Hernandez — Portfolio

Personal portfolio for a Senior Executive Assistant & Digital Operations Specialist.
A static site with no build step: plain HTML, CSS and JavaScript.

## Structure

```
index.html     page markup
style.css      styles
app.js         interactions, currency conversion, contact form
assets/        images (WebP), icons, Font Awesome (self-hosted), favicon, social preview
.nojekyll      tells GitHub Pages to serve files as-is
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy with GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, then `main` and `/ (root)`.
4. The site goes live at `https://<username>.github.io/<repo-name>/`.

## Third-party services

- Google Fonts (Newsreader, Hanken Grotesk), loaded from the CDN
- [ExchangeRate-API](https://www.exchangerate-api.com) open endpoint, for the currency converter
- Formspree, for the contact form (the form ID is set in `app.js`)
