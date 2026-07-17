// ===============================
// スクロールアニメーション
// ===============================
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


// ===============================
// モバイルメニュー（menu タブ → ドロップダウンパネル）
// ===============================
const menuToggle = document.getElementById('menuToggle');
const mobileNavPanel = document.getElementById('mobileNavPanel');

menuToggle.addEventListener('click', () => {
  const isOpen = mobileNavPanel.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.querySelectorAll('.mobile-nav-panel a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNavPanel.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});


// ===============================
// スクロール連動：現在地のタブをハイライト
// ===============================
(function () {
  const sections = document.querySelectorAll('main section[id]');
  const navTabs = document.querySelectorAll('.nav-tab');

  if (!sections.length || !navTabs.length) return;

  const hrefFor = (id) => (id === 'hero' ? '#top' : `#${id}`);

  const setActive = (id) => {
    const target = hrefFor(id);
    navTabs.forEach((tab) => {
      tab.classList.toggle('active', tab.getAttribute('href') === target);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
})();


// ===============================
// プロジェクトタブ切り替え（Linkle / Shelfy / Finterra）
// ===============================
(function () {
  const tabs = document.querySelectorAll(".project-tab");
  const panels = document.querySelectorAll(".project-panel");

  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.target;

      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      panels.forEach((p) => p.classList.remove("active"));

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      document.getElementById(targetId).classList.add("active");
    });
  });
})();
