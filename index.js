const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  const navigation = document.querySelector(".nav__list");
  navigation.classList.toggle("open");
  navToggle.classList.toggle("cancel");
});
