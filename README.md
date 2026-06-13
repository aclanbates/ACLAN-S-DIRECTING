# Aclan's Directing App

Static directing dashboard with optional Firebase sync.

## Firebase Sync Setup

1. In Firebase Console, create or open your project.
2. Add a Web App and copy its config into `firebase-config.js`.
3. Go to Authentication, then Sign-in method, and enable Anonymous.
4. Go to Firestore Database and create a database.
5. Publish the rules from `firestore.rules`.
6. Open the app, go to Sync, and create a code on your first device.
7. Enter the same code on your MacBook, iPad, and iPhone.

The sync code is the shared key. Anyone who knows the exact code can access that project's synced data, so keep it private.
