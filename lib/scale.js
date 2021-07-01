const btnScale = document.querySelector("#btn-scale")

btnScale.addEventListener('click', function() {
    let x = scaleXShape.value
    let y = scaleYShape.value
    if (scaleXShape.value==0) {
        x = 1
    }

    if (scaleYShape.value==0) {
        y=1
    }
    if (recentShape == 'rectangle') {
        if (tempRotate[0] == 'rectangle') {
            rectangle(recentSize[0]*x, recentSize[1]*y,tempRotate[1])
            return 0
        }
        rectangle(recentSize[0]*x, recentSize[1]*y)
    }else if (recentShape == 'segitiga') {
        segitiga(recentSize[0]*x, recentSize[1]*y)
    }else if (recentShape == 'lingkaran') {
        lingkaran(recentSize[0]*x)
    }
})