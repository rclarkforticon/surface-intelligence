# SEO Audit & Recommendations — Surface Intelligence
**Completed:** June 2, 2026
**Domain:** surface-intelligence.com
**Audited by:** Claude Code (full SEO implementation)

---

## Pages Improved

| Page | Changes Made |
|------|-------------|
| `assets/nav.js` | Updated brand `<strong>` to "Pavement & ADA Specialist", `<small>` to "// Ryan Clark · Forticon", CTA already correct ("Get Free Condition Report") |
| `/` (homepage) | Improved title, meta description, OG tags, Twitter cards; updated JSON-LD to add SearchAction, Organization schema, corrected job title to "Pavement & ADA Specialist" |
| `/tools/` | Improved title, meta description, OG tags, Twitter cards; expanded JSON-LD to WebPage + BreadcrumbList + ItemList of all 11 tools |
| `/articles/` | Improved title, meta description, OG tags, Twitter cards; updated JSON-LD to Blog schema; changed H1 from "Pavement, ADA & Bid Strategy Insights" to "Pavement Insights" |
| `/tools/material-picker/` | Improved title & description; added canonical, OG, Twitter, SoftwareApplication JSON-LD; added SEO content section with About, related tools, FAQ + FAQPage schema |
| `/tools/pavement-condition-rating/` | Improved title & description; added canonical, OG, Twitter, SoftwareApplication JSON-LD; added SEO content section |
| `/tools/bid-decoder/` | Improved title & description; added canonical, OG, Twitter, SoftwareApplication JSON-LD; added SEO content section |
| `/tools/contractor-vetting-scorecard/` | Improved title & description; added canonical, OG, Twitter, SoftwareApplication JSON-LD; added SEO content section |
| `/tools/ada-risk-scorecard/` | Improved title & description (canonical, OG, schema already existed); added SEO content section with FAQ |
| `/tools/hoa-reserve-estimator/` | Improved title & description; added canonical, OG, Twitter, SoftwareApplication JSON-LD; added SEO content section |
| `/tools/noi-impact-calculator/` | Improved title & description; updated OG & Twitter titles to match; added SEO content section (canonical, schema already existed) |
| `/tools/pavement-insurance-claim-estimator/` | Improved title & description; added canonical, OG, Twitter, SoftwareApplication JSON-LD; added SEO content section |
| `/tools/tenant-notification-letter-generator/` | Improved title & description; added canonical, OG, Twitter, SoftwareApplication JSON-LD; added SEO content section |
| `/tools/board-meeting-language-generator/` | Improved title & description; added canonical, OG, Twitter, SoftwareApplication JSON-LD; added SEO content section |
| `/tools/Sealcoat-timing-calculator/` | Improved title & description; added canonical, OG, Twitter, SoftwareApplication JSON-LD; added SEO content section |

### New Files Created / Updated
- `sitemap.xml` — all 15 pages with `<lastmod>`, `<priority>`, and `<changefreq>` per spec
- `robots.txt` — verified correct (User-agent: *, Allow: /, Sitemap reference)
- `404.html` — updated to match site style spec (dark theme, yellow accent, IBM Plex Sans, nav.js, links to /, /tools/, /articles/)

---

## Metadata Added / Improved

