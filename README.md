# Sports Statistics Popup Component Library

A flexible and scalable web component library for creating dynamic, data-driven popups, focusing on sports statistics visualization.

## Features

- **Customizable Popups**
  - Dynamic title updates
  - Customizable progress bar graphs with percentage display
  - Match logo display
  - Player information including flags, names, scores
  - Turn indicator to show active player

- **Flexible Styling**
  - Exact color matching from design
  - CSS variables for easy customization
  - Responsive design

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
│   │   ├── flags/       # Country flags
│   │   └── ettu_logo.svg
│   ├── components/      # Reusable components
│   │   └── StatPopup.js # The main popup component
│   ├── data/            # Data structures
│   │   └── sampleData.js
│   ├── styles/          # CSS styles
│   │   ├── main.css     # General styles
│   │   └── popups.css   # Popup-specific styles
│   └── js/              # JavaScript files
│       └── main.js      # Main initialization
```

## Usage

1. Include the required CSS and JavaScript files:

```html
<link rel="stylesheet" href="src/styles/main.css">
<link rel="stylesheet" href="src/styles/popups.css">
<script src="src/components/StatPopup.js"></script>
```

2. Create a container element:

```html
<div id="my-popup" class="popup-container"></div>
```

3. Prepare your data:

```javascript
const myData = {
    title: 'SERVE SUCCESS',
    players: [
        {
            name: 'PLAYER ONE',
            percentage: 75,
            isActive: true,
            countryCode: 'US',
            score: 2,
            totalScore: 10
        },
        // More players...
    ],
    organizationLogo: 'path/to/logo.png'
};
```

4. Initialize the popup:

```javascript
const myPopup = new StatPopup('my-popup', myData);
```

5. To update with new data:

```javascript
myPopup.update(newData);
```

## Customization

You can customize the appearance by modifying the CSS variables in `src/styles/popups.css`:

```css
:root {
    --title-bg: #000000;
    --title-text: #FFFFFF;
    --popup-bg: #1A6E9C;
    /* More variables... */
}
```

### Configuration Options

The StatPopup component supports various configuration options:

```javascript
// Default configuration
const config = {
    showTitle: true,       // Whether to show the title
    showPercentage: true,  // Whether to show percentages
    showProgressBar: true, // Whether to show progress bars
    showLogo: true,        // Whether to show organization logo
    showPlayerFlags: true, // Whether to show player flags
    showTurnIndicator: true, // Whether to show active player indicator
    layout: 'default'      // Layout style: 'default', 'compact', or 'expanded'
};

// Initialize with configuration
const myPopup = new StatPopup('my-popup', myData, config);

// Update with new configuration
myPopup.update(myData, {
    layout: 'compact',
    showLogo: false
});
```

### Responsive Design

The component is responsive by default and will adapt to different screen sizes. On small screens, the layout will adjust to maintain usability.

## Browser Support

This component library works in all modern browsers that support ES6+ and modern CSS features.

## License

MIT 