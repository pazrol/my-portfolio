# Izairy Fazrul — MERN Portfolio

A professional cybersecurity/software developer portfolio built with React + Vite, Express, Node.js, MongoDB, and Mongoose.

## Features
- Responsive dark cybersecurity-inspired UI
- Home, About, Achievements, Projects, Skills, Contact
- Framer Motion animations
- Project and achievement data from REST APIs
- Contact form stored in MongoDB
- Input validation, rate limiting, CORS, centralized error handling
- GitHub and LinkedIn placeholders
- CV download placeholder
- Fallback portfolio data when the API is unavailable

## Requirements
- Node.js 20+
- MongoDB local installation or MongoDB Atlas

## Setup

### Backend
```bash
cd server
npm install
cp .env.example .env
# Add your MongoDB connection string to .env
npm run dev
```

### Frontend
Open another terminal:
```bash
cd client
npm install
npm run dev
```

Frontend: http://localhost:5173
Backend: http://localhost:5000

## Environment
Server `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/izairy_portfolio
CLIENT_URL=http://localhost:5173
```

## API
- GET `/api/health`
- GET `/api/projects`
- GET `/api/projects/:id`
- POST `/api/projects`
- GET `/api/achievements`
- GET `/api/achievements/:id`
- POST `/api/achievements`
- POST `/api/contact`
- GET `/api/contact`

## Notes
The POST project/achievement endpoints are intentionally simple for a student portfolio. Before production use, add authentication/authorization for content management.

Replace the placeholder GitHub, LinkedIn, email, CV, project links, and images with your real details.

## Frontend Component Structure

Each major website section is separated into its own React file:

```text
client/src/
├── components/
│   ├── Navbar.jsx
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Achievements.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Field.jsx
│   ├── SectionHeading.jsx
│   ├── InfoCard.jsx
│   └── index.js
├── data/
│   └── fallback.js
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css
```

`App.jsx` is intentionally kept small. It handles page-level state, API calls and combines the individual sections. Edit each section inside its own component file.

