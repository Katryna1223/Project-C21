function hasCollided(object1, object2){
    if(object1.x - object2.x <= object2.width/2 + object1.width/2){ //&& car.x - wall.x <= car.width/2 + wall.width/2){
        return true;
    } else{
        return false;
    }
}