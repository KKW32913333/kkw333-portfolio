// レーダーチャート
(function () {
  const ctx = document.getElementById("radarChart");

  const chart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Java", "Python", "SQL", "HTML", "CSS", "JavaScript"],
      datasets: [{
        label: "Skill Level",
        data: [85, 70, 80, 75, 70, 65],
        backgroundColor: "rgba(99, 102, 241, 0.25)",   // accent
        borderColor: "rgba(139, 92, 246, 1)",          // accent2
        borderWidth: 2,
        pointBackgroundColor: "rgba(255, 255, 255, 1)",
        pointBorderColor: "rgba(139, 92, 246, 1)",
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          angleLines: { color: "rgba(255,255,255,0.2)" },
          grid: { color: "rgba(255,255,255,0.2)" },
          pointLabels: { color: "var(--text)" },
          suggestedMin: 0,
          suggestedMax: 100
        }
      },
      plugins: {
        legend: {
          labels: { color: "var(--text)" }
        }
      }
    }
  });
})();
