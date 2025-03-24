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
    
    // Create the second popup (Return Success) with expanded layout
    const returnSuccessPopup = new StatPopup('return-success-popup', sampleData.returnSuccess, {
        layout: 'expanded'
    });
    
    // Create the match summary popup
    const matchSummaryPopup = new MatchSummaryPopup('match-summary-popup', sampleData.matchSummary);
    
    // Create the match rallies popup
    const matchRalliesPopup = new MatchRalliesPopup('match-rallies-popup', sampleData.matchRallies);
    
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
    
    // Update configuration based on UI controls
    updateConfigBtn.addEventListener('click', () => {
        const config = {
            showTitle: showTitleCheck.checked,
            showPercentage: showPercentageCheck.checked,
            showProgressBar: showProgressCheck.checked,
            showLogo: showLogoCheck.checked,
            showPlayerFlags: showFlagsCheck.checked,
            showTurnIndicator: showIndicatorCheck.checked,
            layout: layoutSelect.value
        };
        
        // Update both stat popups with the new config
        serveSuccessPopup.update(sampleData.serveSuccess, config);
        returnSuccessPopup.update(sampleData.returnSuccess, config);
        
        // For match related popups, only update header and footer visibility
        matchSummaryPopup.update(sampleData.matchSummary, {
            showHeader: showLogoCheck.checked,
            showFooter: true
        });
        
        matchRalliesPopup.update(sampleData.matchRallies, {
            showHeader: showLogoCheck.checked,
            showFooter: true
        });
    });
    
    // Update with random data
    updateDataBtn.addEventListener('click', () => {
        // Update with random percentages
        const randomServeSuccess = {
            ...sampleData.serveSuccess,
            players: sampleData.serveSuccess.players.map(player => {
                return {
                    ...player,
                    percentage: Math.floor(Math.random() * 100)
                };
            })
        };
        
        const randomReturnSuccess = {
            ...sampleData.returnSuccess,
            players: sampleData.returnSuccess.players.map(player => {
                return {
                    ...player,
                    percentage: Math.floor(Math.random() * 100)
                };
            })
        };
        
        // Update stats popups with random data
        serveSuccessPopup.update(randomServeSuccess);
        returnSuccessPopup.update(randomReturnSuccess);
        
        // Update match summary and match rallies with random values
        const updateMatchSummary = {
            ...sampleData.matchSummary,
            stats: sampleData.matchSummary.stats.map(stat => {
                return {
                    ...stat,
                    player1Value: String(Math.floor(Math.random() * 50)),
                    player2Value: String(Math.floor(Math.random() * 50))
                };
            })
        };
        
        const updateMatchRallies = {
            ...sampleData.matchRallies,
            rallyStats: sampleData.matchRallies.rallyStats.map(stat => {
                return {
                    ...stat,
                    player1Value: String(Math.floor(Math.random() * 50)),
                    player2Value: String(Math.floor(Math.random() * 50))
                };
            })
        };
        
        matchSummaryPopup.update(updateMatchSummary);
        matchRalliesPopup.update(updateMatchRallies);
    });
    
    // Reset to default
    resetBtn.addEventListener('click', () => {
        // Reset all controls
        layoutSelect.value = 'default';
        showTitleCheck.checked = true;
        showPercentageCheck.checked = true;
        showProgressCheck.checked = true;
        showLogoCheck.checked = true;
        showFlagsCheck.checked = true;
        showIndicatorCheck.checked = true;
        
        // Reset popups to initial state
        serveSuccessPopup.update(sampleData.serveSuccess, {
            showTitle: true,
            showPercentage: true,
            showProgressBar: true,
            showLogo: true,
            showPlayerFlags: true,
            showTurnIndicator: true,
            layout: 'default'
        });
        
        returnSuccessPopup.update(sampleData.returnSuccess, {
            showTitle: true,
            showPercentage: true,
            showProgressBar: true,
            showLogo: true,
            showPlayerFlags: true,
            showTurnIndicator: true,
            layout: 'expanded'
        });
        
        matchSummaryPopup.update(sampleData.matchSummary, {
            showHeader: true,
            showFooter: true
        });
        
        matchRalliesPopup.update(sampleData.matchRallies, {
            showHeader: true,
            showFooter: true
        });
    });
    
    // Load external data
    loadStatsJsonBtn.addEventListener('click', () => {
        loadDataFromJson('src/data/stats-data.json')
            .then(data => {
                if (data) {
                    serveSuccessPopup.update(data.serveSuccess || sampleData.serveSuccess);
                    returnSuccessPopup.update(data.returnSuccess || sampleData.returnSuccess);
                }
            });
    });
    
    loadDynamicJsonBtn.addEventListener('click', () => {
        loadDataFromJson('src/data/dynamic-data.json')
            .then(data => {
                if (data) {
                    matchSummaryPopup.update(data.matchSummary || sampleData.matchSummary);
                    matchRalliesPopup.update(data.matchRallies || sampleData.matchRallies);
                }
            });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();
        
        switch (key) {
            case 'u': // Update data
                updateDataBtn.click();
                break;
            case 'c': // Compact layout
                layoutSelect.value = 'compact';
                updateConfigBtn.click();
                break;
            case 'e': // Expanded layout
                layoutSelect.value = 'expanded';
                updateConfigBtn.click();
                break;
            case 'd': // Default layout
                layoutSelect.value = 'default';
                updateConfigBtn.click();
                break;
            case 'r': // Reset
                resetBtn.click();
                break;
            case 's': // Load stats data
                loadStatsJsonBtn.click();
                break;
            case 'f': // Load dynamic data
                loadDynamicJsonBtn.click();
                break;
        }
    });
}); 