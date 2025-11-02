function Hero() {
  try {
    return (
      <section id="home" className="py-20 bg-gradient-to-br from-indigo-50 to-white" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-[var(--text-primary)] mb-6">
                Quality Education for Every Child
              </h1>
              <p className="text-xl text-[var(--text-secondary)] mb-8">
                Interactive learning platform designed for primary school students. Learn English, typing, music, and art through engaging courses.
              </p>
              <div className="flex gap-4">
                <a href="dashboard.html" className="btn-primary">Start Learning</a>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop"
                alt="Students learning"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="icon-users text-xl text-green-600"></div>
                  </div>
                  <div>
                    <p className="font-bold text-lg">10,000+</p>
                    <p className="text-sm text-[var(--text-secondary)]">Active Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}