let canvasView = document.querySelector("#canvas-view");

let context = canvasView.getContext("2d");

const rotateShape = document.querySelector("#rotate-shape")

const scaleXShape = document.querySelector("#scale-x-shape")
const scaleYShape = document.querySelector("#scale-y-shape")

let recentShape;
let recentCoordinateX;
let recentCoordinateY;
let recentSize = [];

let tempRotate = [];

let isDrawing = false;
var boundings = canvasView.getBoundingClientRect();
let mouseX = 0;
let mouseY = 0;

let myImageData = context.getImageData(0, 0, canvasView.width, canvasView.height);

function ddaAlgorithm(x1, y1, x2, y2, red, green, blue) {
    let dx = x2-x1;
    let dy = y2-y1;

    if (Math.abs(dx) > Math.abs(dy)) {
        // Jalan di sumbu X
        if (x2 > x1) {
            // Jalan ke kanan
            let y = y1               
            for (let x = x1; x < x2; x++) {
                y = y + dy/ Math.abs(dx) 
                titik(myImageData, x, y, red, green, blue)
            }
        }else{
            // Jalan ke kiri
            let y = y1              
            for (let x = x1; x > x2; x--) {
                y = y + dy/ Math.abs(dx) 
                titik(myImageData, x, y, red, green, blue)
            }
        }
    }else{
        // Jalan di sumbu Y
        if (y2 > y1) {
            // Jalan ke atas
            let x = x1       
            for (let y = y1; y < y2; y++) {
                x = x + dx/Math.abs(dy) 
                titik(myImageData, x, y, red, green, blue)
            }
        }else{
            // Jalan ke bawah   
            let x = x1         
            for (let y = y1; y > y2; y--) {
                x = x + dx/Math.abs(dy) 
                titik(myImageData, x, y, red, green, blue)
            }
        }
    }
}

// Warna Bangun Datar
const getFillColorShape = document.querySelector("#fill-color-shape")
const getStrokeColorShape = document.querySelector("#stroke-color-shape")

let fillColorShape = "#FFFFFF"
let strokeColorShape = "#000000"

getFillColorShape.addEventListener('change',function(e) {
    fillColorShape = e.target.value
    drawCanvas()
})

getStrokeColorShape.addEventListener('change',function(e) {
    strokeColorShape = e.target.value
    drawCanvas()
})

function rectangle(panjang, lebar, rotateShape = 0, scaleSize = []) {
    refreshCanvas()
    recentShape = 'rectangle'
    if (recentSize.length > 0) {
        recentSize = []
    }
    recentSize.push(panjang,lebar)

    let startPointX = (canvasView.width - panjang)/2
    let startPointY = (canvasView.height - lebar)/2

    recentCoordinateX = startPointX
    recentCoordinateY = startPointY

    context.beginPath()

    console.log(rotateShape);
    if (rotateShape != 0) {
        tempRotate.push('rectangle', rotateShape)
        context.translate(startPointX + (panjang/2), startPointY + (lebar/2));
        context.rotate(Math.PI / 180 * rotateShape);
        context.translate((startPointX + (panjang/2))*-1, (startPointY + (lebar/2))*-1);
    }

    context.strokeStyle = strokeColorShape
    context.fillStyle = fillColorShape

    context.rect(startPointX,startPointY,panjang,lebar)
    context.closePath();
    drawCanvas()
}

function segitiga(alas, tinggi, rotateShape = 0, flipX = 'odd', flipY = 'odd') {
    refreshCanvas()
    recentShape = 'segitiga'
    if (recentSize.length > 0) {
        recentSize = []
    }
    recentSize.push(alas,tinggi)
    // console.log(recentSize);

    let startPointX = canvasView.width/2 + alas/2
    let startPointY = canvasView.height/2 + tinggi/2

    recentCoordinateX = startPointX
    recentCoordinateY = startPointY

    context.beginPath();
    if (rotateShape != 0) {
        tempRotate.push('segitiga', rotateShape)
        context.translate(startPointX + (panjang/2), startPointY + (lebar/2));
        context.rotate(Math.PI / 180 * rotateShape);
        context.translate((startPointX + (panjang/2))*-1, (startPointY + (lebar/2))*-1);
    }

    console.log(0.3333*((canvasView.width/2 + alas/2, canvasView.height/2 - tinggi/2)+(canvasView.width/2 + alas/2 ,canvasView.height/2 - tinggi/2 + tinggi)+(canvasView.width/2 + alas/2 -alas,canvasView.height/2 -tinggi/2 +tinggi)));
    console.log(canvasView.height/2);
    console.log(startPointX);
    console.log(startPointY);

    // context.moveTo(canvasView.width/2, canvasView.height/2 - tinggi/2 );
    // context.lineTo(canvasView.width/2 + alas/2 ,canvasView.height/2 + tinggi/2);
    // context.lineTo(canvasView.width/2 - alas/2 ,canvasView.height/2 + tinggi/2);

    context.moveTo(canvasView.width/2 + alas/2, canvasView.height/2 - tinggi/2 );
    context.lineTo(canvasView.width/2 + alas/2 ,canvasView.height/2 - tinggi/2 + tinggi);
    context.lineTo(canvasView.width/2 + alas/2 -alas,canvasView.height/2 -tinggi/2 +tinggi);

    // if (flipX == 'odd' && flipY == 'odd') {
    //     context.moveTo(startPointX, startPointY);
    //     context.lineTo(startPointX,startPointY+tinggi);
    //     context.lineTo(startPointX-alas,startPointY+tinggi);
    // }else if (flipX =='even') {
    //     context.moveTo(startPointX, startPointY);
    //     context.lineTo(startPointX,startPointY+tinggi);
    //     context.lineTo(startPointX+alas,startPointY+tinggi);
    // }else if (flipY == 'even') {
    //     context.moveTo(startPointX, startPointY+tinggi);
    //     context.lineTo(startPointX,startPointY);
    //     context.lineTo(startPointX+alas,startPointY);
    // }
    context.closePath();
    drawCanvas()
}

function lingkaran(radius) {
    refreshCanvas()
    recentShape = 'lingkaran'
    if (recentSize.length > 0) {
        recentSize = []
    }
    recentSize.push(radius)

    recentCoordinateX = canvasView.width/2
    recentCoordinateY = canvasView.height/2

    context.beginPath();
    context.arc(recentCoordinateX, recentCoordinateY, radius, Math.PI * 0, Math.PI * 2);
    context.closePath();
    drawCanvas()
}

function drawCanvas() {
    context.fillStyle = fillColorShape
    context.strokeStyle = strokeColorShape

    context.fill()
    context.stroke()
}

function refreshCanvas() {
    rotateShape.value = 0
    context.restore();
    context.setTransform(1,0,0,1,0,0);
    context.clearRect(0, 0, canvasView.width, canvasView.height)
}