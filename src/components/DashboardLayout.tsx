import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookOpen, LayoutDashboard, BookOpenCheck, Users, BarChart3, Trophy, Bell, LogOut, Settings, FileText, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";

type NavItem = { label: string; icon: React.ElementType; path: string };

const navByRole: Record<string, NavItem[]> = {
  student: [
    { label: "Dashboard", icon: LayoutDashboard, path: "" },
    { label: "My Courses", icon: BookOpenCheck, path: "/courses" },
    { label: "Quizzes", icon: FileText, path: "/quizzes" },
    { label: "Leaderboard", icon: Trophy, path: "/leaderboard" },
    { label: "Progress", icon: BarChart3, path: "/progress" },
  ],
  teacher: [
    { label: "Dashboard", icon: LayoutDashboard, path: "" },
    { label: "Courses", icon: BookOpenCheck, path: "/courses" },
    { label: "My Classes", icon: Users, path: "/classes" },
    { label: "Lessons", icon: BookOpenCheck, path: "/lessons" },
    { label: "Grading", icon: FileText, path: "/grading" },
    { label: "Analytics", icon: BarChart3, path: "/analytics" },
  ],
  admin: [
    { label: "Dashboard", icon: LayoutDashboard, path: "" },
    { label: "Users", icon: Users, path: "/users" },
    { label: "Courses", icon: BookOpenCheck, path: "/courses" },
    { label: "Reports", icon: BarChart3, path: "/reports" },
    { label: "Settings", icon: Settings, path: "/settings" },
  ],
};

const DashboardLayout = ({ role, children }: { role: string; children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const items = navByRole[role] || [];
  const basePath = `/dashboard/${role}`;

  const roleLabels: Record<string, string> = { student: "Student", teacher: "Teacher", admin: "Admin" };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-border bg-card transition-transform md:static md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-16 items-center gap-2 border-b border-border px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-primary">
              <BookOpen className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-extrabold">Art<span className="text-primary">_tech</span></span>
          </Link>
          <button className="ml-auto md:hidden" onClick={() => setSidebarOpen(false)}><X className="h-5 w-5" /></button>
        </div>

        <div className="mx-3 mt-4 rounded-xl bg-primary/5 px-3 py-2">
          <p className="text-xs font-bold text-primary">{roleLabels[role]} Dashboard</p>
        </div>

        <nav className="mt-4 flex-1 space-y-1 px-3">
          {items.map((item) => {
            const fullPath = basePath + item.path;
            const isActive = location.pathname === fullPath || (item.path === "" && location.pathname === basePath);
            return (
              <Link
                key={item.label}
                to={fullPath}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                  isActive ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border p-3">
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground" onClick={() => navigate("/login")}>
            <LogOut className="h-4 w-4" /> Sign Out
          </Button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 z-30 bg-foreground/20 md:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-4">
          <div className="flex items-center gap-2">
            <button className="md:hidden" onClick={() => setSidebarOpen(true)}><Menu className="h-5 w-5" /></button>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to={`${basePath}/notifications`} className="relative rounded-xl p-2 hover:bg-muted">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-secondary" />
            </Link>
            <Link
              to={`${basePath}/profile`}
              className="flex h-9 w-9 items-center justify-center rounded-full gradient-primary text-xs font-bold text-primary-foreground"
            >
              {role[0].toUpperCase()}
            </Link>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
