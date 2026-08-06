# Per Scholas Foundations Technical Preparation: Rock, Paper, Scissors by Ashley White

## Project Overview
This repository contains my foundational technical preparation project for the Per Scholas AI Native Software Development program. It implements a complete, interactive, three-round Rock, Paper, Scissors game played via browser interface prompts and alerts.

## Architectural Structure
To satisfy the strict multi-file requirements across the core programming pillars, the application is intentionally divided across six distinct, modular files:
- `game.html` & `game-info.html` (Structure & Document Navigation)
- `game-style.css` & `game-style2.css` (Visual Layout & Responsive Mobile Styling)
- `game-script.js` & `game-script2.js` (Core Program Logic & Event Handling)

## Engineering & Debugging Reflection
Because this entire project was built and deployed using a mobile device environment (Motorola Moto G), I encountered and resolved several critical real-world development challenges:

1. **DOM Execution Timing:** To ensure that my standalone JavaScript logic paired perfectly with my HTML elements across different screen scales, I implemented a `DOMContentLoaded` event listener wrapper. This ensures the browser loads the interface elements before launching the script.
2. **Mobile Multi-File Cache Management:** Mobile browsers aggressively cache external files to save data. I successfully resolved local file-syncing delays by implementing cache-breaking timestamp strings (`?v=2`) directly in the test URL parameters to force immediate runtime updates.
3. **Responsive Multitasking:** Testing was conducted live by utilizing Android's built-in split-screen window management, running the GitHub repository editor side-by-side with the live GitHub Pages browser preview.

This project successfully demonstrates a firm grasp of foundational programming pillars: variable scoping, functional execution, looping mechanisms, conditional logic, and modular file architecture.
