// Use the bounds of the divs to return booleans that determine if character is in correct spot
function locationCharacter(x,y){
    if(x > 9 && x < 952 && y < 841 && y > 460){
        return true
    }
    if(x > 952 && x < 1861 && y < 841 && y > 460){
        return false
    }
    if(x > 952 && x < 1861 && y < 460 && y > 9){
        return false
    }
    if(x > 9 && x < 952 && y < 460 && y > 9){
        return false
    }
}