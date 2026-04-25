# Gabriel Bayle — Academic Website

This is my academic website (live at: **[gabrielbayle.github.io](https://gabrielbayle.github.io)**)

I built it with the help of [Claude](https://claude.ai) (Anthropic).

---

## Structure

| File | Description |
|------|-------------|
| `index.html` | Welcome / home page |
| `research.html` | Research papers with filters |
| `teaching.html` | Teaching experience |
| `events.html` | Events, talks, visits and news |
| `cv.html` | Grants, awards, supervision, reviews |
| `references.html` | Academic references |
| `explain.html` | EXPLAIN platform project |

### Data files (edit these to update content)

| File | Controls |
|------|----------|
| `papers.js` | All research papers, topics and statuses |
| `teaching.js` | Teaching courses and descriptions |
| `events.js` | Events, categories, photos |
| `cv.js` | Grants, awards, supervision, peer review |
| `references.js` | Academic references |

> **The HTML files never need to be edited directly.** All content is managed through the `.js` data files.

---

## Images

All images are stored in the `images/` folder:

- `profile.jpg` — profile photo (home page)
- `CREST.png`, `TMD.png`, `waseda.png`, etc. — event photos

To add a photo to an event, upload it to `images/` and reference it in `events.js`:
```js
photo: "images/your-photo.jpg",
photoSide: "right",  // or "left"
```

---

## How to update content

### Add a paper (I want to change it to use .bib format instead of the following)
Open `papers.js` and add an entry to the `PAPERS` array:
```js
{
  num: "",
  title: "Your paper title",
  authors: "Author, A.* & Author, B.",
  journal: "Journal Name · 2026",
  meta: "Contribution: CTEAW",
  topics: ["sd", "pn"],   // see TOPICS at top of file
  status: "review",       // published | review | ongoing
  links: [
    { label: "Working paper", url: "https://...", style: "default" },
  ],
},
```

### Add an event
Open `events.js` and add an entry to the `EVENTS` array:
```js
{
  title: "Conference Name",
  category: "talk",        // upcoming | talk | visit | news
  date: "June 2026",
  year: 2026,              // use 9999 for upcoming
  description: "Description text. HTML allowed.",
  photo: "images/photo.jpg",   // optional
  photoSide: "right",          // optional: "left" or "right"
},
```

### Add a topic or status filter
In `papers.js`, add a line to `TOPICS` or `STATUSES` — the filter buttons appear automatically.

---

## Tech stack

- Plain HTML, CSS, JavaScript — no framework, no build step
- Hosted on **GitHub Pages** (you can do the same for free, it is quite easy to do!)
- Fonts: [Lora](https://fonts.google.com/specimen/Lora) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) via Google Fonts
- All content dynamically rendered from `.js` data files
