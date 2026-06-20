// テーマ切り替え
(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeBtn");

  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    root.setAttribute("data-theme", "dark");
    btn.textContent = "☀️";
  }

  btn.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";

    if (isDark) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      btn.textContent = "🌙";
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      btn.textContent = "☀️";
    }
  });
})();

// スクロールアニメーション
(function () {
  const reveals = document.querySelectorAll(".reveal");

  function reveal() {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < trigger) el.classList.add("visible");
    });
  }

  window.addEventListener("scroll", reveal);
  window.addEventListener("load", reveal);
})();

// スマホ用ハンバーガーメニュー
(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !expanded);

    toggle.classList.toggle("active");
    nav.classList.toggle("open");
  });

  // メニュークリックで閉じる
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
})();

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
  overlay.classList.toggle('show');
});

// オーバーレイをクリックしたら閉じる
overlay.addEventListener('click', () => {
  navToggle.classList.remove('active');
  navLinks.classList.remove('open');
  overlay.classList.remove('show');
});

