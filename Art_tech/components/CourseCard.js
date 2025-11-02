function CourseCard({ icon, title, description, color, lessons }) {
  try {
    return (
      <div className="course-card" data-name="course-card" data-file="components/CourseCard.js">
        <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4`} style={{ backgroundColor: color + '20' }}>
          <div className={`icon-${icon} text-2xl`} style={{ color: color }}></div>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-[var(--text-secondary)] mb-4">{description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[var(--text-secondary)]">{lessons} lessons</span>
          <a href="dashboard.html" className="text-[var(--primary-color)] font-semibold hover:underline">
            Start Course →
          </a>
        </div>
      </div>
    );
  } catch (error) {
    console.error('CourseCard component error:', error);
    return null;
  }
}