# React Daily Check-in Challenge

An interactive React application featuring a daily check-in challenge with boat animation and milestone progression.

## Features

- **Interactive Boat Animation**: Click to move the boat across 4 milestones over 28 steps
- **Milestone System**: 4 islands with unique rewards at steps 7, 14, 21, and 28
- **Progress Tracking**: Visual day counter above the boat
- **Footstep Trail**: Shows completed journey with animated footsteps
- **Claim System**: Clickable milestone rewards with "Claim All" functionality
- **Reset Feature**: Reset to previous milestone for strategic gameplay

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/react-demo-bic.git
cd react-demo-bic
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

1. **Next Step**: Click the green button to advance one day
2. **Claim Rewards**: Click milestone indicators when they turn orange
3. **Reset**: Use the red "Reset to Milestone" button to go back one milestone
4. **Claim All**: At step 28, claim all rewards and reset to start

## Project Structure

```
src/
├── App.js          # Main app component
├── Homepage.js     # Main homepage with boat animation
└── index.js        # App entry point
```

## Technologies Used

- React 18
- Webpack 5
- Babel
- CSS-in-JS for styling

## License

MIT License