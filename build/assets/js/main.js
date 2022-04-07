"use strict";

// AJAX-запрос для отправки сообщений на почту, которая указана в админке сайта
$(function () {
  $("#applyForm").on("submit", function (e) {
    e.preventDefault();
    var name = $("#userName").val();
    var phone = $("#userPhone").val();
    var company = $("#userCompany").val();
    var area = $("#userArea").val();
    $.ajax({
      type: "post",
      url: "/wp-admin/admin-ajax.php",
      data: {
        action: "ajax_form",
        name: name,
        phone: phone,
        company: company,
        area: area
      },
      success: function success(response) {
        $(".dark-layer").html(response);
        closeAppliedForm();
      }
    });
  });
}); // Проверяем, что все поля важные заполнены

$(".form-button").on("click", function () {
  inputAuthorization();
}); // Так как окно после отправки я генерирую сам, мне нужно его закрывать, поэтому функция вызывается, когда только появляется окно

function closeAppliedForm() {
  var closeAppliedForm = document.getElementById("closeAppliedForm");
  var closeAppliedFormButton = document.getElementById("closeAppliedFormButton");
  closeAppliedForm.addEventListener("click", function () {
    darkLayer.classList.toggle("js--hidden");
  });
  closeAppliedFormButton.addEventListener("click", function () {
    darkLayer.classList.toggle("js--hidden");
  });
} // Сама функция проверки полей и добавления дополнительных свойств полю


function inputAuthorization() {
  var inputsArray = document.querySelectorAll(".form-input");
  inputsArray.forEach(function (input) {
    if (!input.value) {
      var span = addWarningEmptySpan();
      input.classList.add("form-input--warning");
      var inputID = input.id;
      var inputLabel = document.querySelector("[for=".concat(inputID, "]"));
      inputLabel.appendChild(span);
    }
  });
} // Не хотел перегружать функция проверки и прочее, поэтому создание отдельного спана вынес отдельно


function addWarningEmptySpan() {
  var warningEmptySpan = document.createElement("span");
  warningEmptySpan.classList.add("empty--input");
  return warningEmptySpan;
} // Как только пользователь решился ввести данные, если было предупреждение я удаляю предупреждения всякие


function deleteWarningSpans() {
  var inputsArray = document.querySelectorAll(".form-input");
  inputsArray.forEach(function (input) {
    input.addEventListener("input", function () {
      var inputID = input.id;
      var inputLabel = document.querySelector("[for=".concat(inputID, "]"));

      if (inputLabel.querySelector(".empty--input")) {
        var certainSpan = inputLabel.querySelector(".empty--input");
        certainSpan.remove();
        input.classList.remove("form-input--warning");
      }
    });
  });
}

deleteWarningSpans();
var windowLocation = window.location.href;
console.log(windowLocation);

