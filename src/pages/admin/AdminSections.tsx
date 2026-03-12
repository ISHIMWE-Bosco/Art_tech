import { Activity, BookOpenCheck, GraduationCap, Settings, TrendingUp, Users } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useCourses } from "@/context/CoursesContext";

const monthlyGrowth = [
  { month: "Jan", students: 180, lessons: 420 },
  { month: "Feb", students: 210, lessons: 510 },
  { month: "Mar", students: 245, lessons: 580 },
  { month: "Apr", students: 280, lessons: 650 },
  { month: "May", students: 310, lessons: 720 },
  { month: "Jun", students: 342, lessons: 800 },
];

const recentUsers = [
  { name: "Alice Mwangi", role: "Student", date: "Mar 11, 2026", status: "Active" },
  { name: "John Kamau", role: "Teacher", date: "Mar 10, 2026", status: "Active" },
  { name: "Peter Ochieng", role: "Student", date: "Mar 10, 2026", status: "Active" },
  { name: "Mary Wanjiku", role: "Student", date: "Mar 9, 2026", status: "Inactive" },
  { name: "Sarah Njeri", role: "Teacher", date: "Mar 8, 2026", status: "Active" },
];

const reports = [
  { label: "Completion rate", value: "81%", note: "Up 6% this month" },
  { label: "Teacher response time", value: "1.8 days", note: "Average grading turnaround" },
  { label: "At-risk learners", value: "14", note: "Require mentor follow-up" },
];

const settingsGroups = [
  { label: "Email alerts", description: "Send platform notices to staff automatically.", enabled: true },
  { label: "Weekly summaries", description: "Deliver engagement summaries every Monday.", enabled: true },
  { label: "Maintenance mode", description: "Restrict access during updates.", enabled: false },
];

export const AdminOverviewPage = () => {
  const { courses } = useCourses();
  const activeCourses = courses.filter((course) => course.status === "Active").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground">Admin sections are now split into dedicated pages with course data shared from the teacher manager.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="shadow-card">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">342</p>
              <p className="text-xs font-semibold text-muted-foreground">Total Students</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">12</p>
              <p className="text-xs font-semibold text-muted-foreground">Teachers</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-info text-primary-foreground">
              <BookOpenCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">{activeCourses}</p>
              <p className="text-xs font-semibold text-muted-foreground">Active Courses</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">89%</p>
              <p className="text-xs font-semibold text-muted-foreground">Platform Usage</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5 text-primary" /> Platform Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={monthlyGrowth}>
                <defs>
                  <linearGradient id="admin-growth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(174, 62%, 47%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(174, 62%, 47%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="students" stroke="hsl(174, 62%, 47%)" fill="url(#admin-growth)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <AdminCoursesChart />
      </div>
    </div>
  );
};

const AdminCoursesChart = () => {
  const { courses } = useCourses();
  const chartData = courses.map((course) => ({
    name: course.title.split(" ")[0],
    students: course.enrolled,
  }));

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg">Course Enrollment</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="students" fill="hsl(30, 95%, 60%)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export const AdminUsersPage = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-extrabold text-foreground">Users</h1>
      <p className="text-muted-foreground">A standalone user management page for students and teachers.</p>
    </div>

    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg">Recent Users</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 font-bold text-muted-foreground">Name</th>
                <th className="pb-3 font-bold text-muted-foreground">Role</th>
                <th className="pb-3 font-bold text-muted-foreground">Joined</th>
                <th className="pb-3 font-bold text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user) => (
                <tr key={user.name + user.date} className="border-b border-border last:border-0">
                  <td className="py-3 font-semibold text-foreground">{user.name}</td>
                  <td className="py-3">
                    <Badge variant={user.role === "Teacher" ? "secondary" : "outline"}>{user.role}</Badge>
                  </td>
                  <td className="py-3 text-muted-foreground">{user.date}</td>
                  <td className="py-3">
                    <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  </div>
);

export const AdminCoursesPage = () => {
  const { courses } = useCourses();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground">Courses</h1>
        <p className="text-muted-foreground">This page reflects the shared course list, including additions and removals made by teachers.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {courses.map((course) => (
          <Card key={course.id} className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <Badge variant={course.status === "Active" ? "default" : "secondary"}>{course.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-muted/60 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Teacher</p>
                  <p className="mt-1 font-semibold text-foreground">{course.teacher}</p>
                </div>
                <div className="rounded-xl bg-muted/60 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Category</p>
                  <p className="mt-1 font-semibold text-foreground">{course.category}</p>
                </div>
                <div className="rounded-xl bg-muted/60 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Level</p>
                  <p className="mt-1 font-semibold text-foreground">{course.level}</p>
                </div>
                <div className="rounded-xl bg-muted/60 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Enrolled</p>
                  <p className="mt-1 font-semibold text-foreground">{course.enrolled}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const AdminReportsPage = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-extrabold text-foreground">Reports</h1>
      <p className="text-muted-foreground">Review operational metrics and follow-up actions from a dedicated reporting page.</p>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      {reports.map((report) => (
        <Card key={report.label} className="shadow-card">
          <CardContent className="p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{report.label}</p>
            <p className="mt-2 text-2xl font-extrabold text-foreground">{report.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{report.note}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export const AdminSettingsPage = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-extrabold text-foreground">Settings</h1>
      <p className="text-muted-foreground">Platform-level controls are separated from analytics and reporting.</p>
    </div>

    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Settings className="h-5 w-5 text-primary" /> Platform Controls
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {settingsGroups.map((setting) => (
          <div key={setting.label} className="flex items-start justify-between gap-4 rounded-xl border border-border p-4">
            <div>
              <p className="font-bold text-foreground">{setting.label}</p>
              <p className="text-sm text-muted-foreground">{setting.description}</p>
            </div>
            <Switch defaultChecked={setting.enabled} />
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);
