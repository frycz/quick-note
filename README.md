# Quick Note
Google Keep like notes application with Firebase authentication and storage.

[Live demo](https://quicknote-91c7d.firebaseapp.com)

[Read blog post](https://frycz.github.io/projects/quick-note)

### Stack
- React 15
- Redux
- Sagas
- Typescript 2.1
- Firebase

### Features
- Firebase authentication
- adding, editing and removing notes
- notes upload to Google Drive

### Setup
To run QuickNote locally you need [Firebase account](https://firebase.google.com/).
1) Click `Add Firebase to your web app` on Firebase welcome screen and copy credentials.
2) Open `src/app.tsx` file.
3) Paste Firebase application credentaials at line `28`.

4) Run commands:
```
npm install
npm start
```
5) Open http://localhost:3000 in your browser.
6) Register and log in.
