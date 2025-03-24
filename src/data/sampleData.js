// Sample data for our stats popups
const sampleData = {
    serveSuccess: {
        title: 'SERVE SUCCESS',
        players: [
            {
                name: 'GROTH JONATHAN',
                percentage: 75,
                isActive: true,
                countryCode: 'dk', // Denmark
                score: 0,
                totalScore: 8
            },
            {
                name: 'JORGIC DARKO',
                percentage: 75,
                isActive: false,
                countryCode: 'si', // Slovenia
                score: 2,
                totalScore: 8
            }
        ],
        organizationLogo: 'src/assets/ettu_logo.png'
    },
    backhandShot: {
        title: 'BACKHAND SHOT WINS',
        players: [
            {
                name: 'BAJOR NATALIA',
                percentage: 83,
                isActive: true,
                countryCode: 'pl', // Poland
                score: 1,
                totalScore: 6
            },
            {
                name: 'WINTER',
                percentage: null, // Not shown in the image
                isActive: false,
                countryCode: 'de', // Germany
                score: 0,
                totalScore: 6
            }
        ],
        organizationLogo: 'src/assets/ettu_logo.png'
    },
    matchSummary: {
        year: '2025',
        tournamentName: 'CCB Europe Top 16 Cup',
        leftLogo: 'src/assets/stupa_logo.png',
        rightLogo: 'src/assets/ettu_logo.png',
        title: 'GAME 2 SUMMARY',
        player1: {
            name: 'MOREGARD TRULS',
            gameScore: '2'
        },
        player2: {
            name: 'FREITAS MARCOS',
            gameScore: '0'
        },
        stats: [
            {
                label: 'TOTAL POINTS WON',
                player1Value: '12',
                player2Value: '10'
            },
            {
                label: 'POINTS WON ON SERVE',
                player1Value: '4',
                player2Value: '4'
            },
            {
                label: 'FOREHAND SHOT WINS',
                player1Value: '18%',
                player2Value: '45%'
            },
            {
                label: 'BACKHAND SHOT WINS',
                player1Value: '45%',
                player2Value: '9%'
            },
            {
                label: 'BIGGEST LEAD',
                player1Value: '3',
                player2Value: '1'
            }
        ],
        footerText: 'STATS BY: STUPA SPORTS ANALYTICS'
    },
    matchRallies: {
        year: '2025',
        tournamentName: 'CCB Europe Top 16 Cup',
        leftLogo: 'src/assets/stupa_logo.png',
        rightLogo: 'src/assets/ettu_logo.png',
        title: 'MATCH RALLIES',
        player1: {
            name: 'SHAO JIENI',
            countryCode: 'pt', // Portugal
            color: '#80C4E6'
        },
        player2: {
            name: 'YUAN JIA NAN',
            countryCode: 'fr', // France
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