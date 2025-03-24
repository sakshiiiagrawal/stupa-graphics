# Sports Statistics Popup Component Library

A flexible and scalable web component library for creating dynamic, data-driven popups, focusing on sports statistics visualization.

## Features

- **Customizable Popups**
  - Dynamic title updates
  - Customizable progress bar graphs with percentage display
  - Match logo display with Stupa and ETTU logos
  - Player information including flags, names, scores
  - Turn indicator to show active player

- **Multiple Popup Types**
  - **StatPopup**: For displaying player-specific statistics with progress bars
  - **MatchSummaryPopup**: For showing game score, player names, and comparative statistics
  - **MatchRalliesPopup**: For visualizing rally statistics with side-by-side progress bars

- **Flexible Styling**
  - Exact color matching from design specifications
  - CSS variables for easy customization
  - Responsive design for various screen sizes
  - Component-specific CSS files for better organization

- **Dynamic Data Handling**
  - Simple JSON/JavaScript object data structure
  - Easy to update with new data
  - Real-time updates supported

## Project Structure

```
/
├── index.html           # Demo page
├── src/
│   ├── assets/          # Images, logos, and flags
│   │   ├── background/  # Background images for popups
│   │   ├── flags/       # Country flags
│   │   ├── fonts/       # Font files
│   │   └── logos/       # Organization logos
│   ├── components/      # Reusable components
│   │   ├── StatPopup.js         # Basic stats popup component
│   │   ├── MatchSummaryPopup.js # Game summary component
│   │   └── MatchRalliesPopup.js # Game rallies component
│   ├── data/            # Data structures
│   │   ├── sampleData.js       # Sample data for all components
│   │   ├── stats-data.json     # External JSON data example
│   │   └── dynamic-data.json   # Dynamic JSON data example
│   ├── designs/         # Design reference files (PNG)
│   ├── styles/          # CSS styles
│   │   ├── index.css           # Main CSS file importing all component styles
│   │   ├── statPopup.css       # StatPopup specific styles
│   │   ├── matchSummaryPopup.css # MatchSummaryPopup specific styles
│   │   └── matchRalliesPopup.css # MatchRalliesPopup specific styles
│   └── js/              # JavaScript files
│       └── main.js      # Main initialization
```

## Usage

1. Include the required CSS and JavaScript files:

```html
<link rel="stylesheet" href="src/styles/index.css">
<script src="src/components/StatPopup.js"></script>
<script src="src/components/MatchSummaryPopup.js"></script>
<script src="src/components/MatchRalliesPopup.js"></script>
```

2. Create a container element:

```html
<div id="my-popup" class="popup-container"></div>
```

3. Prepare your data:

```javascript
// For a basic stats popup
const statData = {
    title: 'SERVE SUCCESS',
    players: [
        {
            name: 'PLAYER ONE',
            percentage: 75,
            score: '3',
            totalScore: '11',
            country: 'fr',
            isActive: true
        },
        {
            name: 'PLAYER TWO',
            percentage: 45,
            score: '1',
            totalScore: '7',
            country: 'de',
            isActive: false
        }
    ]
};

// For a match summary popup
const matchSummaryData = {
    year: '2025',
    tournamentName: 'Tournament Name',
    title: 'GAME SUMMARY',
    player1: {
        name: 'PLAYER ONE',
        gameScore: '3'
    },
    player2: {
        name: 'PLAYER TWO',
        gameScore: '1'
    },
    stats: [
        {
            label: 'SERVE POINTS WON',
            player1Value: '25',
            player2Value: '13'
        },
        {
            label: 'RETURN POINTS WON',
            player1Value: '22',
            player2Value: '15'
        }
    ],
    footerText: 'STATS BY: STUPA SPORTS ANALYTICS'
};
```

4. Initialize the component:

```javascript
// Create a stats popup
const myStatPopup = new StatPopup('my-popup', statData, {
    // Optional configuration
    layout: 'default', // 'default', 'compact', or 'expanded'
    showTitle: true,
    showPercentage: true,
    showProgressBar: true,
    showLogo: true,
    showPlayerFlags: true,
    showTurnIndicator: true
});

// Or create a match summary popup
const myMatchSummary = new MatchSummaryPopup('my-popup', matchSummaryData, {
    showHeader: true,
    showFooter: true
});
```

5. Update the component with new data:

```javascript
myStatPopup.update(newData, newConfig);
```

## Development

To make changes to the components:

1. Edit the component JavaScript files in `src/components/`
2. Edit the component-specific CSS files in `src/styles/`
3. Test your changes using the demo page (`index.html`)

## License

This project is licensed under the MIT License. 