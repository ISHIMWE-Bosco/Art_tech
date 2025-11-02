function Header() {
  try {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
      <header className="bg-white shadow-sm sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                <div className="icon-book-open text-xl text-white"></div>
              </div>
              <span className="text-2xl font-bold text-[var(--primary-color)]">ARTECH</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Home</a>
              <a href="#courses" className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Courses</a>
              <a href="#features" className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">Features</a>
              <a href="dashboard.html" className="btn-primary text-sm py-2">Get Started</a>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className={`icon-${mobileMenuOpen ? 'x' : 'menu'} text-2xl text-[var(--text-primary)]`}></div>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-[var(--text-primary)] hover:text-[var(--primary-color)]">Home</a>
                <a href="#courses" className="text-[var(--text-primary)] hover:text-[var(--primary-color)]">Courses</a>
                <a href="#features" className="text-[var(--text-primary)] hover:text-[var(--primary-color)]">Features</a>
                <a href="dashboard.html" className="btn-primary text-center">Get Started</a>
              </nav>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}