export default function ImageGenerator(numImages, imageSize) {
    const imageList = [];
    class image {
        constructor(src) {
            this.src = src;
        }
        render(id) {
            return `<img src="${this.src}" class="slider-img" data-id="${id}" />`
        }
    };

    for (let i = 1; i <= numImages; i++) {
        let newImage = new image(`https://picsum.photos/${imageSize[0]}/${imageSize[1]}?random=` + i);
        imageList.push(newImage.render(imageList.length));
    }

    return imageList
}