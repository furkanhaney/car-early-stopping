const CAR_COUNT = 41;


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let currentCar;
let carsLeft = 11;

const onTake = () => {
    const takeTry = 11 - carsLeft;
    document.getElementById("cars-left").innerHTML = `Meet your new car:`;
    document.getElementById("replay-button").style.display = 'block';
    document.getElementById("next-button").style.display = 'none';
    document.getElementById("take-button").style.display = 'none';
}

const onNext = () => {
    carsLeft --;
    let newCar = getRandomInt(1, CAR_COUNT); 
    while (newCar === currentCar)
        newCar = getRandomInt(1, CAR_COUNT); 
    currentCar = newCar;
    document.getElementById("car-img").src = `images/car (${currentCar}).jpg`;
    document.getElementById("car-img").src = `images/car (${currentCar}).jpg`;
    document.getElementById("cars-left").innerHTML = `Cars Left: ${carsLeft}`;
    if (carsLeft === 0)
        onTake()
}

const onReplay = () => {
    carsLeft = 11;
    onNext();
    document.getElementById("replay-button").style.display = 'none';
    document.getElementById("next-button").style.display = 'block';
    document.getElementById("take-button").style.display = 'block';
}

onNext();


