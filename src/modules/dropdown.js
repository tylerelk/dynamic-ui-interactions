export default function Dropdown() {
  const menu = document.querySelector("ul");
  const items = document.querySelectorAll("li");

  function openMenu() {
    items.forEach((item) => {
      item.style.top = `${5 * (Array.from(items).indexOf(item) + 1)}rem`;
    });
  }
  function closeMenu() {
    items.forEach((item) => {
      item.style.top = "0";
    });
  }

  menu.addEventListener("mouseenter", () => setTimeout(openMenu, 10));
  menu.addEventListener("mouseleave", () => setTimeout(closeMenu, 10));
}
