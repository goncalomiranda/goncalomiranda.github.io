const body = document.body;
const btnTheme = document.getElementById("btn-theme");
const btnHamburger = document.querySelector(".fa-bars");

const savedTheme = localStorage.getItem("portfolio-theme");
const initialTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";

body.classList.remove("dark", "light");
body.classList.add(initialTheme);
btnTheme.classList.remove("fa-sun", "fa-moon");
btnTheme.classList.add(initialTheme === "dark" ? "fa-sun" : "fa-moon");

const isDark = () => body.classList.contains("dark");

const setTheme = (bodyClass, iconClass) => {
  body.classList.remove("dark", "light");
  btnTheme.classList.remove("fa-sun", "fa-moon");

  body.classList.add(bodyClass);
  btnTheme.classList.add(iconClass);

  localStorage.setItem("portfolio-theme", bodyClass);
};

const toggleTheme = () => {
  if (isDark()) {
    setTheme("light", "fa-moon");
  } else {
    setTheme("dark", "fa-sun");
  }
};

btnTheme.addEventListener("click", toggleTheme);

const displayList = () => {
  const navList = document.querySelector(".nav__list");

  if (btnHamburger.classList.contains("fa-bars")) {
    btnHamburger.classList.remove("fa-bars");
    btnHamburger.classList.add("fa-times");
    navList.classList.add("display-nav-list");
  } else {
    btnHamburger.classList.remove("fa-times");
    btnHamburger.classList.add("fa-bars");
    navList.classList.remove("display-nav-list");
  }
};

btnHamburger.addEventListener("click", displayList);

const scrollUp = () => {
  const btnScrollTop = document.querySelector(".scroll-top");

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
};

document.addEventListener("scroll", scrollUp);
