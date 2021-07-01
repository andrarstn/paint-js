function translation(oldNode, T) {
    let recentX = oldNode.x + T.x
    let recentY = oldNode.y + T.y

    return {x: recentX, y: recentY}
}

function ataskiri() {
    moveObject(-10,-10)
}

function atastengah() {
    moveObject(0,-10)
}

function ataskanan() {
    moveObject(10,-10)
}

function tengahkiri() {
    moveObject(-10,0)
}

function tengahkanan() {
    moveObject(10,0)
}

function bawahkiri() {
    moveObject(-10,10)
}

function bawahtengah() {
    moveObject(0,10)
}

function bawahkanan() {
    moveObject(10,10)
}

function moveObject(x, y) {
    refreshCanvas()
    if (recentShape == 'rectangle') {
        context.beginPath();
        if (tempRotate[0] == 'rectangle') {
            context.translate(recentCoordinateX+x + (recentSize[0]/2), recentCoordinateY+y + (recentSize[1]/2));
            context.rotate(Math.PI / 180 * tempRotate[1]);
            context.translate((recentCoordinateX+x + (recentSize[0]/2))*-1, (recentCoordinateY+y + (recentSize[1]/2))*-1);
        }
        context.rect(recentCoordinateX+x,recentCoordinateY+y,recentSize[0], recentSize[1])
        context.closePath();
        drawCanvas()
    }else if (recentShape == 'segitiga') {
        context.beginPath();
        context.moveTo(recentCoordinateX+x, recentCoordinateY+y);
        context.lineTo(recentCoordinateX+x,(recentCoordinateY+y)+recentSize[1]);
        context.lineTo((recentCoordinateX+x)-recentSize[0],recentCoordinateY+y+recentSize[1]);
        context.closePath();
        drawCanvas() 
    }else if (recentShape == 'lingkaran') {
        console.log(recentSize[0]);
        context.beginPath();
        context.arc(recentCoordinateX+x, recentCoordinateY+y, recentSize[0], Math.PI * 0, Math.PI * 2);
        context.closePath();
        drawCanvas()
    }
    recentCoordinateX = recentCoordinateX+x
    recentCoordinateY = recentCoordinateY+y
}