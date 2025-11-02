function Courses() {
  try {
    const courses = [
      {
        icon: 'book-a',
        title: 'English Language',
        description: 'Build strong reading, writing, and communication skills through interactive lessons.',
        color: '#4F46E5',
        lessons: 24
      },
      {
        icon: 'keyboard',
        title: 'Typing Skills',
        description: 'Learn touch typing with fun games and exercises to improve speed and accuracy.',
        color: '#F59E0B',
        lessons: 18
      },
      {
        icon: 'music',
        title: 'Music Education',
        description: 'Discover rhythm, melody, and music theory through engaging activities.',
        color: '#10B981',
        lessons: 20
      },
      {
        icon: 'palette',
        title: 'Art & Creativity',
        description: 'Express yourself through drawing, painting, and creative projects.',
        color: '#EC4899',
        lessons: 22
      }
    ];

    return (
      <section id="courses" className="py-20 bg-white" data-name="courses" data-file="components/Courses.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Courses</h2>
            <p className="text-xl text-[var(--text-secondary)]">
              Comprehensive curriculum designed for primary school students
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Courses component error:', error);
    return null;
  }
}