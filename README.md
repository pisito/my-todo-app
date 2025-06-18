# my-todo-app
Simple todo app with vite and dockerfile for frontend showcase

# 📝 Vite + React Todo App

This is a simple Todo List application built with:

- ⚡ [Vite](https://vitejs.dev/) (modern fast build tool)
- ⚛️ [React](https://reactjs.org/)
- 🐳 Dockerized for production-ready deployment

## 🏃 Local Development

### 1️⃣ Install dependencies

```bash
npm install

Run development server
npm run dev
Open your browser:
👉 http://localhost:5173

The app supports Hot Module Replacement (HMR) for instant updates.

Build for Production
npm run build

Preview locally:
npm run preview
The production-ready files are generated in /dist folder.

Dockerized Deployment
docker build -t my-vite-app .
docker run -p 8080:80 my-vite-app

Open your browser:
👉 http://localhost:8080

The production app is served via lightweight Nginx.

 Project Structure
 my-vite-app/
│
├── src/               # React source code
│   ├── App.jsx
│   └── main.jsx
│
├── public/            # Static assets
├── dist/              # Build output (auto-generated)
├── Dockerfile         # Docker build file
├── nginx.conf         # Nginx config for SPA routing
├── package.json
├── vite.config.js
└── README.md

Environment Variables (Optional)
If you use environment variables in Vite:

Create .env file in project root.

Prefix your variables with VITE_ to expose them to client code.

Example:
VITE_API_URL=https://api.example.com

Dependencies
React 18+

Vite 5+

Node 20+

Nginx (Docker image: nginx:alpine)

Author
Created by Pisit Praiwattana and ChatGPT for demonstration