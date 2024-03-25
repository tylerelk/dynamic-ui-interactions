export default function RadialSpread() {
  const center = document.querySelector(".radial-center");
  const items = document.querySelectorAll(".radial-arm");
  const positions = [
    [8, 0],
    [5, 5],
    [0, 8],
    [-5, 5],
    [-8, 0],
    [-5, -5],
    [0, -8],
    [5, -5],
  ];
  let open = false;

  function calculateAngles(i) {
    setTimeout(function () {
      items[
        i
      ].style.transform = `translate(${positions[i][0]}rem, ${positions[i][1]}rem)`;
      if (i < items.length) {
        i++;
        calculateAngles(i);
      }
    }, 50);
  }

  center.addEventListener("click", () => {
    if (open === false) {
      calculateAngles(0);
      open = true;
    } else if (open === true) {
      items.forEach((item) => {
        item.style.transform = "translate(0, 0)";
        open = false;
      });
    }
  });
}
