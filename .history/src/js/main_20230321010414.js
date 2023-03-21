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
// model buy
const modelBuy = () => {};

$(document).ready(function () {
  // scroll into view
  $(".nav-item").on("click", (e) => {
    const position = $(e.target.hash).offset().top;
    $("HTML, BODY").animate({ scrollTop: position }, "smooth");
  });
  $("#header-logo").on("click", () => {
    $("html,body").animate({ scrollTop: 0 }, "slow");
  });
  // hover price
  $(".price_item").on("hover", function () {
    $(this).siblings().removeClass("price_item-active");
    $(this).addClass("price_item-active");
  });
  // active modal
  $(".nav-btn").on("click", () => {
    $("#modal").addClass("modal-active");
  });
  // remove modal
  $("#close-btn").on("click", () => {
    $("#modal").removeClass("modal-active");
  });
  // test demo
  // question active
});

$(document).ready(function () {
  $(".question_item").on("click", (e) => {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    console.log("hello");
  });
});
