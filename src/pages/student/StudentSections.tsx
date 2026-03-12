import { BookOpen, BookOpenCheck, Clock, FileText, Star, Target, Trophy, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useCourses } from "@/context/CoursesContext";

const weeklyProgress = [
  { day: "Mon", score: 75 },
  { day: "Tue", score: 82 },
  { day: "Wed", score: 68 },
  { day: "Thu", score: 90 },
  { day: "Fri", score: 85 },
  { day: "Sat", score: 92 },
  { day: "Sun", score: 88 },
];

const leaderboard = [
  { name: "Amina K.", score: 960, rank: 1 },
  { name: "David O.", score: 940, rank: 2 },
  { name: "Grace M.", score: 920, rank: 3 },
  { name: "Brian W.", score: 895, rank: 4 },
  { name: "You", score: 880, rank: 5 },
];

const upcomingQuizzes = [
  { title: "Typing speed checkpoint", course: "Typing Fundamentals", due: "Mar 14, 2026", status: "Ready" },
  { title: "English speaking review", course: "English Communication", due: "Mar 16, 2026", status: "Revision" },
  { title: "Color theory basics", course: "Art and Design Studio", due: "Mar 18, 2026", status: "New" },
];

const recentResults = [
  { title: "Keyboard layout basics", score: "92%", course: "Typing Fundamentals" },
  { title: "Vocabulary recall", score: "84%", course: "English Communication" },
  { title: "Shape composition", score: "95%", course: "Art and Design Studio" },
];

const progressMilestones = [
  { label: "Weekly target", value: "4 of 5 lessons" },
  { label: "Streak", value: "11 days" },
  { label: "Certificates", value: "2 earned" },
];

const StatCard = ({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ElementType;
}) => (
  <Card className="shadow-card">
    <CardContent className="flex items-center gap-4 p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-2xl font-extrabold text-foreground">{value}</p>
        <p className="text-xs font-semibold text-muted-foreground">{label}</p>
      </div>
    </CardContent>
  </Card>
);

export const StudentOverviewPage = () => {
  const { courses } = useCourses();
  const averageProgress = courses.length
    ? Math.round(courses.reduce((sum, course) => sum + course.progress, 0) / courses.length)
    : 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground">Welcome back, Student</h1>
        <p className="text-muted-foreground">Your dashboard is now split into real pages. Use the menu to jump straight to each section.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Courses" value={courses.length.toString()} icon={BookOpen} />
        <StatCard label="Lessons Done" value="28" icon={Clock} />
        <StatCard label="Average Progress" value={`${averageProgress}%`} icon={Star} />
        <StatCard label="Rank" value="#5" icon={Trophy} />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="shadow-card xl:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpenCheck className="h-5 w-5 text-primary" /> Current Courses
            </CardTitle>
            <CardDescription>Each course below is linked to the shared course list managed by teachers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="rounded-2xl border border-border p-4">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-bold text-foreground">{course.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {course.teacher} - {course.category}
                    </p>
                  </div>
                  <Badge variant={course.status === "Active" ? "default" : "secondary"}>{course.status}</Badge>
                </div>
                <div className="mb-2 flex items-center justify-between text-xs font-semibold text-muted-foreground">
                  <span>{course.level}</span>
                  <span>{course.progress}% complete</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Trophy className="h-5 w-5 text-secondary" /> Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {leaderboard.map((entry) => (
              <div
                key={entry.rank}
                className={`flex items-center gap-3 rounded-xl border p-3 ${
                  entry.name === "You" ? "border-primary/30 bg-primary/5" : "border-border"
                }`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-bold text-foreground">
                  {entry.rank}
                </span>
                <span className="flex-1 text-sm font-semibold text-foreground">{entry.name}</span>
                <span className="text-xs font-bold text-muted-foreground">{entry.score} pts</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5 text-primary" /> Weekly Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={weeklyProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="score"
                stroke="hsl(174, 62%, 47%)"
                strokeWidth={3}
                dot={{ fill: "hsl(174, 62%, 47%)", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export const StudentCoursesPage = () => {
  const { courses } = useCourses();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground">My Courses</h1>
        <p className="text-muted-foreground">Browse every available course and keep track of the next lesson for each one.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {courses.map((course) => (
          <Card key={course.id} className="shadow-card">
            <CardHeader className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>
                    {course.teacher} - {course.duration}
                  </CardDescription>
                </div>
                <Badge variant={course.status === "Active" ? "default" : "secondary"}>{course.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-muted/60 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Category</p>
                  <p className="mt-1 font-semibold text-foreground">{course.category}</p>
                </div>
                <div className="rounded-xl bg-muted/60 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Level</p>
                  <p className="mt-1 font-semibold text-foreground">{course.level}</p>
                </div>
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between text-sm font-semibold">
                  <span className="text-foreground">Completion</span>
                  <span className="text-muted-foreground">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
              <div className="rounded-xl border border-border p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Next lesson</p>
                <p className="mt-1 font-semibold text-foreground">{course.nextLesson}</p>
              </div>
              <Button className="w-full">Continue Learning</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const StudentQuizzesPage = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-extrabold text-foreground">Quizzes</h1>
      <p className="text-muted-foreground">Upcoming quiz sessions and recent results are now separated into their own page.</p>
    </div>

    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <FileText className="h-5 w-5 text-primary" /> Upcoming Quizzes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingQuizzes.map((quiz) => (
            <div key={quiz.title} className="rounded-xl border border-border p-4">
              <div className="mb-2 flex items-center justify-between gap-3">
                <p className="font-bold text-foreground">{quiz.title}</p>
                <Badge variant="outline">{quiz.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{quiz.course}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Due {quiz.due}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Target className="h-5 w-5 text-secondary" /> Recent Results
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentResults.map((result) => (
            <div key={result.title} className="flex items-center justify-between rounded-xl border border-border p-4">
              <div>
                <p className="font-bold text-foreground">{result.title}</p>
                <p className="text-sm text-muted-foreground">{result.course}</p>
              </div>
              <span className="text-lg font-extrabold text-primary">{result.score}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  </div>
);

export const StudentLeaderboardPage = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-extrabold text-foreground">Leaderboard</h1>
      <p className="text-muted-foreground">See who is leading this week and what it takes to move up.</p>
    </div>

    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Trophy className="h-5 w-5 text-secondary" /> Weekly Ranking
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {leaderboard.map((entry) => (
          <div key={entry.rank} className="flex items-center gap-4 rounded-xl border border-border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">{entry.rank}</div>
            <div className="flex-1">
              <p className="font-bold text-foreground">{entry.name}</p>
              <p className="text-sm text-muted-foreground">Consistency bonus unlocked</p>
            </div>
            <div className="text-right">
              <p className="font-extrabold text-foreground">{entry.score}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">points</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);

export const StudentProgressPage = () => {
  const { courses } = useCourses();
  const progressChartData = courses.map((course) => ({ name: course.title.split(" ")[0], progress: course.progress }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground">Progress</h1>
        <p className="text-muted-foreground">A dedicated view for course completion, weekly targets, and performance trends.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {progressMilestones.map((item) => (
          <Card key={item.label} className="shadow-card">
            <CardContent className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</p>
              <p className="mt-2 text-2xl font-extrabold text-foreground">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Course Completion</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {courses.map((course) => (
              <div key={course.id}>
                <div className="mb-2 flex items-center justify-between text-sm font-semibold">
                  <span className="text-foreground">{course.title}</span>
                  <span className="text-muted-foreground">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Progress by Course</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={progressChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 32%, 91%)" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="progress" fill="hsl(174, 62%, 47%)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
