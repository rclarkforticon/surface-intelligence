# Surface Intelligence Website

Static MVP for surface-intelligence.com. The site now lives at the repository root so static hosts can serve `index.html` without an extra publish-directory step.

## Pages
- `/` homepage
- `/tools/` free tools landing page
- `/tools/material-picker/`
- `/tools/bid-decoder/`
- `/tools/ada-risk-scorecard/`
- `/tools/hoa-reserve-estimator/`
- `/tools/board-meeting-language-generator/`
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


## Weekly articles and newsletter workflow

### Post a weekly article
1. Create a new folder inside `articles/` using a short URL slug, for example `articles/lowest-bid-illusion/`.
2. Add an `index.html` file inside that folder. Copy the structure from `articles/index.html` or another article page, then replace the title, description, tag, and body copy.
3. Update `articles/index.html` so the new issue appears in the article archive.
4. Update the "Latest articles" cards on `index.html` when you want the homepage to promote the newest issue.
5. Deploy the site. The article URL will be `https://your-domain.com/articles/your-slug/`.

### Collect newsletter subscribers
The homepage already has a Netlify-ready newsletter form named `newsletter`. It collects `name` and `email` fields. The contact form also has a `newsletter` checkbox for people who ask a question and want to be added.

If the site is hosted on Netlify:
1. In Netlify, open the site dashboard and go to **Forms**.
2. Enable form detection if Netlify asks you to.
3. Redeploy the site after the forms are in the HTML.
4. New homepage subscribers will show up under **Forms → newsletter**.
5. Contact submissions will show up under **Forms → contact**.
6. Export subscribers from the form page with **Download as CSV**, then import that CSV into an email platform such as Mailchimp, ConvertKit, Beehiiv, HubSpot, or GoHighLevel.

If the site is not hosted on Netlify, the static HTML form will not save subscribers by itself. In that case, replace the form action with the embed/action URL from your email platform or connect the form to a small backend endpoint.

### Important note about sending the newsletter
This website currently collects subscriber info; it does not send weekly emails automatically. To send the weekly newsletter, use an email marketing tool and import/export subscribers, or connect Netlify form notifications/webhooks to that tool.

## Next dev steps
1. Replace placeholder article cards with real article pages.
2. Connect forms to Netlify Forms, Supabase, HubSpot, or GoHighLevel.
3. Add PDF export for tool results.
4. Add the final ADA scorecard logic refinement if you want weighted scoring by state/property type.
