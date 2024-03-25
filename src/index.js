import "./style.css";
import Dropdown from "./modules/dropdown";
import RadialSpread from "./modules/radialspread";
import ImageSlider from "./modules/imageslider";
import SliderMovement from "./modules/slidermovement";

const root = document.getElementById("root-div");

function renderPage() {
  Dropdown();
  RadialSpread();
  root.appendChild(ImageSlider());
  const imgElements = document.querySelectorAll('.slider-img');
  SliderMovement(imgElements);
}

renderPage();
