const t = 'IT・Security・Programming';
let i = 0;

// タイピングアニメーション
(function type() {
    const typingElement = document.getElementById('typing');

    if (!typingElement) return;

    if (i < t.length) {
        typingElement.textContent += t[i++];
        setTimeout(type, 80);
    }
})();

// フェードイン
document.querySelectorAll('.fade').forEach(element => {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }

        });

    });

    observer.observe(element);

});

// ダークモード切替
const themeButton = document.getElementById('theme-toggle');

if (themeButton) {

    themeButton.addEventListener('click', () => {

        document.body.classList.toggle('light');

        localStorage.setItem(
            'theme',
            document.body.classList.contains('light')
                ? 'light'
                : 'dark'
        );

    });

}

// 保存されたテーマを適用
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
}

// スクロール進捗バー
window.addEventListener('scroll', () => {

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.scrollY / documentHeight) * 100;

    const progressBar =
        document.getElementById('progress-bar');

    if (progressBar) {
        progressBar.style.width = progress + '%';
    }

});

// TOPへ戻るボタン
const topBtn = document.getElementById('topBtn');

if (topBtn) {

    topBtn.addEventListener('click', () => {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}