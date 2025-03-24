// Initialize components when the DOM is loaded
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

    // Create the scoreboard component demo
    const scoreboardDemo = new ScoreBoard('scoreboard-demo', {
        leftPlayer: sampleData.serveSuccess.players[0],
        rightPlayer: sampleData.serveSuccess.players[1],
        leftScore: sampleData.serveSuccess.players[0].score,
        rightScore: sampleData.serveSuccess.players[1].score,
        tournamentName: sampleData.matchSummary.tournamentName,
        eventInfo: `${sampleData.matchSummary.year} - Round of 16`
    });
    
    // Create the percent stat component demo
    const percentStatDemo = new PercentStat('percent-stat-demo', {
        title: "FOREHAND WINNERS",
        players: sampleData.serveSuccess.players
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
            showIndicator: showIndicatorCheck.checked
        };
        
        // Update ScoreBoard with the relevant config
        scoreboardDemo.update({
            leftPlayer: sampleData.serveSuccess.players[0],
            rightPlayer: sampleData.serveSuccess.players[1],
            leftScore: sampleData.serveSuccess.players[0].score,
            rightScore: sampleData.serveSuccess.players[1].score,
            tournamentName: sampleData.matchSummary.tournamentName,
            eventInfo: `${sampleData.matchSummary.year} - Round of 16`
        }, {
            showTitle: config.showTitle
        });
        
        // Update PercentStat with the relevant config
        percentStatDemo.update({
            title: "FOREHAND WINNERS",
            players: sampleData.serveSuccess.players
        }, {
            showIndicator: config.showIndicator
        });
        
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
        // Generate random players with random percentages
        const randomPlayers = sampleData.serveSuccess.players.map(player => {
            return {
                ...player,
                percentage: Math.floor(Math.random() * 100)
            };
        });
        
        // Update standalone component demos with random data
        scoreboardDemo.update({
            leftPlayer: randomPlayers[0],
            rightPlayer: randomPlayers[1],
            leftScore: String(Math.floor(Math.random() * 11)),
            rightScore: String(Math.floor(Math.random() * 11)),
            tournamentName: sampleData.matchSummary.tournamentName,
            eventInfo: `${sampleData.matchSummary.year} - Round ${Math.floor(Math.random() * 8) + 1}`
        });
        
        percentStatDemo.update({
            title: "FOREHAND WINNERS",
            players: randomPlayers
        });
        
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
        
        // Reset ScoreBoard to initial state
        scoreboardDemo.update({
            leftPlayer: sampleData.serveSuccess.players[0],
            rightPlayer: sampleData.serveSuccess.players[1],
            leftScore: sampleData.serveSuccess.players[0].score,
            rightScore: sampleData.serveSuccess.players[1].score,
            tournamentName: sampleData.matchSummary.tournamentName,
            eventInfo: `${sampleData.matchSummary.year} - Round of 16`
        }, {
            showTitle: true
        });
        
        // Reset PercentStat to initial state
        percentStatDemo.update({
            title: "FOREHAND WINNERS",
            players: sampleData.serveSuccess.players
        }, {
            showIndicator: true
        });
        
        // Reset match popups
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
                    // Use the data for our components if available
                    if (data.scoreBoardData) {
                        scoreboardDemo.update(data.scoreBoardData);
                    }
                    
                    if (data.percentStatData) {
                        percentStatDemo.update(data.percentStatData);
                    }
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