if (!windowLocation.includes("privacy")) {
  var stickTheMenu = function stickTheMenu() {
    if (window.pageYOffset >= sectionListOffset) {
      sectionList.classList.add("sticky");
      sectionMenu.classList.add("menuPosition");
    } else {
      sectionList.classList.remove("sticky");
      sectionMenu.classList.remove("menuPosition");
    }
  };

  var unStickTheMenu = function unStickTheMenu() {
    if (window.pageYOffset > sectionAbilitiesOffset - 350) {
      sectionList.classList.remove("sticky");
      sectionMenu.classList.remove("menuPosition");
    }
  };

  var activateTheListPoints = function activateTheListPoints() {
    if (window.pageYOffset >= firstMenuPointOffset - 100) {
      firstListPoint.classList.add("list-item--active");
    } else if (window.pageYOffset <= fourthMenuPointOffset) {
      firstListPoint.classList.remove("list-item--active");
    }

    if (window.pageYOffset >= fifthMenuPointOffset - 100) {
      fifthListPoint.classList.add("list-item--active");
    } else if (window.pageYOffset <= fifthMenuPointOffset) {
      fifthListPoint.classList.remove("list-item--active");
    }

    if (window.pageYOffset >= secondMenuPointOffset - 100) {
      secondListPoint.classList.add("list-item--active");
    } else if (window.pageYOffset <= fourthMenuPointOffset) {
      secondListPoint.classList.remove("list-item--active");
    }

    if (window.pageYOffset >= thirdMenuPointOffset - 100) {
      thirdListPoint.classList.add("list-item--active");
    } else if (window.pageYOffset <= fourthMenuPointOffset) {
      thirdListPoint.classList.remove("list-item--active");
    }

    if (window.pageYOffset >= fourthMenuPointOffset - 100) {
      fourthListPoint.classList.add("list-item--active");
    } else if (window.pageYOffset <= fourthMenuPointOffset) {
      fourthListPoint.classList.remove("list-item--active");
    }
  };

  var diactivateAllListPoints = function diactivateAllListPoints() {
    var listPoinstArray = document.querySelectorAll(".list-item");
    console.log(listPoinstArray);
    listPoinstArray.forEach(function (point) {
      point.classList.remove("list-item--active");
    });
  };

  var _darkLayer = document.querySelector(".dark-layer");

  var applyBtns = document.querySelectorAll(".apply-btn");
  var closeForm = document.getElementById("closeForm");
  var applyFormScreen = document.getElementById("applyForm");
  var burgerMenu = document.querySelector(".mobile-header__burger-menu");
  var mobileMenu = document.querySelector(".mobile-menu");
  var allFAQs = document.querySelectorAll(".faq-block");
  var mobileNavigation = document.getElementById("mobileNavigation");
  var allLinks = mobileNavigation.querySelectorAll(".navigation-link");
  applyBtns.forEach(function (button) {
    button.addEventListener("click", function () {
      _darkLayer.classList.toggle("js--hidden");
    });
  });
  closeForm.addEventListener("click", function () {
    _darkLayer.classList.toggle("js--hidden");
  });
  burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("mobile-header__burger-menu--active");
    mobileMenu.classList.toggle("mobile-menu--active");
    document.querySelector("body").classList.toggle("disable-body");
  });
  allLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      burgerMenu.classList.toggle("mobile-header__burger-menu--active");
      mobileMenu.classList.toggle("mobile-menu--active");
      document.querySelector("body").classList.toggle("disable-body");
    });
  });
  $(document).ready(function () {
    $("#userPhone").inputmask();
  });
  allFAQs.forEach(function (faq) {
    faq.addEventListener("click", function () {
      faq.classList.toggle("faq-block--active");
    });
  });

  window.onscroll = function () {
    stickTheMenu();
    unStickTheMenu();
    activateTheListPoints();
  };

  var sectionList = document.getElementById("sectionList");
  var sectionMenu = document.getElementById("sectionMenu");
  var sectionAbilities = document.getElementById("toAbilities"); // MENU POINTS

  var firstMenuPoint = document.getElementById("firstMenuPoint");
  var secondMenuPoint = document.getElementById("secondMenuPoint");
  var thirdMenuPoint = document.getElementById("thirdMenuPoint");
  var fourthMenuPoint = document.getElementById("fourthMenuPoint");
  var fifthMenuPoint = document.getElementById("fifthMenuPoint"); // LIST POINTS

  var firstListPoint = document.getElementById("firstListPoint");
  var secondListPoint = document.getElementById("secondListPoint");
  var thirdListPoint = document.getElementById("thirdListPoint");
  var fourthListPoint = document.getElementById("fourthListPoint");
  var fifthListPoint = document.getElementById("fifthListPoint");
  var sectionListOffset = sectionList.offsetTop;
  var sectionAbilitiesOffset = sectionAbilities.offsetTop; // MENU POINTS OFFSETS

  var firstMenuPointOffset = firstMenuPoint.offsetTop;
  var secondMenuPointOffset = secondMenuPoint.offsetTop;
  var thirdMenuPointOffset = thirdMenuPoint.offsetTop;
  var fourthMenuPointOffset = fourthMenuPoint.offsetTop;
  var fifthMenuPointOffset = fifthMenuPoint.offsetTop;
} else {
  // Поменять стили header, если на белой странице "Конфиденциальность"
  var _darkLayer2 = document.querySelector(".dark-layer");

  var _applyBtns = document.querySelectorAll(".apply-btn");

  var _closeForm = document.getElementById("closeForm");

  var _applyFormScreen = document.getElementById("applyForm");

  var _burgerMenu = document.querySelector(".mobile-header__burger-menu");

  var _mobileMenu = document.querySelector(".mobile-menu");

  var header = document.querySelector(".header");

  _applyBtns.forEach(function (button) {
    button.addEventListener("click", function () {
      _darkLayer2.classList.toggle("js--hidden");
    });
  });

  _closeForm.addEventListener("click", function () {
    _darkLayer2.classList.toggle("js--hidden");
  });

  _burgerMenu.addEventListener("click", function () {
    _burgerMenu.classList.toggle("mobile-header__burger-menu--active");

    _mobileMenu.classList.toggle("mobile-menu--active");

    document.querySelector("body").classList.toggle("disable-body");
  });

  $(document).ready(function () {
    $("#userPhone").inputmask();
  });
  header.classList.add("header--dark");
}