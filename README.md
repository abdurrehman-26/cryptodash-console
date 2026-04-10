# CryptoDash Console

A lightweight crypto dashboard that displays **near real-time market data with 1-minute cached updates** from a backend service.

---

## What is this?

CryptoDash Console is a web-based dashboard that shows cryptocurrency prices, trends, and basic market information.

This makes it suitable for:
- Dashboards and internal tools
- Lightweight analytics views
- Low-cost production deployments

---

## How it works

- Frontend requests crypto data from backend API
- Backend fetches and caches external crypto data
- Cached data is served for **1 minute**
- After cache expires, fresh data is fetched again

This design ensures:
- Faster responses
- Reduced API rate limits
- Stable and predictable output

---

## Tech Stack

- Next.js
- TypeScript
- REST API integration for crypto data

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/abdurrehman-26/cryptodash-console.git
cd cryptodash-console
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development
```bash
npm run dev
```

### 4. Build the frontend
```bash
npm run build
```

### 5. Start the server
```bash
npm run start
```
