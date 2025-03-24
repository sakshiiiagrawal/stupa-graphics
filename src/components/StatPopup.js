/**
 * StatPopup Component - For displaying sports statistics popups
 */
class StatPopup {
    /**
     * Constructor for the StatPopup component
     * @param {string} containerId - ID of the container element
     * @param {Object} data - Data object containing popup information
     * @param {Object} [config={}] - Configuration options for the popup
     */
    constructor(containerId, data, config = {}) {
        this.container = document.getElementById(containerId);
        this.data = data;
        this.config = {
            // Default configuration
            showTitle: true,
            showPercentage: true,
            showProgressBar: true,
            showLogo: true,
            showPlayerFlags: true,
            showTurnIndicator: true,
            layout: 'default', // 'default', 'compact', 'expanded'
            // Override with user config
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
        popup.className = `stats-popup stats-popup--${this.config.layout}`;
        
        // Add title
        if (this.config.showTitle) {
            popup.appendChild(this.createTitle());
        }
        
        // Add content with player stats
        popup.appendChild(this.createContent());
        
        // Add match footer with player details
        popup.appendChild(this.createMatchFooter());
        
        // Append to container
        this.container.appendChild(popup);
    }
    
    /**
     * Creates the title section
     * @returns {HTMLElement} The title element
     */
    createTitle() {
        const title = document.createElement('div');
        title.className = 'stats-popup__title';
        title.textContent = this.data.title;
        return title;
    }
    
    /**
     * Creates the content section with player stats
     * @returns {HTMLElement} The content element
     */
    createContent() {
        const content = document.createElement('div');
        content.className = 'stats-popup__content';
        
        // Add player stats
        this.data.players.forEach(player => {
            if (player.percentage !== null) {
                content.appendChild(this.createPlayerStat(player));
            }
        });
        
        return content;
    }
    
    /**
     * Creates a player stat element
     * @param {Object} player - Player data object
     * @returns {HTMLElement} The player stat element
     */
    createPlayerStat(player) {
        const playerStat = document.createElement('div');
        playerStat.className = 'player-stat';
        
        // Create player indicator (circle)
        const indicator = document.createElement('div');
        indicator.className = 'player-stat__indicator';
        if (player.isActive) {
            indicator.classList.add('active');
        }
        playerStat.appendChild(indicator);
        
        // Create player name
        const name = document.createElement('div');
        name.className = 'player-stat__name';
        name.textContent = player.name;
        playerStat.appendChild(name);
        
        // Create progress bar container if enabled
        if (this.config.showProgressBar) {
            const progressContainer = document.createElement('div');
            progressContainer.className = 'player-stat__progress-container';
            
            // Create progress bar
            const progressBar = document.createElement('div');
            progressBar.className = 'player-stat__progress-bar';
            progressBar.style.width = `${player.percentage}%`;
            progressContainer.appendChild(progressBar);
            playerStat.appendChild(progressContainer);
        }
        
        // Create percentage text if enabled
        if (this.config.showPercentage) {
            const percentage = document.createElement('div');
            percentage.className = 'player-stat__percentage';
            percentage.textContent = `${player.percentage}%`;
            playerStat.appendChild(percentage);
        }
        
        return playerStat;
    }
    
    /**
     * Creates the match footer section
     * @returns {HTMLElement} The match footer element
     */
    createMatchFooter() {
        const footer = document.createElement('div');
        footer.className = 'match-footer';
        
        // Create player match details
        this.data.players.forEach(player => {
            footer.appendChild(this.createPlayerMatch(player));
        });
        
        return footer;
    }
    
    /**
     * Creates a player match element for the footer
     * @param {Object} player - Player data object
     * @returns {HTMLElement} The player match element
     */
    createPlayerMatch(player) {
        const playerMatch = document.createElement('div');
        playerMatch.className = 'player-match';
        
        // Create logo if enabled
        if (this.config.showLogo && this.data.organizationLogo) {
            const logo = document.createElement('div');
            logo.className = 'player-match__logo';
            
            // Handle the organization logo
            try {
                const logoImg = document.createElement('img');
                logoImg.src = this.data.organizationLogo;
                logoImg.alt = 'Organization Logo';
                logoImg.height = 30;
                logoImg.onerror = function() {
                    this.onerror = null;
                    this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><rect width="30" height="30" fill="white"/><text x="50%" y="50%" font-family="Arial" font-size="8" fill="black" text-anchor="middle" dominant-baseline="middle">LOGO</text></svg>';
                };
                logo.appendChild(logoImg);
            } catch (e) {
                // Fallback for logo
                logo.textContent = 'LOGO';
            }
            
            playerMatch.appendChild(logo);
        }
        
        // Create flag if enabled
        if (this.config.showPlayerFlags && player.countryCode) {
            const flag = document.createElement('div');
            flag.className = 'player-match__flag';
            
            // Create actual image element with fallback
            try {
                const flagImg = document.createElement('img');
                flagImg.src = `src/assets/flags/${player.countryCode.toLowerCase()}.png`;
                flagImg.alt = `${player.countryCode} flag`;
                flagImg.height = 20;
                flagImg.onerror = function() {
                    this.onerror = null;
                    // Create a text-based flag fallback
                    this.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20"><rect width="30" height="20" fill="%231A6E9C"/><text x="50%" y="50%" font-family="Arial" font-size="10" fill="white" text-anchor="middle" dominant-baseline="middle">${player.countryCode.toUpperCase()}</text></svg>`;
                };
                flag.appendChild(flagImg);
            } catch (e) {
                // Text fallback
                const fallbackText = document.createElement('span');
                fallbackText.textContent = player.countryCode.toUpperCase();
                flag.appendChild(fallbackText);
            }
            
            playerMatch.appendChild(flag);
        }
        
        // Create name
        const name = document.createElement('div');
        name.className = 'player-match__name';
        // Use the first part of the name or the full name if no space is found
        const displayName = player.name.includes(' ') ? player.name.split(' ')[0] : player.name;
        name.textContent = displayName;
        playerMatch.appendChild(name);
        
        // Create turn indicator if player is active and indicator is enabled
        if (player.isActive && this.config.showTurnIndicator) {
            const turn = document.createElement('div');
            turn.className = 'player-match__turn';
            playerMatch.appendChild(turn);
        }
        
        // Create score
        const score = document.createElement('div');
        score.className = 'player-match__score';
        score.textContent = player.score;
        playerMatch.appendChild(score);
        
        // Create total score
        const total = document.createElement('div');
        total.className = 'player-match__total';
        total.textContent = player.totalScore;
        playerMatch.appendChild(total);
        
        return playerMatch;
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