$(document).ready(function () {
  const catalogItemContent = document.querySelectorAll(
    ".catalog-item__content"
  );
  const catalogItemList = document.querySelectorAll(".catalog-item__list");
  const catalogItemLink = document.querySelectorAll(".catalog-item__link");
  const catalogItemBack = document.querySelectorAll(".catalog-item__back");
  const catalogTabs = document.querySelectorAll(".catalog__tab");
  const catalogContent = document.querySelectorAll(".catalog__content");

  function showConsultationModal() {
    $(".toggle-consultation").on("click", function () {
      $(".overlay, #consultation").fadeIn("slow");
    });
    $(".modal__close").on("click", function () {
      $(".overlay, #consultation, #order").fadeOut("fast");
    });
  }

  function showDetails() {
    catalogItemLink.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        catalogItemContent[index].classList.toggle(
          "catalog-item__content_active"
        );
        catalogItemList[index].classList.toggle("catalog-item__list_active");
      });
    });
  }

  function closeDetails() {
    catalogItemBack.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        catalogItemList[index].classList.toggle("catalog-item__list_active");
        catalogItemContent[index].classList.toggle(
          "catalog-item__content_active"
        );
      });
    });
  }

  function handleContent() {
    catalogTabs.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        catalogTabs.forEach((item) =>
          item.classList.remove("catalog__tab_active")
        );
        catalogTabs[index].classList.toggle("catalog__tab_active");
        catalogContent.forEach((item) =>
          item.classList.remove("catalog__content_active")
        );
        catalogContent[index].classList.add("catalog__content_active");
      });
    });
  }

  function showOrderModal() {
    $(".btn__catalog").on("click", function (e) {
      e.preventDefault();
      $(".overlay, #order").fadeIn("slow");
    });
  }

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: "required",
      },
      messages: {
        name: "Введите ваше имя",
        phone: "Введите ваш телефон",
        email: "Введите ваш электронный адрес",
      },
    });
  }

  function mask() {
    $("input[name=phone]").mask("+7 (999) 999-99-99");
  }

  function pageup() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $('.pageup').on('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
  }



  $(".carousel-items").slick({
    prevArrow:
      "<button type='button' class='slick-prev'> <img src='../icons/left.svg'></button>",
    nextArrow:
      "<button type='button' class='slick-next'> <img src='../icons/right.svg'></button>",
    speed: 1000,
  });


  new WOW().init();







  showDetails();
  closeDetails();
  handleContent();
  showConsultationModal();
  showOrderModal();
  validateForms("#consultation-form");
  validateForms("#modal__consultation-form");
  validateForms("#order__form");
  mask();
  pageup();
});
