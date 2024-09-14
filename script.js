const navEl = document.querySelector('.mobile');
const navDivEl = navEl.querySelectorAll('div');
const asideEl = document.querySelector('aside');
const articleEl = document.querySelector('article');
const aboutEl = document.querySelector('#about');

let mobile = false;
let onNav = false;

const setMobile = () => {
  let res = window.innerWidth < window.innerHeight;
  mobile = res
  if (res === false ) {
    onNav = false;
  }
};

const updateStyles = () => {
  console.log("mobile: " + mobile);
  console.log("nav: " + onNav);

  if (mobile === false && onNav === true) {
    navDivEl[0].style.transform = "translateY(10px)";
    navDivEl[1].style.transform = "scale(1)";
    navDivEl[2].style.transform = "translateY(-10px)";

    asideEl.style.transform = "none";
    articleEl.style.filter = "none";
  } else if (mobile === false && onNav === false) {
    navDivEl[0].style.transform = "translateY(10px)";
    navDivEl[1].style.transform = "scale(1)";
    navDivEl[2].style.transform = "translateY(-10px)";

    asideEl.style.transform = "none";
    articleEl.style.filter = "none";
  } else if (mobile === true && onNav === true ) {
    navDivEl[0].style.transform = "rotate(45deg)";
    navDivEl[1].style.transform = "scale(0)";
    navDivEl[2].style.transform = "rotate(-45deg)";

    asideEl.style.transform = "none";
    articleEl.style.filter = "blur(4px)";
  } else if (mobile == true && onNav === false) {
    navDivEl[0].style.transform = "translateY(10px)";
    navDivEl[1].style.transform = "scale(1)";
    navDivEl[2].style.transform = "translateY(-10px)";

    asideEl.style.transform = "translateX(-150%)";
    articleEl.style.filter = "";
  }
};


setMobile();
updateStyles();

window.addEventListener('resize', () => {
  setMobile();
  updateStyles();
});

navEl.addEventListener('click', () => {
  onNav = !onNav;
  updateStyles();
});
