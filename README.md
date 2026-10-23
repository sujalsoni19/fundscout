# FundScout

Search Indian mutual funds, save them to a watchlist, and track NAV growth with interactive 1Y / 3Y / 5Y / All charts.

## Live Demo

- **Frontend:** https://fundscout-live.vercel.app
- **Backend API:** https://fundscout.onrender.com

> **Note:** This app runs on free hosting tiers. If it hasn't been used for a while, the backend may take around a minute to wake up on the first request, and the MongoDB Atlas cluster may have been paused.

---

## Overview

A full-stack MERN app built as a take-home assignment for a MERN stack role. The brief: search funds, keep a persistent watchlist, and show a NAV performance chart, using the free public [MFapi.in](https://www.mfapi.in/) API for fund data.

---

## Features

- Debounced search for Indian mutual funds
- Persistent watchlist stored in MongoDB, with duplicate prevention
- Remove funds from the watchlist
- Fund detail page with a historical NAV line chart
- Range filters: 1Y, 3Y, 5Y and All
- Loading, empty and error states

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Tailwind CSS, shadcn/ui, Recharts, Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose), MongoDB Atlas |
| Data source | [MFapi.in](https://www.mfapi.in/) |
| Hosting | Vercel (frontend), Render (backend), MongoDB Atlas (database) |

---

## API Endpoints

### Watchlist

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/watchlist` | Get all watchlist items |
| POST | `/api/watchlist` | Add a fund to the watchlist |
| DELETE | `/api/watchlist/:schemeCode` | Remove a fund from the watchlist |

### Fund details

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/funds/:schemeCode` | Get historical NAV data for a fund |

---

## Running Locally

### Prerequisites

- Node.js 18 or later
- A MongoDB Atlas connection string (or a local MongoDB instance)

### 1. Clone the repository

```bash
git clone https://github.com/sujalsoni19/fundscout.git
cd fundscout
```

### 2. Backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
DB_NAME=your_db_name
CORS_ORIGIN=http://localhost:5173
```

Start the server:

```bash
npm run dev
```

The API runs at `http://localhost:5000`.

### 3. Frontend

```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/`:

```env
VITE_API_BASE_URL=http://localhost:5000
```

Start the app:

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

---

## Deployment

- The frontend is deployed on Vercel, the backend on Render, and the database on MongoDB Atlas.
- Environment variables are set on each platform, and no secrets are committed.
- The backend's CORS setting allows the deployed frontend's origin, and the frontend's API base URL points to the deployed backend.

---

## Assumptions

- A single shared watchlist is used, since no user accounts were required.
- No authentication is implemented.
- MFapi.in is assumed to be available.

---

## Known Limitations

- Some schemes on MFapi.in have outdated or incomplete NAV history.
- Search results are not paginated.
- NAV responses are not cached on the backend.
- On free tiers, the first request after a period of inactivity can be slow.

---

## Author

**Sujal Soni**
[GitHub](https://github.com/sujalsoni19) 
