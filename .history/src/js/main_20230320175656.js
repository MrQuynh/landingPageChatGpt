// show header
const scrollbar = document.getElementById("root");
const header = document.getElementById("header");
const demoBuyBtn = document.getElementById("demo-btn-buy");
let scroll = 0;
// btn buy
setInterval(() => {
  demoBuyBtn.addEventListener("hover");
}, 3000);
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
window.scrollTo({ top: 0, behavior: "smooth" });
$(document).ready(function () {
  $(".price_item").on("hover", function () {
    $(this).siblings().removeClass("price_item-active");
    $(this).addClass("price_item-active");
  });
});
