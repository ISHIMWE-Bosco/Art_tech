function RecentCourses() {
  try {
    const courses = [
      {
        title: 'English Grammar',
        progress: 75,
        color: '#4F46E5',
        icon: 'book-a',
        lastAccessed: '2 hours ago'
      },
      {
        title: 'Typing Speed',
        progress: 60,
        color: '#F59E0B',
        icon: 'keyboard',
        lastAccessed: '1 day ago'
      },
      {
        title: 'Music Theory',
        progress: 85,
        color: '#10B981',
        icon: 'music',
        lastAccessed: '3 hours ago'
      },
      {
        title: 'Drawing Basics',
        progress: 70,
        color: '#EC4899',
        icon: 'palette',
        lastAccessed: '5 hours ago'
      }
    ];

    return (
      <div className="bg-white rounded-xl shadow-sm p-6" data-name="recent-courses" data-file="components/RecentCourses.js">
        <h3 className="text-xl font-bold mb-6">Recent Courses</h3>
        <div className="space-y-4">
          {courses.map((course, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: course.color + '20' }}>
                  <div className={`icon-${course.icon} text-xl`} style={{ color: course.color }}></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{course.title}</h4>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="h-2 rounded-full" style={{ width: `${course.progress}%`, backgroundColor: course.color }}></div>
                    </div>
                    <span className="text-sm text-[var(--text-secondary)]">{course.progress}%</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">{course.lastAccessed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('RecentCourses component error:', error);
    return null;
  }
}