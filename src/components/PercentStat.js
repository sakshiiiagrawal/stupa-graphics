/**
 * PercentStat Component - For displaying percentage statistics for one or two players
 */
class PercentStat {
    /**
     * Constructor for the PercentStat component
     * @param {string} containerId - ID of the container element
     * @param {Object} data - Data object containing stats information
     * @param {Object} [config={}] - Configuration options
     */
    constructor(containerId, data, config = {}) {
        this.container = document.getElementById(containerId);
        this.data = data;
        this.config = {
            // Default configuration
            showIndicator: true,
            ...config
        };
        this.render();
    }

    /**
     * Renders the percentage stat component
     */
    render() {
        // Clear the container
        this.container.innerHTML = '';
        
        // Create the percentage stat structure
        const percentStat = document.createElement('div');
        percentStat.className = 'percent-stat';
        
        // Add title
        const title = document.createElement('div');
        title.className = 'percent-stat__title';
        title.textContent = this.data.title || 'PERCENTAGE STAT';
        percentStat.appendChild(title);
        
        // Add content with player stats
        const content = document.createElement('div');
        content.className = 'percent-stat__content';
        
        // Determine if it's single or dual player mode
        const singlePlayerMode = !this.data.players || this.data.players.length <= 1;
        const player = singlePlayerMode ? this.data.player : this.data.players[0];
        
        if (singlePlayerMode) {
            // Single player mode
            content.appendChild(this.createPlayerStat(player));
        } else {
            // Two players mode
            this.data.players.forEach(player => {
                if (player.percentage !== undefined && player.percentage !== null) {
                    content.appendChild(this.createPlayerStat(player));
                }
            });
        }
        
        percentStat.appendChild(content);
        
        // Append to container
        this.container.appendChild(percentStat);
    }
    
    /**
     * Creates a player stat element
     * @param {Object} player - Player data object
     * @returns {HTMLElement} The player stat element
     */
    createPlayerStat(player) {
        const playerStat = document.createElement('div');
        playerStat.className = 'player-stat';
        
        // Create player indicator (circle) if enabled
        if (this.config.showIndicator) {
            const indicator = document.createElement('div');
            indicator.className = 'player-stat__indicator';
            if (player.isActive) {
                indicator.classList.add('active');
            }
            playerStat.appendChild(indicator);
        }
        
        // Create player name
        const name = document.createElement('div');
        name.className = 'player-stat__name';
        name.textContent = player.name;
        playerStat.appendChild(name);
        
        // Create progress bar container
        const progressContainer = document.createElement('div');
        progressContainer.className = 'player-stat__progress-container';
        
        // Create progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'player-stat__progress-bar';
        progressBar.style.width = `${player.percentage}%`;
        progressContainer.appendChild(progressBar);
        playerStat.appendChild(progressContainer);
        
        // Create percentage text
        const percentage = document.createElement('div');
        percentage.className = 'player-stat__percentage';
        percentage.textContent = `${player.percentage}%`;
        playerStat.appendChild(percentage);
        
        return playerStat;
    }
    
    /**
     * Updates the component with new data
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