# Aquaculture Awareness Website

Responsive static website for **Aquaculture Awareness and Sustainable Fish Farming Practices in Rural Communities**.

## Deploy on Render
Render deploys static sites from a Git repository; it does not accept a ZIP upload directly.
1. Create a GitHub repository and upload the contents of this folder to its root.
2. In the Render Dashboard, choose **New > Blueprint** and connect that repository.
3. Render reads `render.yaml` and publishes the static site. No build step or secrets are required.

## Deploy on Netlify
1. Download and extract this ZIP.
2. Open https://app.netlify.com/drop on your laptop.
3. Drag the extracted `aquaculture_awareness_website` folder into the Netlify Drop area.
4. Wait for Netlify to publish it and provide your live URL.

Upload the folder containing `index.html`, `about.html`, `practices.html`, `activity-log.html`, `style.css`, `script.js`, and `assets/`. No build command is required.

## Included
- Four separate, responsive pages: Home (`index.html`), About (`about.html`), Practices (`practices.html`), and Activity Log (`activity-log.html`).
- Each page has its own layout and visual theme. Navigation stays in the current browser tab.
- Practice cards and weekly reports reveal details within their own page.
- Eight weekly activity reports, including the six-day activity summaries and learning outcomes for Weeks 1–6.
- Weeks 7–8 are represented as mini-project milestones; the PDF does not provide six-day logs for those weeks.
- Original field photographs extracted from the Program Book.
- College, guide and team details.
- Static HTML/CSS/JavaScript; no API key or database required.

## Add your two separate photos
The Week 7 guide-submission group photo and Week 8 live website screenshots were not available as separate image files in the supplied PDF. Add:
- `assets/week-7-guide-photo.jpg`
- `assets/week-8-website-1.jpg` (and more if needed)

Then add them to the Home fieldwork section or the relevant weekly report if desired.

## Notes
Fisheries scheme information is educational; users should confirm current details with the Fisheries Department.
