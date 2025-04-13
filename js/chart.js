document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('growth-chart').getContext('2d');
    
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Январь 2025', 'Февраль 2025', 'Март 2025'],
        datasets: [{
          label: 'Рост автоматизации чат-бота (%)',
          data: [0, 0, 2.2],
          borderColor: '#ff2d75',
          backgroundColor: 'rgba(255, 45, 117, 0.1)',
          borderWidth: 3,
          tension: 0.3,
          fill: true,
          pointBackgroundColor: '#ff2d75',
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#ffffff',
              callback: function(value) {
                return value + '%';
              }
            }
          },
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#ffffff'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#ffffff',
              font: {
                family: 'Inter',
                size: 14
              }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(10, 10, 10, 0.9)',
            titleColor: '#ff2d75',
            bodyColor: '#ffffff',
            borderColor: '#ff2d75',
            borderWidth: 1,
            cornerRadius: 8,
            padding: 12
          }
        },
        animation: {
          duration: 2000,
          easing: 'easeOutQuart'
        }
      }
    });
  
    // Анимация графика при появлении
    const chartObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          chart.update();
        }
      });
    });
  
    chartObserver.observe(document.querySelector('.chart-container'));
  });