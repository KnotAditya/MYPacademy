# MYPacademy

> A free study resource hub built by graduated IB MYP students to help current students prepare for their final MYP E-assessments.

🌐 **Live site:** [mypacademy.com](https://mypacademy.com)

## About

The IB Middle Years Programme (MYP) offers far less revision material and support than curricula like GCSE, which can leave students under-resourced going into their final E-assessments. **MYPacademy** was created to fill that gap.

Every note on the site is hand-written and fact-checked by students who scored **50 points or above** in their final MYP results, and is shared alongside other publicly available study material. The goal is simple: give MYP students a single, reliable place to revise from.

## What's on the site

- **Subject notes** — Written and video notes for **Biology**, **Economics**, **Chemistry**, **Physics**, and **Maths**, organized by unit/chapter (PDFs + video walkthroughs).
- **E-assessment practice** — Past-style E-assessment walkthrough videos for each subject across multiple sessions (M21–M23).
- **Question Bank** — Practice questions to test your understanding.
- **Search** — On-page search with suggestions to jump straight to a topic.
- **About Us** — More on the students behind the project.

## Tech stack

- **HTML / CSS / JavaScript** — static multi-page website
- **Google Analytics (gtag.js)** — usage analytics
- **GitHub Pages** — hosting, with a custom domain (`mypacademy.com`) configured via `CNAME`
- **GitHub Actions** — `.github/workflows/static.yml` deploys the static site to Pages

## Running locally

It's a static site, so no build step is needed. Clone the repo and open `index.html` in your browser, or serve it locally:

```bash
git clone https://github.com/KnotAditya/MYPacademy.git
cd MYPacademy

# Option 1: just open index.html in a browser

# Option 2: serve it (so relative paths/search behave like production)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Project structure

```
MYPacademy/
├── index.html                 # Home page
├── style.css                  # Site styling
├── javafile.js                # Navigation, search, interactivity
├── analytics.js               # Analytics helper
├── mainnavigationpages/       # About Us, Subjects, E-assessment, Question Bank pages
├── Notespages/                # Subject notes & videos (Biology, Chemistry, Physics, Maths)
│   └── Eassessments/          # E-assessment practice videos
├── CNAME                       # Custom domain config
└── .github/workflows/          # GitHub Pages deployment
```

## A note on resources

All material is either hand-written by the creators (and shared with their consent) or drawn from publicly available sources. MYPacademy is a free, student-run revision aid and is not affiliated with or endorsed by the International Baccalaureate Organization (IBO).

## Contributing

Spotted an error in a note, or want to contribute revision material? Open an issue or a pull request.
