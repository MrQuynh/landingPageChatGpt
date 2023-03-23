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

// scroll into view
$(document).ready(function () {
  $(".nav-item").on("click", (e) => {
    const position = $(e.target.hash).offset().top;
    $("HTML, BODY").animate({ scrollTop: position }, "smooth");
  });
  $("#header-logo").on("click", () => {
    $("html,body").animate({ scrollTop: 0 }, "slow");
  });
});

// hover price
$(document).ready(function () {
  $(".price_item").on("hover", function (e) {
    $(this).siblings().removeClass("price_item-active");
    $(this).addClass("price_item-active");

    $(this).siblings().children().last().removeClass("price_item-btn-active");
    $(this).children().last().toggleClass("price_item-btn-active");
  });
});
// active modal
$(document).ready(function () {
  $(".nav-btn").on("click", () => {
    $("#modal").addClass("modal-active");
  });
  $(".price_item-btn").on("click", () => {
    $("#modal").addClass("modal-active");
  });
  // remove modal
  $("#close-btn").on("click", () => {
    $("#modal").removeClass("modal-active");
  });
});
// show toast message
$(document).ready(function () {
  $("#btn-submit-form").on("click", () => {
    $(".toast").addClass("toast-show");
    $("#modal").removeClass("modal-active");
    setTimeout(() => {
      $(".toast").removeClass("toast-show");
    }, 5000);
  });
});

// active advertise
$(document).ready(function () {
  setTimeout(() => {
    $(".advertise").addClass("advertise-active");
  }, 5000);
  $(".ad_bottom-btn").on("click", () => {
    $(".advertise").removeClass("advertise-active");
    $(".toast").addClass("toast-show");
    setTimeout(() => {
      $(".toast").removeClass("toast-show");
    }, 5000);
  });
});
// remove advertise
$(document).ready(function () {
  $(".advertise").on("click", () => {
    $(".advertise").removeClass("advertise-active");
  });
});
$(document).ready(function () {
  $(".ad_close").on("click", () => {
    $(".advertise").removeClass("advertise-active");
  });
});
// stopPropagation modal ad
$(document).ready(function () {
  $(".ad_wrapper").on("click", (e) => {
    e.stopPropagation();
  });
});
// /////question

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
$(document).ready(function () {
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
  $(".question_lists").html(htmls);
  $(".question_lists").on("click", function (e) {
    console.log(e);
  });
});
