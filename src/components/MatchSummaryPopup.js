/**
 * MatchSummaryPopup Component - For displaying match summary statistics
 */
class MatchSummaryPopup {
    /**
     * Constructor for the MatchSummaryPopup component
     * @param {string} containerId - ID of the container element
     * @param {Object} data - Data object containing popup information
     * @param {Object} [config={}] - Configuration options for the popup
     */
    constructor(containerId, data, config = {}) {
        this.container = document.getElementById(containerId);
        this.data = data;
        this.config = {
            // Default configuration
            showHeader: true,
            showFooter: true,
            ...config
        };
        this.render();
    }

    /**
     * Renders the popup component
     */
    render() {
        // Clear the container
        this.container.innerHTML = '';
        
        // Create the popup structure
        const popup = document.createElement('div');
        popup.className = 'match-summary-popup';
        
        // Add header
        if (this.config.showHeader) {
            popup.appendChild(this.createHeader());
        }
        
        // Add title
        popup.appendChild(this.createTitle());
        
        // Add player names
        popup.appendChild(this.createPlayerNames());
        
        // Add stats rows
        popup.appendChild(this.createStatsRows());
        
        // Add footer
        if (this.config.showFooter) {
            popup.appendChild(this.createFooter());
        }
        
        // Append to container
        this.container.appendChild(popup);
    }
    
    /**
     * Creates the header section with tournament info
     * @returns {HTMLElement} The header element
     */
    createHeader() {
        const header = document.createElement('div');
        header.className = 'match-summary-popup__header';
        
        // Left logo
        const leftLogo = document.createElement('div');
        leftLogo.className = 'match-summary-popup__logo match-summary-popup__logo--left';
        if (this.data.leftLogo) {
            const img = document.createElement('img');
            img.src = this.data.leftLogo;
            img.alt = 'Left Logo';
            leftLogo.appendChild(img);
        } else {
            leftLogo.textContent = 'LOGO';
        }
        header.appendChild(leftLogo);
        
        // Center info
        const centerInfo = document.createElement('div');
        centerInfo.className = 'match-summary-popup__center-info';
        
        const year = document.createElement('div');
        year.className = 'match-summary-popup__year';
        year.textContent = this.data.year || '2025';
        
        const tournamentName = document.createElement('div');
        tournamentName.className = 'match-summary-popup__tournament-name';
        tournamentName.textContent = this.data.tournamentName || 'Tournament Name';
        
        centerInfo.appendChild(year);
        centerInfo.appendChild(tournamentName);
        header.appendChild(centerInfo);
        
        // Right logo
        const rightLogo = document.createElement('div');
        rightLogo.className = 'match-summary-popup__logo match-summary-popup__logo--right';
        if (this.data.rightLogo) {
            const img = document.createElement('img');
            img.src = this.data.rightLogo;
            img.alt = 'Right Logo';
            rightLogo.appendChild(img);
        } else {
            rightLogo.textContent = 'LOGO';
        }
        header.appendChild(rightLogo);
        
        return header;
    }
    
    /**
     * Creates the title section
     * @returns {HTMLElement} The title element
     */
    createTitle() {
        const titleBar = document.createElement('div');
        titleBar.className = 'match-summary-popup__title-bar';
        
        // Score 1
        const score1 = document.createElement('div');
        score1.className = 'match-summary-popup__score';
        score1.textContent = this.data.player1.gameScore || '0';
        titleBar.appendChild(score1);
        
        // Title
        const title = document.createElement('div');
        title.className = 'match-summary-popup__title';
        title.textContent = this.data.title || 'GAME SUMMARY';
        titleBar.appendChild(title);
        
        // Score 2
        const score2 = document.createElement('div');
        score2.className = 'match-summary-popup__score';
        score2.textContent = this.data.player2.gameScore || '0';
        titleBar.appendChild(score2);
        
        return titleBar;
    }
    
    /**
     * Creates the player names section
     * @returns {HTMLElement} The player names element
     */
    createPlayerNames() {
        const namesBar = document.createElement('div');
        namesBar.className = 'match-summary-popup__names-bar';
        
        // Player 1 name
        const player1 = document.createElement('div');
        player1.className = 'match-summary-popup__player-name';
        player1.textContent = this.data.player1.name || 'Player 1';
        namesBar.appendChild(player1);
        
        // Player 2 name
        const player2 = document.createElement('div');
        player2.className = 'match-summary-popup__player-name';
        player2.textContent = this.data.player2.name || 'Player 2';
        namesBar.appendChild(player2);
        
        return namesBar;
    }
    
    /**
     * Creates the stats rows
     * @returns {HTMLElement} The stats container
     */
    createStatsRows() {
        const statsContainer = document.createElement('div');
        statsContainer.className = 'match-summary-popup__stats-container';
        
        // Create rows for each stat in the data
        if (this.data.stats && this.data.stats.length) {
            this.data.stats.forEach(stat => {
                const row = document.createElement('div');
                row.className = 'match-summary-popup__stat-row';
                
                // Player 1 value
                const value1 = document.createElement('div');
                value1.className = 'match-summary-popup__stat-value';
                value1.textContent = stat.player1Value;
                row.appendChild(value1);
                
                // Stat label
                const label = document.createElement('div');
                label.className = 'match-summary-popup__stat-label';
                label.textContent = stat.label;
                row.appendChild(label);
                
                // Player 2 value
                const value2 = document.createElement('div');
                value2.className = 'match-summary-popup__stat-value';
                value2.textContent = stat.player2Value;
                row.appendChild(value2);
                
                statsContainer.appendChild(row);
            });
        }
        
        return statsContainer;
    }
    
    /**
     * Creates the footer section
     * @returns {HTMLElement} The footer element
     */
    createFooter() {
        const footer = document.createElement('div');
        footer.className = 'match-summary-popup__footer';
        
        const footerText = document.createElement('div');
        footerText.className = 'match-summary-popup__footer-text';
        footerText.textContent = this.data.footerText || 'STATS BY: STUPA SPORTS ANALYTICS';
        
        footer.appendChild(footerText);
        return footer;
    }
    
    /**
     * Updates the popup with new data
     * @param {Object} newData - New data to display
     * @param {Object} [newConfig] - New configuration options
     */
    update(newData, newConfig) {
        this.data = newData;
        if (newConfig) {
            this.config = {
                ...this.config,
                ...newConfig
            };
        }
        this.render();
    }
} 