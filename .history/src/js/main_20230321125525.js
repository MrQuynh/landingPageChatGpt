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
  // show toast message
  $("#btn-submit-form").on("click", () => {
    $(".toast").addClass("toast-show");
    setTimeout(() => {
      $(".toast").siblings().removeClass("toast-show");
    }, 2000);
  });
});

$(document).ready(function () {
  $(".question_item").on("click", function (e) {});
});
// /////question
const listQuestions = document.querySelector(".question_lists");
const questions = [
  {
    question: "ChatGPT có thể trả lời được những chủ đề nào ?",
    answer:
      "ChatGPT có nhiều kiến thức về các chủ đề khác nhau, bao gồm khoa học, công nghệ, lịch sử, văn học, v.v. Tuy nhiên, xin lưu ý rằng phản hồi của ChatGPT dựa trên dữ liệu đào tạo và có thể không phải lúc nào cũng chính xác hoàn toàn.",
  },
  {
    question: "ChatGPT có thể trả lời được những chủ đề nào ?",
    answer:
      "ChatGPT có nhiều kiến thức về các chủ đề khác nhau, bao gồm khoa học, công nghệ, lịch sử, văn học, v.v. Tuy nhiên, xin lưu ý rằng phản hồi của ChatGPT dựa trên dữ liệu đào tạo và có thể không phải lúc nào cũng chính xác hoàn toàn.",
  },
  {
    question: "ChatGPT có thể trả lời được những chủ đề nào ?",
    answer:
      "ChatGPT có nhiều kiến thức về các chủ đề khác nhau, bao gồm khoa học, công nghệ, lịch sử, văn học, v.v. Tuy nhiên, xin lưu ý rằng phản hồi của ChatGPT dựa trên dữ liệu đào tạo và có thể không phải lúc nào cũng chính xác hoàn toàn.",
  },
  {
    question: "ChatGPT có thể trả lời được những chủ đề nào ?",
    answer:
      "ChatGPT có nhiều kiến thức về các chủ đề khác nhau, bao gồm khoa học, công nghệ, lịch sử, văn học, v.v. Tuy nhiên, xin lưu ý rằng phản hồi của ChatGPT dựa trên dữ liệu đào tạo và có thể không phải lúc nào cũng chính xác hoàn toàn.",
  },
];

const questionRender = () => {
  const htmls = questions.map((ques, index) => {
    return `
    <div class="question_item">
      <div class="question_item-question">
        <p>
          <i class="fa-regular fa-circle-question"></i>
          <span>${ques.question}</span>
        </p> 
        <div class="icon-question"><i  class="icon-add fa-solid fa-plus"></i></div>
      </div>
      <div class="question_item-answer answer-active">
        ${ques.answer}</div>
    </div>
    `;
  });
  listQuestions.innerHTML = htmls.join("");
};
listQuestions.onClick = function (e) {
  console.log("hello");
};
questionRender();
