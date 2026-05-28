# Known Issues And Follow-ups

## Project structure
- The repository is currently a static HTML/CSS/JavaScript site, not a React/Vite application. There is no `package.json`, `vite.config.*`, `src/`, component tree, or configured lint/build scripts to run. If the long-term goal is React/Vite, plan a separate migration instead of mixing frameworks into this static MVP.

## Browser and responsive QA
- Automated Playwright responsive screenshots could not be completed in this environment because npm registry access returned HTTP 403 while attempting to install Playwright. Manual browser QA is still recommended at 320, 375, 430, 768, 1024, 1440, and 1920px widths.

## Content and publishing
- The Articles archive now includes all 13 released LinkedIn newsletter editions as linked cards. Future SEO work could convert each edition into a first-party `articles/<slug>/index.html` page with canonical strategy and full on-site content.
- Project pages are educational summary cards. Add real case-study pages when approved project content and photos are available.

## Forms and newsletter operations
- Netlify form attributes are in place, but subscriber delivery depends on hosting with Netlify form detection enabled or replacing the forms with an email platform endpoint.
- The website collects newsletter interest; it does not send weekly newsletter campaigns automatically. Connect Mailchimp, ConvertKit, Beehiiv, HubSpot, GoHighLevel, or a similar platform for sending.

## Tool roadmap
- The Material Picker and Three-Bid Decoder are standalone static tools. Future work could extract shared tool UI patterns and validation into reusable modules if/when the site is migrated to React/Vite.
- PDF export and persisted results are not implemented. Add these only after deciding on a backend or serverless form workflow.
