import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, User, GraduationCap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ThemeToggle from "@/components/ThemeToggle";

type Role = "student" | "teacher" | "admin";

const roles = [
  { id: "student" as Role, label: "Student", icon: User, description: "Access courses & learn" },
  { id: "teacher" as Role, label: "Teacher", icon: GraduationCap, description: "Manage classes & grade" },
  { id: "admin" as Role, label: "Admin", icon: Shield, description: "System management" },
];

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<Role>("student");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/dashboard/${selectedRole}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="absolute right-4 top-4 z-10">
        <ThemeToggle />
      </div>
      <div className="absolute inset-0 opacity-[0.03] gradient-hero" />
      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 text-center">
          <Link to="/" className="mb-4 inline-flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
          </Link>
          <h1 className="text-2xl font-extrabold text-foreground">Welcome to Art_tech</h1>
          <p className="mt-1 text-sm text-muted-foreground">Sign in to continue learning</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
          {/* Role selector */}
          <div className="mb-6 grid grid-cols-3 gap-2">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`flex flex-col items-center gap-1 rounded-xl border-2 p-3 transition-all ${
                  selectedRole === role.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <role.icon className={`h-5 w-5 ${selectedRole === role.id ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`text-xs font-bold ${selectedRole === role.id ? "text-primary" : "text-muted-foreground"}`}>
                  {role.label}
                </span>
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-sm font-semibold">Email</Label>
              <Input id="email" type="email" placeholder="you@school.edu" className="mt-1.5" defaultValue="demo@arttech.edu" />
            </div>
            <div>
              <Label htmlFor="password" className="text-sm font-semibold">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" className="mt-1.5" defaultValue="password" />
            </div>
            <Button type="submit" className="w-full gradient-primary border-0 shadow-soft font-bold">
              Sign In as {roles.find(r => r.id === selectedRole)?.label}
            </Button>
          </form>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Demo mode — click Sign In to explore the dashboard
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
