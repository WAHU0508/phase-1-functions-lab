function distanceFromHqInBlocks(blocks) {
    if (typeof blocks === 'number') {
        if (blocks >= 42) {
            return blocks - 42;
        }
        else {
            return 42 - blocks;
        }
    }
    else {
        return "Invalid street number";
    }
}
function distanceFromHqInFeet(blocks) {
    let distanceInFt = distanceFromHqInBlocks(blocks);
    return distanceInFt * 264;
}

function distanceTravelledInFeet(street1, street2) {
    if (typeof street1 === 'number' && typeof street2 === 'number') {
        if (street1 > street2) {
            return (street1 - street2) * 264;
        }
        else {
            return (street2 - street1) * 264;
        }
    }
    else {
        return 'Invalid street number input';
    }
}
function calculatesFarePrice(start, destination) {
    let distanceInFt = distanceTravelledInFeet(start, destination);
    if (distanceInFt <= 400) {
        return 0;
    }
    else if (distanceInFt > 400 && distanceInFt <=2000) {
        return (distanceInFt - 400)* 0.02;
    }
    else if (distanceInFt > 2000 && distanceInFt <= 2500) {
        return 25;
    }
    else {
        return "cannot travel that far"
    }
}
//console.log(distanceFromHqInBlocks(50));
//console.log(distanceFromHqInFeet(50));
//console.log(distanceTravelledInFeet(34, 38));
console.log(calculatesFarePrice(34, 38));