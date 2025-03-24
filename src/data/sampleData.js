// Sample data for our stats popups
const sampleData = {
    serveSuccess: {
        title: 'SERVE SUCCESS',
        players: [
            {
                name: 'SHAO JIENI',
                percentage: 75,
                score: '3',
                totalScore: '11',
                country: 'Portugal',
                isActive: true
            },
            {
                name: 'YUAN JIA NAN',
                percentage: 45,
                score: '1',
                totalScore: '7',
                country: 'France',
                isActive: false
            }
        ]
    },
    returnSuccess: {
        title: 'RETURN SUCCESS',
        players: [
            {
                name: 'SHAO JIENI',
                percentage: 65,
                score: '3',
                totalScore: '11',
                country: 'Portugal',
                isActive: false
            },
            {
                name: 'YUAN JIA NAN',
                percentage: 48,
                score: '1',
                totalScore: '7',
                country: 'France',
                isActive: true
            }
        ]
    },
    pointsWon: {
        title: 'POINTS WON',
        players: [
            {
                name: 'SHAO JIENI',
                percentage: 71,
                score: '3',
                totalScore: '11',
                country: 'Portugal',
                isActive: true
            },
            {
                name: 'YUAN JIA NAN',
                percentage: 29,
                score: '1',
                totalScore: '7',
                country: 'France',
                isActive: false
            }
        ]
    },
    matchSummary: {
        year: '2025',
        tournamentName: 'CCB Europe Top 16 Cup',
        title: 'GAME SUMMARY',
        player1: {
            name: 'SHAO JIENI',
            gameScore: '3'
        },
        player2: {
            name: 'YUAN JIA NAN',
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
            },
            {
                label: 'WINNERS',
                player1Value: '11',
                player2Value: '7'
            },
            {
                label: 'ERRORS',
                player1Value: '3',
                player2Value: '9'
            }
        ],
        footerText: 'STATS BY: STUPA SPORTS ANALYTICS'
    },
    matchRallies: {
        year: '2025',
        tournamentName: 'CCB Europe Top 16 Cup',
        title: 'GAME RALLIES',
        player1: {
            name: 'SHAO JIENI',
            countryCode: 'Portugal', // Portugal
            color: '#80C4E6'
        },
        player2: {
            name: 'YUAN JIA NAN',
            countryCode: 'France', // France
            color: '#2F74A4'
        },
        rallyStats: [
            {
                label: 'POINTS WON ON SHORT RALLIES (1-4 SHOTS)',
                player1Value: '35',
                player2Value: '26'
            },
            {
                label: 'POINTS WON ON MEDIUM RALLIES (5-8 SHOTS)',
                player1Value: '9',
                player2Value: '10'
            },
            {
                label: 'POINTS WON ON LONG RALLIES (8+ SHOTS)',
                player1Value: '2',
                player2Value: '1'
            }
        ],
        footerText: 'STATS BY: STUPA SPORTS ANALYTICS'
    }
}; 