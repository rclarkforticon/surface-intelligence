# Surface Intelligence Website

Static MVP for surface-intelligence.com. The site now lives at the repository root so static hosts can serve `index.html` without an extra publish-directory step.

## Pages
- `/` homepage
- `/tools/` free tools landing page
- `/tools/material-picker/`
- `/tools/bid-decoder/`
- `/tools/ada-risk-scorecard/`
- `/projects/`
- `/articles/`
- `/contact/`

## Local preview
From the repository root, run:

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080/.

## Deploy
The deploy root is this repository root. Netlify is configured by `netlify.toml` to publish `.` with no build command. For Vercel, GitHub Pages, cPanel `public_html`, or another static host, point the project/upload at the repository root so `index.html`, `_redirects`, `assets/`, and the page folders are all deployed together.

## Next dev steps
1. Replace placeholder article cards with real article pages.
2. Connect forms to Netlify Forms, Supabase, HubSpot, or GoHighLevel.
3. Add PDF export for tool results.
4. Add the final ADA scorecard logic refinement if you want weighted scoring by state/property type.
