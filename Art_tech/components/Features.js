function Features() {
  try {
    const features = [
      {
        icon: 'monitor',
        title: 'Interactive Learning',
        description: 'Engage with multimedia content, quizzes, and interactive exercises'
      },
      {
        icon: 'award',
        title: 'Progress Tracking',
        description: 'Monitor student progress with detailed reports and achievements'
      },
      {
        icon: 'wifi-off',
        title: 'Offline Access',
        description: 'Download lessons for learning without internet connection'
      },
      {
        icon: 'globe',
        title: 'Accessible Anywhere',
        description: 'Learn from any device - computer, tablet, or smartphone'
      }
    ];

    return (
      <section id="features" className="py-20 bg-gray-50" data-name="features" data-file="components/Features.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose LearnHub?</h2>
            <p className="text-xl text-[var(--text-secondary)]">
              Empowering students with modern learning tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className={`icon-${feature.icon} text-2xl text-[var(--primary-color)]`}></div>
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-[var(--text-secondary)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}