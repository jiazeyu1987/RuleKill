# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a single HTML file (`text-game.html`) that implements a text-based horror game called "寝室规则怪谈" (Dormitory Rules Urban Legend). The game is built with vanilla HTML, CSS, and JavaScript with no external dependencies.

## Code Architecture

The game consists of:
1. A responsive UI with game stats (hunger, energy, sanity) and time display
2. A rules panel showing dormitory rules on navigable cards
3. A main game area with story passages and choice buttons
4. Game state management for time and player stats
5. An extensive story graph with multiple passages and choices

The JavaScript contains:
- `passages`: A data structure defining all game passages, their text, and choices
- `rulePapers`: Data structure for dormitory rules displayed in the sidebar
- Game state management functions
- UI update functions for stats, time, and passage content

## Development

This is a static HTML file with no build process. Simply open `text-game.html` in a web browser to run the game.

No build, lint, or test commands are needed as this is a simple static HTML file with embedded JavaScript and CSS.