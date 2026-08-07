Markdown

# ShopSphere Architecture

> Current implementation: React/TypeScript/Vite with React Router and CSS Modules. Redux, Zustand, React Query, Tailwind, and Axios are not installed.

The Express application is separated from its network entry point for testability. Configuration is read from environment variables, MongoDB is optional until data-backed routes are implemented, and all API routes use the `/api` prefix.

## Overview

ShopSphere is modern e-commerce application built with React and TypeScript/

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- CSS Modules
- CSS Variables
- React Query (planned)
- Zustand (planned)
- Axios (planned)

## Project Structure

src/
├── app/
├── pages/
├── widgets/
├── features/
├── entities/
├── shared/

## Principles

- Feature-based architecture
- Reusable UI components
- Theme support
- Accessibility
- Responsive Design
