# ToDoApp

A simple, intuitive To-Do List web app built with HTML, CSS and JavaScript.

## 🚀 Table of Contents

- [About](#about)  
- [Features](#features)  
- [Screenshot](#screenshot)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Technologies](#technologies)  
- [Future Improvements](#future-improvements)  
- [Contributing](#contributing)  
- [License](#license)  

## About

This project provides a lightweight ToDo app where users can add tasks, mark them as completed, and remove tasks.  
It's designed for simplicity and clarity, perfect as a front-end exercise or a starter project for web development learners.

## Features

- Add new tasks  
- Mark tasks as completed or un-completed  
- Remove tasks  
- Persistent state (if implemented: e.g., using localStorage)  
- Responsive design (works on desktop and mobile)  

## Screenshot

Here’s a look at the app in action:

![App Screenshot](./screenshots/todo-app-screenshot.png)  
> *(Make sure you put your screenshot image under `screenshots/` folder or adjust the path accordingly.)*

## Getting Started

### Prerequisites

You’ll just need a modern web browser to run the app locally. Optionally, if you’d like to serve through a local web server, you may install something like `http-server`.

### Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/WaruniGunasena/ToDoApp.git
   cd ToDoApp
````

2. Open `index.html` in your browser
   Or if you prefer using a local web server:

   ```bash
   npx http-server . 
   # then open http://localhost:8080 (or whichever port http-server lists)
````

## Usage

* Type your task into the input field and press **Enter** or click “Add Task”
* Click the checkbox (or similar UI) next to a task to mark it as done
* Click the “Remove” (or trash bin) icon/button to delete the task
* The list updates in real time and remains simple and clean

## Project Structure

````
ToDoApp/
│
├─ index.html       # main HTML file  
├─ styles.css       # styling for the app  
├─ script.js        # JavaScript logic  
├─ screenshots/     # folder containing screenshot images  
└─ README.md        # this file  
````

## Technologies

* HTML5
* CSS3 (Flexbox/Grid)
* JavaScript (ES6+)

## Future Improvements

Here are some ideas for enhancing the project:

* Use `localStorage` (or another browser storage) so tasks persist across page reloads
* Add due-dates for tasks and ability to sort/filter by due date or priority
* Implement categories or tags for tasks
* Add edit feature for tasks (change text)
* Improve UI/UX: animations, dark mode, mobile navigation
* Convert to a full-stack app: back-end API and database (e.g., Node.js + Express + MongoDB)
* Add tests for JavaScript logic

## Contributing

Thank you for considering contributing! Here’s how you can help:

* Fork the repo
* Create a new branch (`git checkout -b feature/YourFeatureName`)
* Make your changes and commit (`git commit -m 'Add some feature'`)
* Push to your branch (`git push origin feature/YourFeatureName`)
* Open a Pull Request explaining your changes

Please ensure your code follows consistent style, is well-commented, and the app remains functional.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

**Enjoy building and improving your ToDoApp!**
If you find any bugs or have suggestions, feel free to open an issue.

``

### ✅ What you should do next:

1. Capture a good screenshot of your app (desktop + mobile maybe).  
2. Create a folder named `screenshots/` (if you don’t already have one) and save the screenshot image (e.g., `todo-app-screenshot.png`).  
3. Update the path in the README if you place the screenshot somewhere else.  
4. (Optional) Add badges at the top of the README (e.g., build status, code style) if you integrate CI or linters.  
5. Commit and push the README file (and screenshot folder/image) to your GitHub repo so it shows up nicely.

---

If you like, I can **generate the screenshot image** (or template for you) and update the README accordingly with markup to embed it. Would you like me to help with that?
::contentReference[oaicite:0]{index=0}
```
