// Code your solution in this file!
function distanceFromHqInBlocks(blockNamber){
    if(blockNamber > 42) {
        return blockNamber - 42;
    }
    else{
        return 42 - blockNamber;
    }
}

function distanceFromHqInFeet(blockNamber){
    return distanceFromHqInBlocks(blockNamber) *264;
}

function distanceTravelledInFeet(start, destination){
if (start < destination){ 
    return (destination - start) *264;
} else {
    return(start - destination) * 264;
}
}
function calculatesFarePrice(start, destination){
    let distancesTocharge = distanceTravelledInFeet(start, destination);
    if (distancesTocharge < 400){
        return 0;
    }
    else if (distancesTocharge > 400 && distancesTocharge <= 2000){
        return 0.02 * (distancesTocharge - 400);
    }
    else if (distancesTocharge > 2000 && distancesTocharge <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
}
}
