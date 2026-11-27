# Andrie C. Detera — Portfolio

A minimal, responsive, single-page portfolio made with HTML, CSS, and JavaScript. No build step, package manager, or framework needed.

## Run locally

Open `index.html` in your browser, or open the folder in VS Code and use the Live Server extension.

## Publish on GitHub Pages

1. Create a **public** GitHub repository named `portfolio` (or `YOUR-USERNAME.github.io`).
2. Upload the **contents** of this folder to the root of the repository, preserving paths.
3. Open **Settings → Pages → Build and deployment**.
4. Set **Source** to `Deploy from a branch`, **Branch** to `main`, and **Folder** to `/(root)`. Save.
5. Visit `https://YOUR-USERNAME.github.io/portfolio/` (or `https://YOUR-USERNAME.github.io/` for the username-named repository).

## Personalize before sharing

- **Project artwork:** The Forest Guardians card currently uses `assets/images/ForestGuardians_MainMenu.png`. Replace it with another gameplay image in `index.html` when needed.
- **Artwork gallery:** Add another `<figure class="art-card">` inside the `#art` section for each new illustration or concept piece.
- **Project links:** Once available, add links to a gameplay video, download, or repository under Forest Guardians in `index.html`. Only link to public destinations.
- **GitHub/LinkedIn:** Replace the HTML comment inside `.contact-links` with real anchor elements. Example: `<a href="https://github.com/YOUR-USERNAME" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`.
- **Additional projects:** Duplicate the `<article class="feature-project">` block in `index.html` and replace the content/images. Adjust its project number.
- **Résumé:** Replace `assets/resume.pdf` with a newer public-friendly PDF whenever needed. Avoid publishing your personal phone number or full address if you don't want it indexed online. The currently bundled résumé is an exact copy of the PDF you provided, and includes your contact details.
- **Availability:** Update the 'OPEN TO INTERNSHIP OPPORTUNITIES' statement when it changes.
- **Achievements:** Check details and dates before publishing; initially based on your supplied résumé.

## Files

- `index.html` — all page content
- `style.css` — layout, visual design, and responsive breakpoints
- `script.js` — mobile menu and copyright year
- `assets/resume.pdf` — your supplied résumé
- `assets/images/` — project images

Everything works with relative URLs so project-repository and username-repository GitHub Pages deployments both work.
