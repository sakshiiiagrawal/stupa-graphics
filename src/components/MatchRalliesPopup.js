/**
 * MatchRalliesPopup Component - For displaying match rally statistics
 */
class MatchRalliesPopup {
    /**
     * Constructor for the MatchRalliesPopup component
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
        popup.className = 'match-rallies-popup';
        
        // Add header
        if (this.config.showHeader) {
            popup.appendChild(this.createHeader());
        }
        
        // Add title
        popup.appendChild(this.createTitle());
        
        // Add player info
        popup.appendChild(this.createPlayerInfo());
        
        // Add rally stats
        if (this.data.rallyStats && this.data.rallyStats.length) {
            this.data.rallyStats.forEach(stat => {
                popup.appendChild(this.createRallyStat(stat));
            });
        }
        
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
        header.className = 'match-rallies-popup__header';
        
        // Left logo
        const leftLogo = document.createElement('div');
        leftLogo.className = 'match-rallies-popup__logo match-rallies-popup__logo--left';
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
        centerInfo.className = 'match-rallies-popup__center-info';
        
        const year = document.createElement('div');
        year.className = 'match-rallies-popup__year';
        year.textContent = this.data.year || '2025';
        
        const tournamentName = document.createElement('div');
        tournamentName.className = 'match-rallies-popup__tournament-name';
        tournamentName.textContent = this.data.tournamentName || 'Tournament Name';
        
        centerInfo.appendChild(year);
        centerInfo.appendChild(tournamentName);
        header.appendChild(centerInfo);
        
        // Right logo
        const rightLogo = document.createElement('div');
        rightLogo.className = 'match-rallies-popup__logo match-rallies-popup__logo--right';
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
        titleBar.className = 'match-rallies-popup__title-bar';
        
        const title = document.createElement('div');
        title.className = 'match-rallies-popup__title';
        title.textContent = this.data.title || 'MATCH RALLIES';
        titleBar.appendChild(title);
        
        return titleBar;
    }
    
    /**
     * Creates the player information section
     * @returns {HTMLElement} The player info element
     */
    createPlayerInfo() {
        const playerInfo = document.createElement('div');
        playerInfo.className = 'match-rallies-popup__player-info';
        
        // Player 1 info
        const player1Info = document.createElement('div');
        player1Info.className = 'match-rallies-popup__player';
        
        const player1Color = document.createElement('div');
        player1Color.className = 'match-rallies-popup__player-color';
        player1Color.style.backgroundColor = this.data.player1.color || '#80C4E6';
        player1Info.appendChild(player1Color);
        
        const player1Name = document.createElement('div');
        player1Name.className = 'match-rallies-popup__player-name';
        player1Name.textContent = this.data.player1.name || 'Player 1';
        player1Info.appendChild(player1Name);
        
        if (this.data.player1.countryCode) {
            const player1Flag = document.createElement('div');
            player1Flag.className = 'match-rallies-popup__player-flag';
            
            try {
                const flagImg = document.createElement('img');
                flagImg.src = `src/assets/flags/${this.data.player1.countryCode.toLowerCase()}.png`;
                flagImg.alt = `${this.data.player1.countryCode} flag`;
                player1Flag.appendChild(flagImg);
            } catch (e) {
                player1Flag.textContent = this.data.player1.countryCode.toUpperCase();
            }
            
            player1Info.appendChild(player1Flag);
        }
        
        playerInfo.appendChild(player1Info);
        
        // Player 2 info (aligned right)
        const player2Info = document.createElement('div');
        player2Info.className = 'match-rallies-popup__player match-rallies-popup__player--right';
        
        if (this.data.player2.countryCode) {
            const player2Flag = document.createElement('div');
            player2Flag.className = 'match-rallies-popup__player-flag';
            
            try {
                const flagImg = document.createElement('img');
                flagImg.src = `src/assets/flags/${this.data.player2.countryCode.toLowerCase()}.png`;
                flagImg.alt = `${this.data.player2.countryCode} flag`;
                player2Flag.appendChild(flagImg);
            } catch (e) {
                player2Flag.textContent = this.data.player2.countryCode.toUpperCase();
            }
            
            player2Info.appendChild(player2Flag);
        }
        
        const player2Name = document.createElement('div');
        player2Name.className = 'match-rallies-popup__player-name';
        player2Name.textContent = this.data.player2.name || 'Player 2';
        player2Info.appendChild(player2Name);
        
        const player2Color = document.createElement('div');
        player2Color.className = 'match-rallies-popup__player-color';
        player2Color.style.backgroundColor = this.data.player2.color || '#2F74A4';
        player2Info.appendChild(player2Color);
        
        playerInfo.appendChild(player2Info);
        
        return playerInfo;
    }
    
    /**
     * Creates a rally stat row with progress bar
     * @param {Object} stat - The rally stat data
     * @returns {HTMLElement} The rally stat element
     */
    createRallyStat(stat) {
        const statContainer = document.createElement('div');
        statContainer.className = 'match-rallies-popup__stat-container';
        
        // Values row
        const valuesRow = document.createElement('div');
        valuesRow.className = 'match-rallies-popup__values-row';
        
        // Player 1 value
        const value1 = document.createElement('div');
        value1.className = 'match-rallies-popup__value';
        value1.textContent = stat.player1Value;
        valuesRow.appendChild(value1);
        
        // Stat label
        const label = document.createElement('div');
        label.className = 'match-rallies-popup__stat-label';
        label.textContent = stat.label;
        valuesRow.appendChild(label);
        
        // Player 2 value
        const value2 = document.createElement('div');
        value2.className = 'match-rallies-popup__value';
        value2.textContent = stat.player2Value;
        valuesRow.appendChild(value2);
        
        statContainer.appendChild(valuesRow);
        
        // Progress bar container
        const progressContainer = document.createElement('div');
        progressContainer.className = 'match-rallies-popup__progress-container';
        
        // Calculate total and percentages
        const total = parseInt(stat.player1Value) + parseInt(stat.player2Value);
        const player1Percent = total > 0 ? (parseInt(stat.player1Value) / total * 100) : 50;
        const player2Percent = total > 0 ? (parseInt(stat.player2Value) / total * 100) : 50;
        
        // Player 1 progress bar
        const progress1 = document.createElement('div');
        progress1.className = 'match-rallies-popup__progress match-rallies-popup__progress--player1';
        progress1.style.width = `${player1Percent}%`;
        progress1.style.backgroundColor = this.data.player1.color || '#80C4E6';
        progressContainer.appendChild(progress1);
        
        // Player 2 progress bar
        const progress2 = document.createElement('div');
        progress2.className = 'match-rallies-popup__progress match-rallies-popup__progress--player2';
        progress2.style.width = `${player2Percent}%`;
        progress2.style.backgroundColor = this.data.player2.color || '#2F74A4';
        progressContainer.appendChild(progress2);
        
        statContainer.appendChild(progressContainer);
        
        return statContainer;
    }
    
    /**
     * Creates the footer section
     * @returns {HTMLElement} The footer element
     */
    createFooter() {
        const footer = document.createElement('div');
        footer.className = 'match-rallies-popup__footer';
        
        const footerText = document.createElement('div');
        footerText.className = 'match-rallies-popup__footer-text';
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