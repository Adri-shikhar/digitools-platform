# DigiTools Platform

A modern React + Vite single-page application for showcasing and purchasing digital tools.

## Live Features

- Product browsing from local JSON data
- Add/remove items in cart
- Cart total price calculation
- Checkout action with toast feedback
- Tab switching between Products and Cart views
- Additional marketing sections: Hero, Steps, Pricing, Banner, Footer

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- DaisyUI 5
- React Toastify
- ESLint 9

## Project Structure

```
digitools-platform/
├── public/
│   └── data.json
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Cart.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Modal.jsx
│   │   ├── ModalCard.jsx
│   │   ├── Nav.jsx
│   │   ├── Pricing.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── Steps.jsx
│   │   └── Tab.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### 1. Clone and Enter Project

```bash
git clone <your-repository-url>
cd digitools-platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Vite will print a local URL (usually http://localhost:5173).

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Data Source

Product data is loaded from:

- `public/data.json`

The app fetches it in `src/App.jsx` using:

- `fetch('/data.json')`

## Deployment Notes

The current Vite base path in `vite.config.js` is set to `/`:

```js
export default defineConfig({
	base: '/',
	plugins: [react(), tailwindcss()],
})
```

If you deploy to GitHub Pages under a repository path, set:

```js
base: '/your-repo-name/'
```

Then run:

```bash
npm run build
```

## Author

Assignment project for Programming Hero.
