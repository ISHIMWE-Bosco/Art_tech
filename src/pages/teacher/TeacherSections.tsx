import { FormEvent, useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { BookOpenCheck, FileText, Plus, Trash2, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useCourses } from "@/context/CoursesContext";
import { useToast } from "@/hooks/use-toast";

const classPerformance = [
  { name: "Class 3A", avg: 82 },
  { name: "Class 3B", avg: 75 },
  { name: "Class 4A", avg: 88 },
  { name: "Class 4B", avg: 71 },
];

const completionData = [
  { name: "Completed", value: 68 },
  { name: "In Progress", value: 22 },
  { name: "Not Started", value: 10 },
];

const COLORS = ["hsl(174, 62%, 47%)", "hsl(30, 95%, 60%)", "hsl(215, 16%, 76%)"];

const classGroups = [
  { name: "Class 3A", students: 14, attendance: "96%", focus: "Typing practice" },
  { name: "Class 3B", students: 12, attendance: "92%", focus: "Speaking drills" },
  { name: "Class 4A", students: 11, attendance: "98%", focus: "Design critiques" },
  { name: "Class 4B", students: 11, attendance: "90%", focus: "Spreadsheet labs" },
];

const lessonPipeline = [
  { title: "Keyboard shortcuts mastery", course: "Typing Fundamentals", status: "Scheduled", date: "Mar 13, 2026" },
  { title: "Presentation confidence", course: "English Communication", status: "Draft", date: "Mar 15, 2026" },
  { title: "Poster hierarchy", course: "Art and Design Studio", status: "Ready", date: "Mar 18, 2026" },
];

const gradingQueue = [
  { student: "Amina K.", task: "Typing Test 3", submitted: "Mar 11, 2026", status: "Pending" },
  { student: "David O.", task: "Essay Reflection", submitted: "Mar 10, 2026", status: "Pending" },
  { student: "Grace M.", task: "PowerPoint Project", submitted: "Mar 9, 2026", status: "Reviewed" },
];

const analyticsHighlights = [
  { label: "Average engagement", value: "78%" },
  { label: "On-time submissions", value: "84%" },
  { label: "Active cohorts", value: "4" },
];

const initialFormState = {
  title: "",
  teacher: "",
  category: "",
  level: "",
  duration: "",
};

export const TeacherOverviewPage = () => {
  const { courses } = useCourses();
  const activeCourses = courses.filter((course) => course.status === "Active").length;
  const pendingGrades = gradingQueue.filter((item) => item.status === "Pending").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground">Teacher Dashboard</h1>
        <p className="text-muted-foreground">Every sidebar option now opens its own page, including a dedicated course manager.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="shadow-card">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">48</p>
              <p className="text-xs font-semibold text-muted-foreground">Students</p>
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
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">{pendingGrades}</p>
              <p className="text-xs font-semibold text-muted-foreground">Pending Grades</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-foreground">78%</p>
              <p className="text-xs font-semibold text-muted-foreground">Avg Performance</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="shadow-card xl:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Grading Queue</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {gradingQueue.map((item) => (
              <div key={item.student + item.task} className="flex items-center justify-between rounded-xl border border-border p-4">
                <div>
                  <p className="font-bold text-foreground">{item.student}</p>
                  <p className="text-sm text-muted-foreground">{item.task}</p>
                </div>
                <Badge variant={item.status === "Pending" ? "secondary" : "default"}>{item.status}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Lesson Completion</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie data={completionData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} dataKey="value" paddingAngle={4}>
                  {completionData.map((item, index) => (
                    <Cell key={item.name} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              {completionData.map((item, index) => (
                <div key={item.name} className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[index] }} />
                  {item.name}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Class Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={classPerformance}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="avg" fill="hsl(174, 62%, 47%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export const TeacherCoursesPage = () => {
  const { courses, addCourse, removeCourse } = useCourses();
  const { toast } = useToast();
  const [formState, setFormState] = useState(initialFormState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const hasEmptyField = Object.values(formState).some((value) => value.trim().length === 0);
    if (hasEmptyField) {
      toast({
        title: "Missing details",
        description: "Fill in the course title, teacher, category, level, and duration before saving.",
        variant: "destructive",
      });
      return;
    }

    addCourse(formState);
    setFormState(initialFormState);
    toast({
      title: "Course added",
      description: "The new course is now available in the student and admin course pages.",
    });
  };

  const handleRemoveCourse = (courseId: string, courseTitle: string) => {
    removeCourse(courseId);
    toast({
      title: "Course removed",
      description: `${courseTitle} has been removed from the shared course list.`,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground">Course Manager</h1>
        <p className="text-muted-foreground">Teachers can add new courses here and remove courses that should no longer appear in the dashboards.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_1.45fr]">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Plus className="h-5 w-5 text-primary" /> Add Course
            </CardTitle>
            <CardDescription>New courses are stored locally and shared across the dashboard pages.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                placeholder="Course title"
                value={formState.title}
                onChange={(event) => setFormState((current) => ({ ...current, title: event.target.value }))}
              />
              <Input
                placeholder="Teacher name"
                value={formState.teacher}
                onChange={(event) => setFormState((current) => ({ ...current, teacher: event.target.value }))}
              />
              <Input
                placeholder="Category"
                value={formState.category}
                onChange={(event) => setFormState((current) => ({ ...current, category: event.target.value }))}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  placeholder="Level"
                  value={formState.level}
                  onChange={(event) => setFormState((current) => ({ ...current, level: event.target.value }))}
                />
                <Input
                  placeholder="Duration"
                  value={formState.duration}
                  onChange={(event) => setFormState((current) => ({ ...current, duration: event.target.value }))}
                />
              </div>
              <Button type="submit" className="w-full">Save Course</Button>
            </form>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Current Courses</CardTitle>
            <CardDescription>Remove any course that should no longer be available.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="rounded-2xl border border-border p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <p className="font-bold text-foreground">{course.title}</p>
                      <Badge variant={course.status === "Active" ? "default" : "secondary"}>{course.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {course.teacher} - {course.category} - {course.level}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {course.duration} - {course.enrolled} enrolled
                    </p>
                  </div>
                  <Button variant="destructive" size="sm" onClick={() => handleRemoveCourse(course.id, course.title)}>
                    <Trash2 className="h-4 w-4" /> Remove
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export const TeacherClassesPage = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-extrabold text-foreground">My Classes</h1>
      <p className="text-muted-foreground">Each class now has a standalone page with its own attendance and focus summary.</p>
    </div>

    <div className="grid gap-5 lg:grid-cols-2">
      {classGroups.map((group) => (
        <Card key={group.name} className="shadow-card">
          <CardHeader>
            <CardTitle className="text-xl">{group.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-muted/60 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Students</p>
                <p className="mt-1 font-semibold text-foreground">{group.students}</p>
              </div>
              <div className="rounded-xl bg-muted/60 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Attendance</p>
                <p className="mt-1 font-semibold text-foreground">{group.attendance}</p>
              </div>
            </div>
            <div className="rounded-xl border border-border p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Current focus</p>
              <p className="mt-1 font-semibold text-foreground">{group.focus}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export const TeacherLessonsPage = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-extrabold text-foreground">Lessons</h1>
      <p className="text-muted-foreground">Track scheduled, draft, and ready lessons without mixing them into the dashboard overview.</p>
    </div>

    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg">Lesson Pipeline</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {lessonPipeline.map((lesson) => (
          <div key={lesson.title} className="flex flex-col gap-3 rounded-xl border border-border p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-foreground">{lesson.title}</p>
              <p className="text-sm text-muted-foreground">{lesson.course}</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant={lesson.status === "Ready" ? "default" : lesson.status === "Draft" ? "secondary" : "outline"}>
                {lesson.status}
              </Badge>
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{lesson.date}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);

export const TeacherGradingPage = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-extrabold text-foreground">Grading</h1>
      <p className="text-muted-foreground">A dedicated queue for assignment review and grading follow-up.</p>
    </div>

    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg">Submissions Awaiting Review</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {gradingQueue.map((item) => (
          <div key={item.student + item.task} className="flex flex-col gap-3 rounded-xl border border-border p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-foreground">{item.student}</p>
              <p className="text-sm text-muted-foreground">{item.task}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.submitted}</span>
              <Badge variant={item.status === "Pending" ? "secondary" : "default"}>{item.status}</Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);

export const TeacherAnalyticsPage = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-extrabold text-foreground">Analytics</h1>
      <p className="text-muted-foreground">See engagement and performance metrics separately from your day-to-day management pages.</p>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      {analyticsHighlights.map((item) => (
        <Card key={item.label} className="shadow-card">
          <CardContent className="p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</p>
            <p className="mt-2 text-2xl font-extrabold text-foreground">{item.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg">Class Performance Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={classPerformance}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Bar dataKey="avg" fill="hsl(174, 62%, 47%)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  </div>
);
