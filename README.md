# Fun Quiz App 🎉

A lightweight, interactive browser-based quiz app built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies — just clean front-end code.

---

## Features

- **Timed questions** — 15-second countdown per question, auto-advances if time runs out
- **Interactive answer selection** — click to select, highlighted feedback on chosen option
- **Score tracking** — final score shown on a celebration screen
- **Restart without reload** — play again instantly without refreshing the page
- **Smooth animations** — fade-in transitions and a celebration screen with cloud animation

---

## Demo

Open `index.html` in any browser — no server or install needed.

---

## Tech Stack

- HTML5
- CSS3 (animations, gradients, transitions)
- Vanilla JavaScript (DOM manipulation, timers, event listeners)

---

## Project Structure

```
quiz-app/
├── index.html      # Quiz structure and layout
├── styles.css      # Styling, animations, celebration screen
└── script.js       # Quiz logic, timer, score tracking
```

---

## How It Works

1. Questions load one at a time from a `quizData` array in `script.js`
2. A 15-second timer starts for each question — if it expires, the app moves on automatically
3. The user clicks an answer to select it, then hits Submit
4. Score is incremented for each correct answer
5. After all questions, a celebration screen shows the final score
6. The user can restart and play again from scratch

---

## Adding Your Own Questions

Edit the `quizData` array in `script.js`:

```js
const quizData = [
  {
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: "Option A"
  },
  // add more...
];
```

---

## Getting Started

No install needed. Just clone and open:

```bash
git clone https://github.com/saherkalia/quiz-app.git
cd quiz-app
open index.html   # or double-click the file
```

---

## Author

**Jiya** — B.Tech CSE '27, GGSIPU Delhi  
[GitHub](https://github.com/saherkalia)
