# 寝室规则怪谈 (Dormitory Rules Urban Legend)

A text-based horror game built with HTML, CSS, and JavaScript.

## Project Structure

```
├── components/                 # Reusable HTML components
│   ├── rule-navigation.html    # Navigation buttons for rule papers
│   ├── rule-paper.html         # Rule paper display component
│   ├── game-header.html        # Game stats header component
│   ├── passage.html            # Story passage component
│   └── choices.html            # Player choices component
├── styles/                     # CSS styles
│   ├── main.css                # Main stylesheet
│   └── components/             # Component-specific styles
│       ├── rule-navigation.css
│       ├── rule-paper.css
│       ├── game-header.css
│       ├── passage.css
│       └── choices.css
├── scripts/                    # JavaScript files
│   └── game.js                 # Main game logic
├── index-modular.html          # Modular HTML structure (uses @@include)
├── build.js                    # Build script to combine components
├── package.json                # Project configuration
└── README.md                   # This file
```

## Development

### Prerequisites
- Node.js (optional, for build tools)

### Building the Project
To combine all components into a single HTML file:

```bash
node build.js
```

This will create a `dist/index.html` file with all components combined.

### Running the Game
Simply open `index-modular.html` in a web browser, or after building, open `dist/index.html`.

## Components

### Rule Navigation
Navigation buttons for moving between rule papers with improved styling and spacing.

### Rule Paper
Display component for rule papers with found/unfound states.

### Game Header
Displays game stats (time, hunger, energy, sanity) with progress bars.

### Passage
Displays the current story passage text.

### Choices
Displays player choice buttons that advance the story.

## Features
- Responsive design for desktop and mobile
- Rule discovery mechanics
- Game state management (time, stats)
- Component-based architecture
- Smooth animations and transitions