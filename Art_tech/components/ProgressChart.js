function ProgressChart() {
  const chartRef = React.useRef(null);
  const chartInstance = React.useRef(null);

  React.useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const ChartJS = window.Chart;
      
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new ChartJS(ctx, {
        type: 'bar',
        data: {
          labels: ['English', 'Typing', 'Music', 'Art'],
          datasets: [{
            label: 'Progress (%)',
            data: [75, 60, 85, 70],
            backgroundColor: ['#4F46E5', '#F59E0B', '#10B981', '#EC4899'],
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  try {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6" data-name="progress-chart" data-file="components/ProgressChart.js">
        <h3 className="text-xl font-bold mb-6">Course Progress</h3>
        <div style={{ height: '300px' }}>
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProgressChart component error:', error);
    return null;
  }
}
