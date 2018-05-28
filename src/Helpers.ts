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
    ]
};

export const setRandomBackground = (type: string) => {
    document.documentElement.style.background = `url('${imagePaths[type][Math.floor(Math.random() * imagePaths[type].length)]}') no-repeat center center fixed`;
    return null;
}