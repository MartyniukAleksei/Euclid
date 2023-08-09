window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".how-we-work-link").forEach(function (tabs_btn) {
    tabs_btn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;
      document
        .querySelectorAll(".how-we-work-consultation-none")
        .forEach(function (tabContent) {
          tabContent.classList.remove("how-we-work-consultation");
        });

      document
        .querySelectorAll(".how-we-work-link")
        .forEach(function (tabs_btn_2) {
          tabs_btn_2.classList.remove("is_active");
        });
      event.target.classList.add("is_active");
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("how-we-work-consultation");
      if (path == "one") {
        document.querySelector(".how-we-work-img").classList.remove("two");
        document.querySelector(".how-we-work-img").classList.remove("three");
        document.querySelector(".how-we-work-img").classList.remove("four");
        document.querySelector(".how-we-work-img").classList.add("one");
      } else if (path == "two") {
        document.querySelector(".how-we-work-img").classList.remove("one");
        document.querySelector(".how-we-work-img").classList.remove("three");
        document.querySelector(".how-we-work-img").classList.remove("four");
        document.querySelector(".how-we-work-img").classList.add("two");
      } else if (path == "three") {
        document.querySelector(".how-we-work-img").classList.remove("one");
        document.querySelector(".how-we-work-img").classList.remove("two");
        document.querySelector(".how-we-work-img").classList.remove("four");
        document.querySelector(".how-we-work-img").classList.add("three");
      } else {
        document.querySelector(".how-we-work-img").classList.remove("one");
        document.querySelector(".how-we-work-img").classList.remove("two");
        document.querySelector(".how-we-work-img").classList.remove("three");
        document.querySelector(".how-we-work-img").classList.add("four");
      }
    });
  });

  document
    .querySelectorAll(".questions-item")
    .forEach(function (questions_item) {
      var heading = questions_item.querySelector(".questions-item-heading");
      var icon = questions_item.querySelector(".question-item-icon");
      questions_item.addEventListener("click", function (event) {
        document
          .querySelectorAll(".questions-item-heading")
          .forEach(function (el) {
            if (heading == el) el.classList.toggle("is_active");
            else el.classList.remove("is_active");
          });
        document.querySelectorAll(".question-item-icon").forEach(function (el) {
          if (icon == el) el.classList.toggle("is_active_svg");
          else el.classList.remove("is_active_svg");
        });
      });
    });
});
