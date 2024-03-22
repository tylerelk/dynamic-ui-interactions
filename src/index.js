import "./style.css";

const root = document.getElementById("root-div");

function renderPage() {
  const menu = document.querySelector("ul");
  const items = document.querySelectorAll("li");

  function openMenu() {
    items.forEach((item) => {
      item.style.top = `${5 * Array.from(items).indexOf(item)}rem`;
    });
  };
  function closeMenu() {
    items.forEach(item => {
        item.style.top = '0';
    })
  }

  menu.addEventListener("mouseenter", () => setTimeout(openMenu), 10);
  menu.addEventListener('mouseleave', () => setTimeout(closeMenu, 10));
}

renderPage();
