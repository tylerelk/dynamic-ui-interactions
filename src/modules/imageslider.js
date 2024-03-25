import ImageGenerator from "./imagegenerator";

export default function ImageSlider() {
    const sliderDiv = document.createElement('div');
    const mainDiv = document.createElement('div');
    const images = ImageGenerator(5, [600, 350]); //Change args for diff images; ImageGenerator(###number of images###, ###Array [width, height]###)
    const imageDiv = document.createElement('div');
    const navDiv = document.createElement('div');
    const leftArrow = document.createElement('button');
    const rightArrow = document.createElement('button');

    sliderDiv.classList.add('slider-container');
    mainDiv.classList.add('main-image-div');
    imageDiv.classList.add('slider');
    navDiv.classList.add('slider-nav');
    leftArrow.classList.add('slider-btn');
    leftArrow.classList.add('left-btn');
    rightArrow.classList.add('slider-btn');
    rightArrow.classList.add('right-btn');

    leftArrow.innerHTML = '<ion-icon name="arrow-back-outline"></ion-icon>'
    rightArrow.innerHTML = '<ion-icon name="arrow-forward-outline"></ion-icon>'

    images.forEach(image => {
        imageDiv.innerHTML += image;
        let navBtn = document.createElement('button');
        navBtn.classList.add('nav-dot');
        navBtn.dataset.id = images.indexOf(image);
        navDiv.appendChild(navBtn);
    })

    sliderDiv.appendChild(mainDiv);
    sliderDiv.appendChild(leftArrow);
    sliderDiv.appendChild(rightArrow);
    mainDiv.appendChild(imageDiv);
    mainDiv.appendChild(navDiv);

    return sliderDiv;
}