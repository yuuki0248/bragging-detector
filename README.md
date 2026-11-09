<p align="center" style="background-color: white">
  <a href="https://bragging-detector.vercel.app/">
    <img src="https://bragging-detector.vercel.app/logo.png" height="200px" alt="自慢ディテクター" />
  </a>
</p>

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

会話中の文章を認識して自慢を検知します。自慢が検知されたときに効果音を鳴らすことができるアプリケーションです。

https://bragging-detector.vercel.app/

## Folder Structure

```
.
├── README.md
├── index.html
├── node_modules
│   ├── [...]
├── package.json
├── public
│   ├── favicon.ico
│   ├── logo.png
│   └── warning01.mp3
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── candidate_words.json
│   └── components
│       ├── Notice.jsx
│       ├── TagField.jsx
│       ├── TranscriptField.jsx
│       └── UploadButton.jsx
└── vite.config.js
```

This is a Vite + React single-page app. `index.html` is the entry point, which loads
`src/main.jsx` to mount `src/App.jsx`. There is no routing or server-side rendering.

The `./public` directory is served as-is at the site root (e.g. `public/logo.png` →
`/logo.png`).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with Vite.<br>
Open the URL printed in the terminal (defaults to [http://localhost:5173](http://localhost:5173)) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Serves the production build from `dist` locally, to sanity-check it before deploying.

See [Vite's deployment docs](https://vite.dev/guide/static-deploy.html) for more information.
