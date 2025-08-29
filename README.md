# Memory Lane — Your Local Timeline

Memory Lane is a privacy‑first, single‑file React app for saving posts, images, and comments in local storage. Group posts into collections, search and filter by date, export/import your data, and optionally add short, friendly AI comments.

## Highlights

- Privacy‑first: All data is stored locally in your browser. No servers.
- Portable: Export/Import a tidy JSON to move between devices.
- Simple: Clean timeline UI with collections, search, and date filters.
- Optional AI: One‑click AI comments or auto‑reply after posts/comments.
- OpenAI‑compatible: Works with OpenAI, OpenRouter, LM Studio, llama.cpp, and other compatible endpoints.

## Quick Start

1. Open `index.html` in any modern browser.
2. Click “Settings” to set your display name and configure AI.
3. (Optional) Add your LLM endpoint and API key.

## AI Setup

- LLM Endpoint presets in Settings:
  - OpenAI: `https://api.openai.com/v1/chat/completions`
  - OpenRouter: `https://openrouter.ai/api/v1/chat/completions`
  - LM Studio (local): `http://192.168.56.1:1234/v1/chat/completions`
- Any OpenAI API‑compatible endpoint should work. Provide your API key in Settings.
- When using local setups (e.g., LM Studio/llama.cpp on localhost), requests stay on your machine.

## Data Model

- Stored in `localStorage`: profile, settings, groups (collections), posts, comments, current group.
- Export generates a JSON snapshot; Import replaces your local data.

## Features

- Create posts with optional images (client‑side compressed).
- Collections sidebar: add/rename/delete, switch active collection.
- Filters: scope (current/all), free‑text search, year/month/day.
- AI Comment button on posts (manual) or automatic when enabled.
- Background wallpaper with adjustable blur.

## Onboarding & About

- A first‑run onboarding introduces core concepts (Create, Organize, Enhance).
- “What is this?” explains privacy, portability, simplicity, and local model support.

## Development

The app is a single HTML file using React 18 UMD + Babel in the browser.

- Edit `index.html` and reload.
- No build step required.

## Notes

- This app runs entirely client‑side. Be mindful of browser storage limits.
- AI usage shares the prompt and context with your configured provider.

## License

Choose a license before publishing (MIT recommended). Add `LICENSE` accordingly.

