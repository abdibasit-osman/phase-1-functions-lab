// fanction to calculate the ddistance in block from scuber's headquater.
function distanceFromHqInBlocks(x){
    return Math.abs(x - 42);
}
console.log(distanceFromHqInBlocks(30))

// function to calculate the distance in feet from the scuber's headquater.
function distanceFromHqInFeet(x){
    return (distanceFromHqInBlocks(x)*264)
}console.log(distanceFromHqInFeet(50))

//Function to calculate the number of feet travelled between two blocks.
function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start)*264;
}

//
function calculatesFarePrice(start, destination){
    const distance = Math.abs(destination - start)*264;
    if(distance<=400){
        return 0;
    }
    else if(distance<=2000){
        return (distance - 400)*0.02;
    }
    else if (distance<=2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}

console.log(calculatesFarePrice(34, 24));