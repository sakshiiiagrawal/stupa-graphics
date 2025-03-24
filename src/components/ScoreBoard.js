/**
 * ScoreBoard Component - For displaying player names, flags, and scores
 * Designed to exactly match the design in ScoreBoard.png
 */
class ScoreBoard {
    /**
     * Constructor for the ScoreBoard component
     * @param {string} containerId - ID of the container element
     * @param {Object} data - Data object containing player and score information
     * @param {Object} [config={}] - Configuration options
     */
    constructor(containerId, data, config = {}) {
        this.container = document.getElementById(containerId);
        this.data = data;
        this.config = {
            // Default configuration
            showTitle: true,
            titleText: 'SCORE',
            ...config
        };
        this.render();
    }

    /**
     * Renders the scoreboard component
     */
    render() {
        // Clear the container
        this.container.innerHTML = '';
        
        // Create the scoreboard structure
        const scoreBoard = document.createElement('div');
        scoreBoard.className = 'score-board';
        
        // Create header section with logos and title
        const header = document.createElement('div');
        header.className = 'score-board__header';
        
        // Left logo
        const leftLogo = document.createElement('div');
        leftLogo.className = 'score-board__logo score-board__logo--left';
        const leftLogoImg = document.createElement('img');
        leftLogoImg.src = 'src/assets/logos/stupa-logo-dark.png';
        leftLogoImg.alt = 'Stupa Analytics';
        leftLogo.appendChild(leftLogoImg);
        header.appendChild(leftLogo);
        
        // Title section
        if (this.config.showTitle) {
            const titleContainer = document.createElement('div');
            titleContainer.className = 'score-board__title-container';
            
            const title = document.createElement('div');
            title.className = 'score-board__title';
            title.textContent = this.config.titleText;
            titleContainer.appendChild(title);
            
            header.appendChild(titleContainer);
        }
        
        // Right logo
        const rightLogo = document.createElement('div');
        rightLogo.className = 'score-board__logo score-board__logo--right';
        const rightLogoImg = document.createElement('img');
        rightLogoImg.src = 'src/assets/logos/ettu-logo.png';
        rightLogoImg.alt = 'ETTU';
        rightLogo.appendChild(rightLogoImg);
        header.appendChild(rightLogo);
        
        scoreBoard.appendChild(header);
        
        // Add player section
        const playerSection = document.createElement('div');
        playerSection.className = 'score-board__player-section';
        
        // Left player
        if (this.data.leftPlayer) {
            playerSection.appendChild(this.createPlayerInfo(this.data.leftPlayer, 'left'));
        }
        
        // Score section
        const scoreContainer = document.createElement('div');
        scoreContainer.className = 'score-board__score-container';
        
        const scoreLabel = document.createElement('div');
        scoreLabel.className = 'score-board__score-label';
        scoreLabel.textContent = 'SCORE';
        scoreContainer.appendChild(scoreLabel);
        
        const scoreDisplay = document.createElement('div');
        scoreDisplay.className = 'score-board__score-display';
        
        // Set scores
        const leftScore = document.createElement('div');
        leftScore.className = 'score-board__score score-board__score--left';
        leftScore.textContent = this.data.leftScore || '0';
        
        const scoreSeparator = document.createElement('div');
        scoreSeparator.className = 'score-board__score-separator';
        scoreSeparator.textContent = '-';
        
        const rightScore = document.createElement('div');
        rightScore.className = 'score-board__score score-board__score--right';
        rightScore.textContent = this.data.rightScore || '0';
        
        scoreDisplay.appendChild(leftScore);
        scoreDisplay.appendChild(scoreSeparator);
        scoreDisplay.appendChild(rightScore);
        scoreContainer.appendChild(scoreDisplay);
        
        playerSection.appendChild(scoreContainer);
        
        // Right player
        if (this.data.rightPlayer) {
            playerSection.appendChild(this.createPlayerInfo(this.data.rightPlayer, 'right'));
        }
        
        scoreBoard.appendChild(playerSection);
        
        // Create footer with tournament info if available
        if (this.data.tournamentName || this.data.eventInfo) {
            const footer = document.createElement('div');
            footer.className = 'score-board__footer';
            
            const tournamentInfo = document.createElement('div');
            tournamentInfo.className = 'score-board__tournament-info';
            tournamentInfo.textContent = this.data.tournamentName || this.data.eventInfo || '';
            
            footer.appendChild(tournamentInfo);
            scoreBoard.appendChild(footer);
        }
        
        // Append to container
        this.container.appendChild(scoreBoard);
    }
    
    /**
     * Creates a player info element with name and flag
     * @param {Object} player - Player data object
     * @param {string} side - 'left' or 'right' side
     * @returns {HTMLElement} The player info element
     */
    createPlayerInfo(player, side) {
        const playerInfo = document.createElement('div');
        playerInfo.className = `score-board__player score-board__player--${side}`;
        
        // Player container to hold flag and name
        const playerContainer = document.createElement('div');
        playerContainer.className = 'score-board__player-container';
        
        // Create player flag
        if (player.country) {
            const flag = document.createElement('div');
            flag.className = 'score-board__flag';
            
            const flagImg = document.createElement('img');
            // Convert to uppercase and take first 3 characters of country code
            const countryCode = player.country.substring(0, 3).toUpperCase();
            flagImg.src = `src/assets/flags/${countryCode}.png`;
            flagImg.alt = player.country;
            flag.appendChild(flagImg);
            
            // Add flag based on side
            playerContainer.appendChild(flag);
        }
        
        // Create player name
        const nameContainer = document.createElement('div');
        nameContainer.className = 'score-board__name-container';
        
        const name = document.createElement('div');
        name.className = 'score-board__name';
        name.textContent = player.name.toUpperCase();
        nameContainer.appendChild(name);
        
        playerContainer.appendChild(nameContainer);
        playerInfo.appendChild(playerContainer);
        
        return playerInfo;
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