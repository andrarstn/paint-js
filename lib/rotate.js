const btnRotate = document.querySelector("#btn-rotate")

btnRotate.addEventListener('click', function(e) {
    if (recentShape == 'rectangle') {
        rectangle(recentSize[0], recentSize[1], rotateShape.value)
    }else if (recentShape == 'segitiga') {
        segitiga(recentSize[0], recentSize[1], rotateShape.value)
    }
})