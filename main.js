const animalList = ["cow", "sheep", "chicken", "pig", "cow", "cow", "pig", "sheep", "cow", "sheep", "cow", "cow", "chicken"];
const CHICKEN_LEG = 2;
const PIG_LEG = 4;
const SHEEP_LEG = 4;
const COW_LEG = 4;
let numberOfCow = 0,
    numberOfShepp = 0,
    numberOfChicken = 0,
    numberOfPig = 0;

for (let index = 0; index < animalList.length; index++) {
    let nextAnimal = animalList[index].toLowerCase();
    if (nextAnimal.includes("cow")) {
        numberOfCow++
    } else if (nextAnimal.includes("chicken")) {
        numberOfChicken++
    } else if (nextAnimal.includes("pig")) {
        numberOfPig++
    } else if (nextAnimal.includes("sheep")) {
        numberOfShepp++
    }
}

let nemberOfHalalLeg = numberOfCow * COW_LEG + numberOfShepp * SHEEP_LEG + numberOfChicken * CHICKEN_LEG;
let TotalLeg = numberOfChicken * CHICKEN_LEG + numberOfCow * COW_LEG + numberOfPig * PIG_LEG + numberOfShepp * SHEEP_LEG;
let KellePacaLeg = numberOfShepp * SHEEP_LEG + numberOfCow * COW_LEG;
console.log(`Number of Halal Legs: ${nemberOfHalalLeg}`);
console.log(`Number of Total Legs: ${TotalLeg}`);
console.log(`Number of Kelle Paca Legs: ${KellePacaLeg}`);