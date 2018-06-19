const imagePaths = {
    rainfall: [
        './src/assets/rainfall0.jpg',
        './src/assets/rainfall1.jpg',
        './src/assets/rainfall2.jpg'
    ],
    sunlight: [
        './src/assets/sunlight0.jpg',
        './src/assets/sunlight1.jpg',
        './src/assets/sunlight2.jpg'
    ],
    thunderstorm: [
        './src/assets/thunderstorm0.jpg',
        './src/assets/thunderstorm1.jpg',
        './src/assets/thunderstorm2.jpg'
    ],
    mist: [
        './src/assets/mist0.jpg',
        './src/assets/mist1.jpg',
        './src/assets/mist2.jpg'
    ],
    snow: [
        './src/assets/snow0.jpg'
    ]
};

export const determineBackground = (openWeatherIcon: string, oldBackground) => {
        let types = {
            1: 'sunlight',
            2: 'sunlight',
            3: 'rainfall',
            4: 'rainfall',
            9: 'rainfall',
            10: 'rainfall',
            11: 'thunderstorm',
            13: 'snow',
            50: 'mist'
        };
        let type = types[parseInt(openWeatherIcon)];
        console.log(openWeatherIcon)
        return {
            newBackground: imagePaths[type][Math.floor(Math.random() * imagePaths[type].length)],
            oldBackground: oldBackground
        }
};