// show header
const scrollbar = document.getElementById("root");
const header = document.getElementById("header");
let scroll = 0;
function scrolled(e) {
  scrollbar.context = window.pageYOffset;
  const currentScroll = window.pageYOffset;
  if (currentScroll < scroll) {
    header.classList.add("header-show");
  } else {
    header.classList.remove("header-show");
  }
  scroll = currentScroll;
}
window.addEventListener("scroll", scrolled);
// window.scrollTo({ top: 0, behavior: "smooth" });
// $(document).ready(function () {
//   $(".price_item").on("click", () => {
//     $(this).siblings().removeClass("price_item-active");
//     $(this).siblings().addClass("price_item-active");
//   });
// });
