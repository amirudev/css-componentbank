const imageArray = [
    'dummyimage1.png',
    'dummyimage2.png',
    'dummyimage3.png'
]

var currentImage = 0

updateImage = () => {
    var linkCurrentImage = `images/${imageArray[currentImage]}`;
    document.getElementById('image-container').src = linkCurrentImage;
    console.log(linkCurrentImage);
    console.log(currentImage);
}

updateCurrentNumber = (oper) => {
    if(oper == "sum") {
        if(currentImage < imageArray.length - 1) {
            currentImage++;
        } else {
            currentImage = 0;
        }
    } else {
        if(currentImage > 0) {
            currentImage--;
        } else {
            currentImage = imageArray.length - 1;
        }
    }
}

document.getElementById('previmage').addEventListener('click', () => {
    updateCurrentNumber("min")
    updateImage();
});

document.getElementById('nextimage').addEventListener('click', () => {
    updateCurrentNumber("sum")
    updateImage();
});

updateImage();