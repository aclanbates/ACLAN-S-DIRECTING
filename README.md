# Aclan's Directing App

Static directing dashboard with optional Firebase sync.

## Upgrade 1.1 Sections

- Director's Daily Desk
- Scene / Song Breakdown
- Rehearsal Notes System
- Problem Tracker
- Creative Vision Board
- Actor pages with rehearsal click counts
- Tech Readiness
- Decision Log
- Performance Run Maintenance
- Directors Survival

## West Side Story Starter Pack

The app pre-fills a production starter pack based on the provided West Side Story libretto:

- Act and scene/song breakdowns
- Role slots with TBD actor names
- Creative vision notes
- Rehearsal notes
- Critical problem tracker items
- Tech readiness notes
- Decisions and run-maintenance reminders

The starter pack uses production summaries and directing analysis rather than copying dialogue or lyrics.

## Upgrade 2

Adds a Story Beats tab with Blake Snyder's 15 Save the Cat beats mapped to West Side Story as precise dramatic turning points. Each beat includes:

- The turning point
- The script moment
- Why it matters
- Directing focus
- A rehearsal note field
- A checkbox for whether the turn is clear in rehearsal

## Firebase Sync Setup

1. In Firebase Console, create or open your project.
2. Add a Web App and copy its config into `firebase-config.js`.
3. Go to Authentication, then Sign-in method, and enable Anonymous.
4. Go to Firestore Database and create a database.
5. Publish the rules from `firestore.rules`.
6. Open the app, go to Sync, and create a code on your first device.
7. Enter the same code on your MacBook, iPad, and iPhone.

The sync code is the shared key. Anyone who knows the exact code can access that project's synced data, so keep it private.
