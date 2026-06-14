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
