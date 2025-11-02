function DashboardHeader() {
  try {
    return (
      <header className="bg-white shadow-sm" data-name="dashboard-header" data-file="components/DashboardHeader.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="index.html" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                <div className="icon-book-open text-xl text-white"></div>
              </div>
              <span className="text-2xl font-bold text-[var(--primary-color)]">ARTECH</span>
            </a>
            
            <nav className="flex items-center space-x-6">
              <a href="dashboard.html" className="text-[var(--primary-color)] font-semibold">Dashboard</a>
              <a href="#" className="text-[var(--text-primary)] hover:text-[var(--primary-color)]">My Courses</a>
              <a href="#" className="text-[var(--text-primary)] hover:text-[var(--primary-color)]">Achievements</a>
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center cursor-pointer">
                <div className="icon-user text-xl text-[var(--primary-color)]"></div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error('DashboardHeader component error:', error);
    return null;
  }
}