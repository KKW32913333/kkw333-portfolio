// テーマ切り替え（ライト / ダーク）と永続化
(function () {
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeBtn");

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    root.setAttribute("data-theme", "dark");
    if (themeBtn) themeBtn.textContent = "☀️";
  }

  function toggleTheme() {
    const isDark = root.getAttribute("data-theme") === "dark";
    if (isDark) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      themeBtn.textContent = "🌙";
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeBtn.textContent = "☀️";
    }
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
  }
})();

// スクロール時のセクションフェードイン
(function () {
  const reveals = document.querySelectorAll(".reveal");

  function onScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  window.addEventListener("load", onScroll);
})();

// ナビゲーションのスムーススクロール & モバイルメニュー制御
(function () {
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  const navList = document.querySelector(".nav-links");
  const navToggle = document.querySelector(".nav-toggle");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      if (navList && navList.classList.contains("open")) {
        navList.classList.remove("open");
        if (navToggle) {
          navToggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
})();
