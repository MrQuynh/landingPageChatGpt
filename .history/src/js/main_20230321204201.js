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
    question: "ChatGPT là gì ?",
    answer:
      "ChatGPT là một mô hình ngôn ngữ trí tuệ nhân tạo do OpenAI đào tạo, dựa trên kiến trúc GPT-3.5. Nó có thể hiểu và phản hồi đầu vào ngôn ngữ tự nhiên.",
  },
  {
    question: "Sử dụng ChatGPT như thế nào ?",
    answer:
      "Chỉ cần nhập câu hỏi hoặc từ khóa của bạn vào hộp nhập và ChatGPT sẽ tạo phản hồi dựa trên hiểu biết của bạn về thông tin đầu vào của bạn.",
  },
  {
    question: "ChatGPT có thể trả lời được những chủ đề nào ?",
    answer:
      "ChatGPT có nhiều kiến thức về các chủ đề khác nhau, bao gồm khoa học, công nghệ, lịch sử, văn học, v.v. Tuy nhiên, xin lưu ý rằng phản hồi của ChatGPT dựa trên dữ liệu đào tạo và có thể không phải lúc nào cũng chính xác hoàn toàn.",
  },
  {
    question: "ChatGPT có thể thay thế các chuyên gia không ?",
    answer:
      "ChatGPT có thể cung cấp thông tin chung và gợi ý, nhưng nó không thể thay thế cho lời khuyên chuyên nghiệp. Nếu bạn có một vấn đề hoặc câu hỏi cụ thể cần lời khuyên của chuyên gia, vui lòng tham khảo ý kiến của một chuyên gia có trình độ.",
  },
  {
    question: "ChatGPT có miễn phí không ?",
    answer:
      "Có nhé, khi sử dụng ChatGPT bản basic bạn sẽ không phải trả bất kỳ phí ngoài tiền mạng :D. Tuy nhiên, các bản nâng cao hơn sẽ đòi hỏi chút phí và bạn sẽ có được trải nghiệm tốt hơn.",
  },
  {
    question:
      "Quyền riêng tư của tôi có được bảo vệ khi sử dụng ChatGPT không ?",
    answer:
      "OpenAI rất coi trọng quyền riêng tư của người dùng và không thu thập hay lưu trữ bất kỳ thông tin cá nhân nào từ người dùng ChatGPT. Tuy nhiên, xin lưu ý rằng mọi thông tin bạn chia sẻ với ChatGPT có thể được lưu trữ trong bộ nhớ của ChatGPT trong một khoảng thời gian ngắn để tạo điều kiện thuận lợi cho cuộc trò chuyện.",
  },
];
$(document).ready(function () {
  const htmls = questions.map((ques, index) => {
    return `
    <div class="question_item" data-index=${index}>
      <div class="question_item-question">
        <p>
          <i class="fa-regular fa-circle-question"></i>
          <span>${ques.question}</span>
        </p> 
        <div class="icon-question"><i class="icon-add fa-solid fa-plus"></i></div>
      </div>
      <div class="question_item-answer index-answer-${index}">
        ${ques.answer}</div>
    </div>
    `;
  });
  $(".question_lists").html(htmls);
  $(".question_item").on("click", function () {
    const index = $(this).data("index");
    $(`.index-answer-${index}`).toggleClass("answer-active");
  });
});
