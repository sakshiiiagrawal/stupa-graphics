// Initialize popups when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Function to fetch data from JSON file
    const loadDataFromJson = (url) => {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error("Could not load data from JSON:", error);
                // Fall back to sample data if fetch fails
                return null;
            });
    };

    // Create the first popup (Serve Success) with default layout
    const serveSuccessPopup = new StatPopup('serve-success-popup', sampleData.serveSuccess);
    
    // Create the second popup (Backhand Shot Wins) with expanded layout
    const backhandShotPopup = new StatPopup('backhand-shot-popup', sampleData.backhandShot, {
        layout: 'expanded'
    });
    
    // Handle UI Controls
    const layoutSelect = document.getElementById('layout-select');
    const showTitleCheck = document.getElementById('show-title');
    const showPercentageCheck = document.getElementById('show-percentage');
    const showProgressCheck = document.getElementById('show-progress');
    const showLogoCheck = document.getElementById('show-logo');
    const showFlagsCheck = document.getElementById('show-flags');
    const showIndicatorCheck = document.getElementById('show-indicator');
    
    const updateConfigBtn = document.getElementById('update-config');
    const updateDataBtn = document.getElementById('update-data');
    const resetBtn = document.getElementById('reset');
    const loadStatsJsonBtn = document.getElementById('load-stats-json');
    const loadDynamicJsonBtn = document.getElementById('load-dynamic-json');
    
    // JSON loading buttons
    loadStatsJsonBtn.addEventListener('click', () => {
        loadDataFromJson('src/data/stats-data.json')
            .then(data => {
                if (data) {
                    // Update popups with the loaded data
                    serveSuccessPopup.update(data.serveSuccess);
                    backhandShotPopup.update(data.backhandShot, { layout: 'expanded' });
                    console.log('Loaded stats data from JSON file');
                }
            });
    });
    
    loadDynamicJsonBtn.addEventListener('click', () => {
        loadDataFromJson('src/data/dynamic-data.json')
            .then(data => {
                if (data) {
                    // Update popups with the loaded data
                    serveSuccessPopup.update(data.serveSuccess);
                    backhandShotPopup.update(data.backhandShot, { layout: 'expanded' });
                    console.log('Loaded dynamic data from JSON file');
                }
            });
    });
    
    // Apply settings button
    updateConfigBtn.addEventListener('click', () => {
        const config = {
            layout: layoutSelect.value,
            showTitle: showTitleCheck.checked,
            showPercentage: showPercentageCheck.checked,
            showProgressBar: showProgressCheck.checked,
            showLogo: showLogoCheck.checked,
            showPlayerFlags: showFlagsCheck.checked,
            showTurnIndicator: showIndicatorCheck.checked
        };
        
        serveSuccessPopup.update(serveSuccessPopup.data, config);
    });
    
    // Update data button
    updateDataBtn.addEventListener('click', () => {
        // Update with random percentages
        const player1Percentage = Math.floor(Math.random() * 100);
        const player2Percentage = Math.floor(Math.random() * 100);
        
        const player1Score = Math.floor(Math.random() * 10);
        const player2Score = Math.floor(Math.random() * 10);
        
        // Alternate active player
        const player1Active = !sampleData.serveSuccess.players[0].isActive;
        
        const updatedData = {
            ...sampleData.serveSuccess,
            title: 'UPDATED STATS',
            players: [
                {
                    ...sampleData.serveSuccess.players[0],
                    percentage: player1Percentage,
                    score: player1Score,
                    isActive: player1Active
                },
                {
                    ...sampleData.serveSuccess.players[1],
                    percentage: player2Percentage,
                    score: player2Score,
                    isActive: !player1Active
                }
            ]
        };
        
        serveSuccessPopup.update(updatedData);
    });
    
    // Reset button
    resetBtn.addEventListener('click', () => {
        // Reset the popup to original data
        serveSuccessPopup.update(sampleData.serveSuccess, {
            layout: 'default',
            showTitle: true,
            showPercentage: true,
            showProgressBar: true,
            showLogo: true,
            showPlayerFlags: true,
            showTurnIndicator: true
        });
        
        // Reset second popup too
        backhandShotPopup.update(sampleData.backhandShot, {
            layout: 'expanded',
            showTitle: true,
            showPercentage: true,
            showProgressBar: true,
            showLogo: true,
            showPlayerFlags: true,
            showTurnIndicator: true
        });
        
        // Reset UI controls
        layoutSelect.value = 'default';
        showTitleCheck.checked = true;
        showPercentageCheck.checked = true;
        showProgressCheck.checked = true;
        showLogoCheck.checked = true;
        showFlagsCheck.checked = true;
        showIndicatorCheck.checked = true;
    });
    
    // Add event listeners for the keyboard shortcuts
    document.addEventListener('keydown', (event) => {
        // Press 'U' to update the data
        if (event.key === 'u' || event.key === 'U') {
            updateDataBtn.click();
        }
        
        // Press 'C' to switch to compact layout
        if (event.key === 'c' || event.key === 'C') {
            layoutSelect.value = 'compact';
            updateConfigBtn.click();
        }
        
        // Press 'E' to switch to expanded layout
        if (event.key === 'e' || event.key === 'E') {
            layoutSelect.value = 'expanded';
            updateConfigBtn.click();
        }
        
        // Press 'D' to switch to default layout
        if (event.key === 'd' || event.key === 'D') {
            layoutSelect.value = 'default';
            updateConfigBtn.click();
        }
        
        // Press 'R' to reset
        if (event.key === 'r' || event.key === 'R') {
            resetBtn.click();
        }
        
        // Press 'S' to load stats data
        if (event.key === 's' || event.key === 'S') {
            loadStatsJsonBtn.click();
        }
        
        // Press 'F' to load dynamic data
        if (event.key === 'f' || event.key === 'F') {
            loadDynamicJsonBtn.click();
        }
    });
}); 