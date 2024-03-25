export default function SliderMovement(images) {
  const imgArray = Array.from(images);
  const left = document.querySelector(".left-btn");
  const right = document.querySelector(".right-btn");
  const navButtons = document.querySelectorAll(".nav-dot");

  const scroll = (num) =>
    imgArray[num].scrollIntoView({ behavior: "smooth", inline: "center" });

  let currentImg = 0;
  let timeout = 0;

  setInterval(() => {
    timeout++;
  }, 1000);

  setInterval(function () {
    if (timeout > 5) {
      currentImg++;
      if (currentImg === imgArray.length - 1) currentImg = 0;
      scroll(currentImg);
    }
  }, 3000);

  left.addEventListener("click", () => {
    if (currentImg > 0) {
      currentImg--;
      scroll(currentImg);
      timeout = 0;
    }
  });
  right.addEventListener("click", () => {
    if (currentImg < imgArray.length - 1) {
      currentImg++;
      if (currentImg === imgArray.length - 1) currentImg = 0;
      scroll(currentImg);
      timeout = 0;
    }
  });
  navButtons.forEach((button) => {
    let id = button.dataset.id;
    button.addEventListener("click", () => {
      scroll(id);
      timeout = 0;
    });
  });
}
