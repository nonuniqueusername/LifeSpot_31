const buttons = document.getElementsByClassName("slider__navButton")

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', buttonAction, true);
};

function buttonAction(event) {
    const directions = {
        "button__right": NextImage,
        "button__left": PrevImage
    }
    
    Object.keys(directions).contains
    event.target.classList.forEach(c => {
        if (directions.hasOwnProperty(c)) {
            directions[c]()
        }
    })
}

function NextImage() {
    const images = document.getElementsByClassName("slider__img")
    for (var i = 0; i < images.length; i++) {
        if (images[i].classList.contains("slider__img-active")) {
            images[i].classList.toggle("slider__img-active")
            if (i + 1 >= images.length) {
                images[0].classList.toggle("slider__img-active")
            }
            else {
                images[i + 1].classList.toggle("slider__img-active")
            }
            break
        }
    }
}

function PrevImage() {
    const images = document.getElementsByClassName("slider__img")
    for (var i = 0; i < images.length; i++) {
        if (images[i].classList.contains("slider__img-active")) {
            images[i].classList.toggle("slider__img-active")
            if (i == 0) {
                images[images.length-1].classList.toggle("slider__img-active")
            }
            else {
                images[i - 1].classList.toggle("slider__img-active")
            }
            break
        }
    }
}