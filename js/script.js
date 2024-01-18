console.log("Hello world!");

const greeting = "欢迎光临，郭志鹏先生！";
console.log(greeting);

const h1 = document.querySelector(".heading-primary");
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = greeting;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

// 自动更新年份
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// 让手机导航栏工作
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  // toggle:转换, 有这个类就删除反之添加
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling 平滑滚动有些浏览器用scroll-behavior: smooth;没有效果
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    console.log(e);
    e.preventDefault();
    const href = link.getAttribute("href");

    // 回到顶部
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    // 滚动到对应连接处
    if (href !== "#" && href.startsWith("#")) {
      console.log(document.querySelector(href));
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // 滚动页面时关闭手机导航栏
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.remove("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
// 使固定的导航栏在滚出hero后消失
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    // 如果移出视窗
    if (ent.isIntersecting === false)
      // document.querySelector(".header").classList.add("sticky");
      document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
