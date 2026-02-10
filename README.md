# WYC 2026 · Tournament Management System

**World Yogasana Championship 2026** · Ahmedabad · June 4 to June 8

Tournament Management System for the World Yogasana Championship, built with React, TypeScript, and Zustand.

**Live site:** https://akash-droid-dev.github.io/WYC-2026---TMS/

## Features

- **Public View**: Schedule, Live Results, Medal Table, Event Info
- **Delegation Manager**: Athletes, Entries, Protests with filters and modals
- **Judge Panel**: Assigned events, live scoring
- **Admin**: Full tournament management — setup, delegations, entries, schedule, live ops, scoring, results, medals, protests, reports, users

## Tech Stack

- React 19 + TypeScript
- React Router v7
- Zustand (state management)
- Vite

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and use **View as** to switch between Public, Delegation, Judge, and Admin.

## Build

```bash
npm run build
npm run preview
```

## Enable GitHub Pages (one-time setup)

1. Go to **Settings** → **Pages** in this repo
2. Under **Build and deployment** → **Source**, select **Deploy from a branch**
3. Under **Branch**, select **gh-pages** and **/ (root)**
4. Click **Save**

The workflow will push the build to `gh-pages` on each push to `main`. After enabling Pages, the site will be live within a minute.
