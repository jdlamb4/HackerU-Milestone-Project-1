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

function newPlayableCharacter(x, y) {
    const element = newImage('Assets/green-character/static.gif')
    element.style.zIndex = 8;

    function handleDirectionChange(direction) {
            if (direction === null) {
                element.src = 'Assets/green-character/static.gif'
            }
            if (direction === 'west') {
                element.src = `Assets/green-character/west.gif`
            }
            if (direction === 'north') {
                element.src = `Assets/green-character/north.gif`
            }
            if (direction === 'east') {
                element.src = `Assets/green-character/east.gif`
            }
            if (direction === 'south') {
                element.src = `Assets/green-character/south.gif`
            }
    }

        move(element).withArrowKeys(x, y, handleDirectionChange)
    
    

    return {
        element: element
    }
}

const mascot = newPlayableCharacter(1, 1)