# INFR3120 Assignment 2 – Express Portfolio

Personal portfolio for TJ Adetunji, built with Node.js, Express and EJS and generated with express-generator (`--view=ejs`).

**Live site:** [add your Render URL]
**Author:** TJ Adetunji ([add student number])

## Pages

| Page | Route |
| --- | --- |
| Home | `/` and `/home` |
| About Me | `/about` |
| Projects | `/projects` |
| Contact Me | `/contact` (form posts to `/contact`) |

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:3000

## Structure

- `routes/index.js` – all page routes
- `views/partials/` – shared header and footer
- `views/` – EJS page templates
- `public/` – CSS, JavaScript, images and files

## Sources and citations

- Project scaffold: express-generator (https://expressjs.com/en/starter/generator.html)
- Bootstrap 5.3 via jsDelivr CDN (https://getbootstrap.com)
- Font Awesome 6 Free via cdnjs (https://fontawesome.com)
- Form validation script in `public/javascripts/main.js` adapted from the Bootstrap docs (https://getbootstrap.com/docs/5.3/forms/validation/)
- INFR3120 lecture code
- [List any other source you used, including AI tools, and what you used each one for]
