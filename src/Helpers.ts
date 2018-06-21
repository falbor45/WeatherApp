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

export const setRandomBackground = () => {
    let types = Object.keys(imagePaths);
    let randomType = types[Math.floor(Math.random() * types.length)];

    return imagePaths[randomType][Math.floor(Math.random() * imagePaths[randomType].length)]
}