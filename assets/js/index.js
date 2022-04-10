$(() => {
  const navbarCollapse = $(".navbar-collapse");
  const windowWidth = parseInt($(window).width());

  if (windowWidth < 1200) {
    navbarCollapse.hide();
  }

  const navbarShow = $(".navbar-show");
  navbarShow.on("click", () => {
    navbarCollapse.fadeIn(500);
  });

  const navbarHide = $(".navbar-hide");
  navbarHide.on("click", () => {
    navbarCollapse.fadeOut(500);
  });

  const navbar = $(".navbar");

  if ($(this).scrollTop() > 0) {
    navbar.addClass("navbar-scrolled");
  }

  $(document).on("scroll", () => {
    navbar.toggleClass("navbar-scrolled", $(this).scrollTop() > 0);
  });
});
