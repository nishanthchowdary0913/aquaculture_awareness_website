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

Upload the folder containing `index.html`, `style.css`, `script.js`, and `assets/`. No build command is required.

## Included
- White and sea-blue aquaculture design, responsive on phone and desktop.
- Practice cards open the selected guidance in a new tab.
- Navigation links and weekly activity reports open in new tabs.
- Gallery filters open a new tab with the selected week; the contact form opens the email app in a new tab.
- Eight clickable weekly activity reports.
- The exact six-day activity summaries and learning outcomes for Weeks 1–6, transcribed from the supplied Program Book.
- Weeks 7–8 are represented as mini-project milestones; the PDF does not provide six-day logs for those weeks.
- Original field photographs extracted from the Program Book for Weeks 2–6.
- College, guide and team details.
- Static HTML/CSS/JavaScript; no API key or database required.

## Add your two separate photos
The Week 7 guide-submission group photo and Week 8 live website screenshots were not available as separate image files in the supplied PDF. Add:
- `assets/week-7-guide-photo.jpg`
- `assets/week-8-website-1.jpg` (and more if needed)

Then add them to the Gallery or weekly report if desired.

## Notes
The contact form opens the visitor's email application; it does not store messages. Fisheries scheme information is educational; users should confirm current details with the Fisheries Department.
