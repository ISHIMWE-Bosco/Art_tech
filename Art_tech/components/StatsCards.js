function StatsCards() {
  try {
    const stats = [
      { icon: 'book-open', label: 'Courses Enrolled', value: '4', color: '#4F46E5', bgColor: '#EEF2FF' },
      { icon: 'check-circle', label: 'Lessons Completed', value: '32', color: '#10B981', bgColor: '#D1FAE5' },
      { icon: 'trophy', label: 'Achievements', value: '12', color: '#F59E0B', bgColor: '#FEF3C7' },
      { icon: 'clock', label: 'Study Hours', value: '48', color: '#EC4899', bgColor: '#FCE7F3' }
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-name="stats-cards" data-file="components/StatsCards.js">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[var(--text-secondary)] text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <div className="w-14 h-14 rounded-lg flex items-center justify-center" style={{ backgroundColor: stat.bgColor }}>
                <div className={`icon-${stat.icon} text-2xl`} style={{ color: stat.color }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('StatsCards component error:', error);
    return null;
  }
}