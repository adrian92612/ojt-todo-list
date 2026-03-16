# Todo List (Vanilla JS)

This project is a **simple Todo List web app** built using **HTML, CSS, and Vanilla JavaScript**. The goal is to practice **core frontend fundamentals** and **team collaboration using Git**.

You will work together on the same repository to simulate a real development workflow.

---

# Project Goal

Build a basic todo application where users can:

- Add a todo
- Mark a todo as completed
- Delete a todo
- Persist todos in the browser using **localStorage**

Focus on **clean code, small commits, and proper Git collaboration**.

---

# Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Browser Local Storage
- Git / GitHub collaboration

No frameworks or libraries allowed.

---

# Features

Minimum required features:

## 1. Add Todo

User can enter a task and add it to the list.

## 2. Display Todos

Todos should appear in a list.

## 3. Complete Todo

User can mark a task as completed.

## 4. Delete Todo

User can remove a task.

## 5. Persistence

Todos should remain after page refresh using **localStorage**.

---

# Suggested UI

Keep it simple.

Example layout:

```
-------------------------
        Todo List
-------------------------

[ input field ] [Add]

• Buy groceries      [✓] [x]
• Study JavaScript   [✓] [x]
• Walk the dog       [✓] [x]
```

---

# Project Structure

Suggested structure:

```
todo-app
│
├── index.html
├── style.css
├── script.js
└── README.md
```

You can modify this structure if needed.

---

# Git Workflow

You must **collaborate using branches**.

## 1. Clone the repository

```bash
git clone <repo-url>
```

## 2. Create a branch for your feature

Example:

```bash
git checkout -b feature/add-todo
```

## 3. Commit small changes

Example:

```bash
git add .
git commit -m "feat: add todo input functionality"
```

## 4. Push your branch

```bash
git push origin feature/add-todo
```

## 5. Create a Pull Request

Open a PR so your teammate can review it before merging.

---

# Collaboration Rules

1. **Do not push directly to `main`.**
2. Always create a **feature branch**.
3. Use **clear commit messages**.
4. Review each other's Pull Requests.
5. Resolve merge conflicts together.

---

# Suggested Task Split

You can divide the work like this:

### Intern A

- HTML layout
- Todo input
- Add todo logic

### Intern B

- Styling (CSS)
- Complete / delete functionality
- LocalStorage persistence

Both should review and test each other's code.

---

# Bonus (Optional)

If you finish early, try adding:

- Edit todo
- Filter (All / Completed / Active)
- Due dates
- Drag and drop reordering
- Dark mode

---

# What We’re Evaluating

- Code readability
- Proper Git usage
- Collaboration
- Problem solving
- Simplicity of implementation

---

# Important

Do not over-engineer this.

The goal is **learning fundamentals and working together using Git**, not building a production system.
