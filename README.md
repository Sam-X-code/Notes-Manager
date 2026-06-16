# Notes-Manager

A modern React-based Notes Management App where users can create, update, delete, search, copy, and share text notes.

Built using React, Redux Toolkit, React Router, Tailwind CSS, and LocalStorage.

---

# Features

* Create new notes
* Edit existing notes
* Delete notes
* View full note content
* Search notes
* Copy notes content
* Share notes links
* Persistent storage using LocalStorage
* Responsive modern UI
* Redux Toolkit state management

---

# Tech Stack

* React.js
* Redux Toolkit
* React Router DOM
* Tailwind CSS
* React Hot Toast
* LocalStorage

---

# Project Structure

```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Home.jsx
│   ├── Pastes.jsx
│   └── ViewPaste.jsx
│
├── redux/
│   ├── pasteSlice.js
│   └── store.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Dependencies

```bash
npm install react-router-dom
npm install @reduxjs/toolkit react-redux
npm install react-hot-toast
```

---

# Routing

```txt
/                 -> Home Page
/pastes           -> All Pastes
/pastes/:id       -> View Single Paste
/?pasteId=id      -> Edit Paste
```

---

# Redux Features

Implemented using Redux Toolkit:

* addToPastes
* updateToPastes
* removeFromPastes
* resetAllPastes

---

# LocalStorage

All notes are stored in browser LocalStorage for persistence.

---

# Future Improvements

* Backend Integration
* Authentication
* Rich Text Editor
* Syntax Highlighting
* Categories/Tags
* Dark/Light Theme Toggle
* Cloud Storage
* Markdown Support

---