### Title Tags (all pages now follow: Tool Name — Descriptor | Surface Intelligence)
| Page | New Title |
|------|-----------|
| Homepage | "Free Pavement Decision Tools for Property Managers \| Surface Intelligence" |
| Tools Hub | "Free Pavement & ADA Decision Tools for Property Managers \| Surface Intelligence" |
| Articles | "Pavement Insights — Weekly Articles for Property Managers \| Surface Intelligence" |
| Material Picker | "Asphalt vs. Concrete Calculator — Material Selection Tool \| Surface Intelligence" |
| Pavement Condition Rating | "Pavement Condition Rating Tool — Free PCI Assessment \| Surface Intelligence" |
| Bid Decoder | "Three-Bid Decoder — Paving Bid Comparison Tool \| Surface Intelligence" |
| Contractor Vetting | "Contractor Vetting Scorecard — Screen Paving Contractors \| Surface Intelligence" |
| ADA Risk Scorecard | "ADA Parking Lot Risk Scorecard — Free Compliance Check \| Surface Intelligence" |
| HOA Reserve Estimator | "HOA Pavement Reserve Estimator — Annual Reserve Calculator \| Surface Intelligence" |
| NOI Calculator | "NOI Impact Calculator — Pavement Deferred Maintenance Cost Tool \| Surface Intelligence" |
| Insurance Estimator | "Pavement Insurance Claim Estimator — Storm & Utility Damage Tool \| Surface Intelligence" |
| Tenant Letter Generator | "Tenant Notification Letter Generator — Paving Work Notices \| Surface Intelligence" |
| Board Language Generator | "Board Meeting Language Generator — HOA Pavement Approval Tool \| Surface Intelligence" |
| Sealcoat Calculator | "Sealcoat Timing Calculator — When to Sealcoat Your Parking Lot \| Surface Intelligence" |

### Canonical Tags
All 15 pages have `<link rel="canonical">` pointing to their full HTTPS URL on surface-intelligence.com.

### Open Graph Tags (all pages)
`og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:site_name`

### Twitter Card Tags (all pages)
`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

---

## Schema Markup Added

| Page / Type | Schema |
|-------------|--------|
| Homepage | WebSite (with SearchAction), Organization (with founder), Person (Ryan Clark, "Pavement & ADA Specialist", Forticon), WebPage |
| Tools Hub | WebPage, BreadcrumbList, ItemList (all 11 tools) |
| Articles | Blog schema + existing ItemList |
| All 11 tool pages | SoftwareApplication (name, description, url, applicationCategory, operatingSystem, offers free, provider) |
| All 11 tool pages | FAQPage (3 Q&A per tool, topically relevant) |

---

## Internal Linking Improvements
- All 11 tool pages now have a "Related tools" section with 3 contextual links to other tools
- 404.html links back to /, /tools/, /articles/
- tools/index.html JSON-LD ItemList creates structured crawl path to all 11 tool URLs

---

## Remaining Opportunities

### High Priority
1. **Google Search Console** — Submit `https://surface-intelligence.com/sitemap.xml` to accelerate indexing. All 15 pages are now in the sitemap with lastmod 2026-06-02.

2. **OG image for social sharing** — Create a branded 1200×630px social card for the homepage and tools hub. Currently using pavement photos which work but a branded card performs better on LinkedIn.

3. **Favicon** — No `favicon.ico` or `<link rel="icon">` present. Add a simple yellow-on-dark favicon for brand recognition in tabs and bookmarks.

4. **Tailwind CDN removal** — 8 tool pages load `https://cdn.tailwindcss.com`. This is render-blocking (~300KB extra JS) and hurts Core Web Vitals. Migrate to site.css or extract only the Tailwind utilities used. Priority order: Material Picker → Bid Decoder → HOA Reserve Estimator → Sealcoat Calculator.

5. **Sealcoat calculator URL** — The folder is `/tools/Sealcoat-timing-calculator/` (capital S). Rename to lowercase and set up a redirect for consistency. All internal links currently reference both cases.

### Medium Priority
6. **Add BreadcrumbList to individual tool pages** — The tools hub has breadcrumbs in JSON-LD; each tool page should have its own:
   ```json
   Home > Free Tools > [Tool Name]
   ```

7. **Add `<meta name="author" content="Ryan Clark">` to all pages**

8. **Image dimensions on hero** — Add explicit `width` and `height` attributes to the hero `<img>` to eliminate CLS (Cumulative Layout Shift).

9. **Article schema on articles page** — Add individual `Article` schema blocks for each newsletter issue with `datePublished`, `headline`, and `author`. Currently using ItemList which is less rich.

