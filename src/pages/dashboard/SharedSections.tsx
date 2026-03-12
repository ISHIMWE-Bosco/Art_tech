import { BellRing, CalendarClock, CheckCircle2, Mail, Phone, School, ShieldCheck, UserCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type DashboardRole = "student" | "teacher" | "admin";

const roleLabels: Record<DashboardRole, string> = {
  student: "Student",
  teacher: "Teacher",
  admin: "Admin",
};

const notificationContent: Record<
  DashboardRole,
  Array<{ title: string; detail: string; time: string; type: "Unread" | "Info" | "Done" }>
> = {
  student: [
    { title: "Typing quiz is due soon", detail: "Complete the speed checkpoint before March 14, 2026.", time: "10 min ago", type: "Unread" },
    { title: "New lesson unlocked", detail: "Poster composition is now available in Art and Design Studio.", time: "1 hour ago", type: "Info" },
    { title: "Leaderboard updated", detail: "You moved up to rank 5 after your latest activity streak.", time: "Today", type: "Done" },
  ],
  teacher: [
    { title: "New submissions waiting", detail: "Three assignments are ready for grading review.", time: "8 min ago", type: "Unread" },
    { title: "Course draft saved", detail: "Your latest lesson plan was saved to English Communication.", time: "Today", type: "Info" },
    { title: "Attendance synced", detail: "Class 4A attendance has been updated successfully.", time: "Yesterday", type: "Done" },
  ],
  admin: [
    { title: "Platform report ready", detail: "The weekly usage summary is available for review.", time: "14 min ago", type: "Unread" },
    { title: "New teacher onboarded", detail: "Sarah Njeri was added to the platform and assigned permissions.", time: "Today", type: "Info" },
    { title: "Backup completed", detail: "Nightly backup finished without errors.", time: "Yesterday", type: "Done" },
  ],
};

const profileContent: Record<
  DashboardRole,
  {
    name: string;
    email: string;
    phone: string;
    organization: string;
    summary: string;
    stats: Array<{ label: string; value: string }>;
  }
> = {
  student: {
    name: "Amina K.",
    email: "amina@student.arttech.edu",
    phone: "+250 700 123 456",
    organization: "Primary 4A",
    summary: "Focused on typing, English, and creative learning tracks with strong weekly consistency.",
    stats: [
      { label: "Courses active", value: "4" },
      { label: "Lessons completed", value: "28" },
      { label: "Current rank", value: "#5" },
    ],
  },
  teacher: {
    name: "Miriam N.",
    email: "miriam@arttech.edu",
    phone: "+250 788 222 300",
    organization: "Digital Skills Department",
    summary: "Managing classes, grading submissions, and publishing new course content for learners.",
    stats: [
      { label: "Courses managed", value: "4" },
      { label: "Students assigned", value: "48" },
      { label: "Pending grades", value: "12" },
    ],
  },
  admin: {
    name: "John Kamau",
    email: "admin@arttech.edu",
    phone: "+250 789 654 111",
    organization: "Platform Operations",
    summary: "Overseeing user access, platform health, and reporting across the full Art_tech system.",
    stats: [
      { label: "Users supervised", value: "354" },
      { label: "Active courses", value: "4" },
      { label: "System uptime", value: "99.9%" },
    ],
  },
};

const badgeVariantByType = {
  Unread: "destructive",
  Info: "secondary",
  Done: "default",
} as const;

export const NotificationsPage = ({ role }: { role: DashboardRole }) => {
  const items = notificationContent[role];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground">Notifications</h1>
        <p className="text-muted-foreground">{roleLabels[role]} updates, reminders, and system messages in one place.</p>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <BellRing className="h-5 w-5 text-primary" /> Recent Activity
          </CardTitle>
          <CardDescription>Clicking the bell now opens this dedicated notification page.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border p-4">
              <div className="mb-2 flex items-center justify-between gap-3">
                <p className="font-bold text-foreground">{item.title}</p>
                <Badge variant={badgeVariantByType[item.type]}>{item.type}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <CalendarClock className="h-3.5 w-3.5" />
                {item.time}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export const ProfilePage = ({ role }: { role: DashboardRole }) => {
  const profile = profileContent[role];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground">Profile</h1>
        <p className="text-muted-foreground">Account details and role summary for your {roleLabels[role].toLowerCase()} workspace.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_1.4fr]">
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-primary text-lg font-bold text-primary-foreground">
                {role[0].toUpperCase()}
              </div>
              <div>
                <CardTitle className="text-xl">{profile.name}</CardTitle>
                <CardDescription>{roleLabels[role]} account</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 rounded-xl border border-border p-3">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</p>
                <p className="font-semibold text-foreground">{profile.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border p-3">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Phone</p>
                <p className="font-semibold text-foreground">{profile.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border p-3">
              <School className="mt-0.5 h-4 w-4 text-primary" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Organization</p>
                <p className="font-semibold text-foreground">{profile.organization}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <UserCircle2 className="h-5 w-5 text-primary" /> About This Account
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">{profile.summary}</p>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            {profile.stats.map((stat) => (
              <Card key={stat.label} className="shadow-card">
                <CardContent className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                  <p className="mt-2 text-2xl font-extrabold text-foreground">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <ShieldCheck className="h-5 w-5 text-primary" /> Account Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button>Edit Profile</Button>
              <Button variant="outline">Change Password</Button>
              <Button variant="secondary">
                <CheckCircle2 className="h-4 w-4" /> Verified
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
