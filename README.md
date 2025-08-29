# Memory Lane — Your Local Timeline

Memory Lane is a privacy‑first, single‑file React app for saving posts, images, and comments in local storage. Group posts into collections, search and filter by date, export/import your data, and optionally add short, friendly AI comments.

## Highlights

- Privacy‑first: All data is stored locally in your browser. No servers.
- Portable: Export/Import a tidy JSON to move between devices.
- Simple: Clean timeline UI with collections, search, and date filters.
- Optional AI: AI comments with manual button or auto‑reply after posts/comments.
- OpenAI‑compatible: Works with OpenAI, OpenRouter, LM Studio, llama.cpp, and other compatible endpoints.

## Quick Start

1. Open `index.html` in any modern browser.
2. Click “Settings” to set your display name and configure AI.
3. (Optional) Add your LLM endpoint and API key.

## AI Setup

- Enable AI in Settings and (optionally) verify connection:
  - Check “AI functions enabled”. Required fields (endpoint, model, API key) appear.
  - Click “Test connection” to quickly validate your settings.
- LLM Endpoint presets in Settings:
  - OpenAI: `https://api.openai.com/v1/chat/completions`
  - OpenRouter: `https://openrouter.ai/api/v1/chat/completions`
  - LM Studio (local): `http://192.168.56.1:1234/v1/chat/completions`
- Any OpenAI API‑compatible endpoint should work. Provide your API key in Settings.
- When using local setups (e.g., LM Studio/llama.cpp on localhost), requests stay on your machine.

### Prompt customization

- The default preset is Friendly. You can change the “System Prompt” anytime — changing the prompt does not require re‑testing the connection.
- Quick presets provided: Friendly, Enthusiastic, Constructive, Calm & Clear, Poetic, Emoji‑light. All presets output a single comment (no labels or lists).

## Data Model

- Stored in `localStorage`: profile, settings, groups (collections), posts, comments, current group.
- Export generates a JSON snapshot; Import replaces your local data.

## Features

- Create posts with optional images (client‑side compressed).
- Collections sidebar: add/rename/delete, switch active collection.
- Filters: scope (current/all), free‑text search, year/month/day.
- AI Comment button on posts (manual) or automatic when enabled.
- Customizable app name (updates page title + header).
- Background wallpaper with adjustable blur and dark‑mode tint presets.

## Onboarding & About

- “What is this?” opens a friendly intro that also includes the onboarding steps.

## Development

The app is a single HTML file using React 18 UMD + Babel in the browser.

- Edit `index.html` and reload.
- No build step required.

## Notes

- This app runs entirely client‑side. Be mindful of browser storage limits.
- AI usage shares the prompt and context with your configured provider.

## Shortcuts & Tips

- Collections: press Enter to add a new collection.
- While renaming a collection, Enter saves and Esc cancels.

## License

Choose a license before publishing (MIT recommended). Add `LICENSE` accordingly.