10. **Robots meta on tool pages** — Consider adding `<meta name="robots" content="index, follow">` explicitly on all public pages.

---

## Recommended Future Articles (10+ topics)

High-intent topics that would capture organic traffic and build topical authority:

1. "Asphalt vs. Concrete Parking Lots: 2026 Lifecycle Cost Comparison for Property Managers"
2. "The 5 ADA Parking Lot Violations California Property Managers Get Sued For Most"
3. "What Is a CASp Inspection and Does Your Parking Lot Need One?"
4. "How to Read a Paving Scope of Work Without a Construction Background"
5. "Why the Lowest Paving Bid Is Almost Never the Best Value (With Math)"
6. "HOA Reserve Studies and Pavement: What the Numbers Usually Miss"
7. "ADA Path-of-Travel Requirements After Paving Work: What Property Managers Don't Know"
8. "When Should You Overlay vs. Reconstruct a Parking Lot?"
9. "How to Build a 5-Year Pavement Maintenance Plan Before Budget Season"
10. "Deferred Pavement Maintenance and Cap Rate: The Math Every Property Owner Should See"
11. "Best Time of Year to Sealcoat a Parking Lot in California"
12. "6 Things a Legitimate Paving Contractor Includes in Every Bid (And How to Spot the Ones That Don't)"
13. "How Global Oil Markets Affect Local Paving Costs (And What to Do About It)"

---

## Recommended Landing Pages (5+ ideas)

Pages that don't exist but would capture high-intent commercial traffic:

1. **`/ada-compliance/`** — ADA parking lot compliance resource hub targeting "ADA parking lot compliance California," "accessible parking requirements," "CASp inspection property manager"

2. **`/hoa-pavement-planning/`** — Resource hub for HOA boards on reserve planning, phasing, and contractor selection. Target: "HOA pavement reserve planning," "HOA parking lot maintenance plan"

3. **`/pavement-glossary/`** — Definitions of 30+ pavement terms (PCI, mill and pave, alligatoring, sealcoat, tack coat, etc.). Captures long-tail informational queries and builds topical authority.

4. **`/tools/pavement-phasing-planner/`** — New tool to plan multi-year phased paving projects with timeline and budget output. High value for HOA and large commercial clients.

5. **`/bid-checklist/`** — A printable paving bid review checklist (scope items, risk flags, warranty requirements). Targets "paving bid checklist," "how to compare paving bids" — simple page, high utility for the target audience.

---

## Technical Issues for Manual Review

1. **Domain verification** — Confirm `surface-intelligence.com` is the live Netlify custom domain. All 15 pages use this in canonical and JSON-LD. If the domain differs, do a project-wide find-replace.

2. **Sealcoat URL case** — Folder name is `Sealcoat-timing-calculator` (capital S). All nav.js footer links use lowercase `sealcoat-timing-calculator`. The sitemap includes the capital-S version. Netlify's case-insensitive routing handles this, but rename the folder to lowercase when convenient.

3. **Tailwind CDN (8 pages)** — `cdn.tailwindcss.com` is loaded on material-picker, bid-decoder, contractor-vetting-scorecard, hoa-reserve-estimator, pavement-insurance-claim-estimator, tenant-notification-letter-generator, board-meeting-language-generator, and Sealcoat-timing-calculator. This is the #1 Core Web Vitals issue on the site.

4. **No favicon** — Add a favicon.ico and `<link rel="icon">` to the `<head>` on all pages (can be handled in nav.js or site.css @layer).

5. **LinkedIn external links** — All articles link to LinkedIn (external). These get no link equity benefit. Consider hosting article excerpts directly on surface-intelligence.com with "Read full article on LinkedIn" links to capture on-site content value.

6. **Google Search Console** — Not yet submitted (assumed). Submit sitemap.xml immediately after deployment to accelerate indexing.

7. **Analytics** — No Google Analytics, Plausible, or other analytics detected in the source. Add a lightweight analytics tool to track which tools get the most use and which pages drive the most contact form submissions.
