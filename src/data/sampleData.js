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
    }
}; 