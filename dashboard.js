
setTimeout(() => {
  const totalUsers = Math.floor(Math.random() * 500) + 100;
  document.getElementById('usersCard').textContent = "📊 Total Users:312";
}, 1000);

const ctx = document.getElementById('userChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Users',
      data: [120, 180, 250, 300, 400],
      backgroundColor: 'rgba(52, 152, 219, 0.2)',
      borderColor: '#3498db',
      borderWidth: 2,
      fill: false,
      tension: 0.3
    }]
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      }
    }
  }
});
