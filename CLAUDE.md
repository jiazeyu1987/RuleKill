# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a text-based horror game called "寝室规则怪谈" (Dormitory Rules Urban Legend). The game is built with vanilla HTML, CSS, and JavaScript with no external dependencies. It features a modular component architecture that can be built into a single HTML file.

## Code Architecture

The game consists of:
1. A responsive UI with game stats (hunger, energy, sanity, intelligence, strength, speed, luck) and time display
2. A rules panel showing dormitory rules on navigable cards
3. A main game area with story passages and choice buttons
4. Game state management for time and player stats
5. An extensive story graph with multiple passages and choices
6. Clear rules panel showing通关 conditions

### File Structure
```
├── text-game.html              # Original single-file version of the game
├── index-modular.html          # Modular HTML structure (uses @@include)
├── build.js                    # Build script to combine components
├── package.json                # Project configuration and scripts
├── components/                 # Reusable HTML components
│   ├── rule-navigation.html    # Navigation buttons for rule papers
│   ├── rule-paper.html         # Rule paper display component
│   ├── game-header.html        # Game stats header component
│   ├── passage.html            # Story passage component
│   └── choices.html            # Player choices component
├── styles/                     # CSS styles
│   ├── main.css                # Main stylesheet
│   └── components/             # Component-specific styles
└── scripts/                    # JavaScript files
    └── game.js                 # Main game logic
```

### Key JavaScript Components
- `passages`: A data structure defining all game passages, their text, and choices with stat changes
- `rulePapers`: Data structure for dormitory rules displayed in the sidebar with found/unfound states
- `clearRules`: Data structure for通关 conditions displayed together in the right sidebar
- Game state management functions for time and player stats
- UI update functions for stats, time, passage content, and rule displays
- Navigation functions for moving between rule papers

## Development

### Available Commands
- `npm run build`: Combines all components into a single HTML file at `dist/index.html`
- `npm run start`: Builds the project and serves it locally
- `npm run dev`: Serves the project locally without building

### Project Structure Details
The project uses a component-based architecture where:
1. HTML components are stored in the `components/` directory and included in `index-modular.html` using `@@include()` directives
2. CSS styles are modular and organized by component in `styles/components/`
3. JavaScript logic is in `scripts/game.js`
4. The build process combines all components into a single HTML file using `build.js`

The modular structure allows for easier development and maintenance, while the build process creates a distributable single-file version.

### Working with the Code
1. For development, work with the modular files in `components/`, `styles/`, and `scripts/`
2. Run `npm run build` to generate the combined HTML file
3. The single-file version (`text-game.html`) is a standalone version that can be run directly in a browser
4. All game logic is contained within the HTML files - no external dependencies required

### Game Mechanics
1. Time progresses based on player choices
2. Player stats (hunger, energy, sanity, etc.) change based on choices
3. Rule papers can be discovered throughout the game
4. Rules can be marked as true/false/unknown
5.通关 conditions are displayed together in the right sidebar
6. Multiple通关 paths based on player decisions and stats