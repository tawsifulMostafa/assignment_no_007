# KeenKeeper

KeenKeeper is a simple friendship tracker app. In this app users can see their friends, check friend details, add quick check-in activity and view timeline and stats.

## Technologies

- React
- Vite
- React Router DOM
- Tailwind CSS
- DaisyUI
- Lucide React
- Recharts

## Features

1. Home page with banner, summary cards and friend cards
2. Friend details page with friend information
3. Call, Text and Video check-in buttons
4. Timeline page with interaction history
5. Timeline filter by Call, Text and Video
6. Stats page with pie chart
7. 404 page
8. Responsive design

## Data

Friend data is stored in:

```txt
public/data/friends.json
```

## Routes

```txt
/              Home
/friends/:id   Friend Details
/timeline      Timeline
/stats         Stats
/*             Not Found
```

## How to Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
