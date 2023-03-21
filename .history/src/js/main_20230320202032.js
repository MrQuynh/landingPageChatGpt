// show header
const scrollbar = document.getElementById("root");
const header = document.getElementById("header");
const demoBuyBtn = document.getElementById("demo-btn-buy");
let scroll = 0;
// btn buy
setInterval(() => {
  demoBuyBtn.classList.toggle("demo-btn");
}, 1000);
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

$(document).ready(function () {
  // hover price
  $(".price_item").on("hover", function () {
    $(this).siblings().removeClass("price_item-active");
    $(this).addClass("price_item-active");
  });
  // scroll
  $(".nav-item").on("click", (e) => {
    const position = $(e.target.hash).offset().top;
    $("HTML, BODY").animate({ scrollTop: position }, 1000);
  });
  $("#header-logo").on("click", () => {
    window.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    // window.scrollIntoView();
  });
});
