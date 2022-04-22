// the website needs to have some questions preloaded. So I need to figure out a way to pull questions from a source, upload them to the website or hardcode in the mean time

// If I want to set it up like Wordle, I'll need to have

function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}

function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){
            // if statement for bounds having the code below nested in it stops the character but keeps in place
                if(direction === 'west' && x >= 10){
                    x-=1
                }
                if(direction === 'north' && y <= 840){
                    y+=1
                }
                if(direction === 'east' && x <= 1860){
                    x+=1
                }
                if(direction === 'south' && y >= 10){
                    y-=1
                }
                element.style.left = x + 'px'
                element.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}

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

function newPlayableCharacter(x, y) {
    const element = newImage('assets/green-character/static.gif')
    element.style.zIndex = 8;

    function handleDirectionChange(direction) {
            if (direction === null) {
                element.src = `assets/green-character/static.gif`
            }
            if (direction === 'west') {
                element.src = `assets/green-character/west.gif`
            }
            if (direction === 'north') {
                element.src = `assets/green-character/north.gif`
            }
            if (direction === 'east') {
                element.src = `assets/green-character/east.gif`
            }
            if (direction === 'south') {
                element.src = `assets/green-character/south.gif`
            }
    }

        move(element).withArrowKeys(x, y, handleDirectionChange)
    
    

    return {
        element: element
    }
}

const mascot = newPlayableCharacter(100,110)