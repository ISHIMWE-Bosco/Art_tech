import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Palette, Keyboard, FileText, Trophy, Star, Users, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const courses = [
  { icon: Keyboard, title: "Typing", description: "Learn to type fast and accurately with fun games", color: "bg-primary", students: 234 },
  { icon: BookOpen, title: "English", description: "Build reading, writing, and vocabulary skills", color: "bg-info", students: 189 },
  { icon: Palette, title: "Art & Design", description: "Express creativity through digital art tools", color: "bg-accent", students: 312 },
  { icon: FileText, title: "Microsoft Office", description: "Master Word, PowerPoint, and Excel basics", color: "bg-secondary", students: 156 },
];

const features = [
  { icon: Trophy, title: "Leaderboards", description: "Compete with classmates and earn badges" },
  { icon: Star, title: "Interactive Lessons", description: "Fun exercises that make learning exciting" },
  { icon: Users, title: "Class Management", description: "Teachers easily manage students and courses" },
  { icon: BarChart3, title: "Progress Tracking", description: "Visual charts showing learning progress" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        <div className="absolute inset-0 opacity-5 gradient-hero" />
        <div className="container relative mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
              🎓 Learning Made Fun!
            </span>
            <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-extrabold leading-tight text-foreground md:text-6xl">
              Build Digital Skills with{" "}
              <span className="text-gradient">Art_tech</span>
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
              An engaging platform where primary school students learn typing, English, art, and computer skills through interactive lessons and fun challenges.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" asChild className="gradient-primary border-0 shadow-soft text-base px-8">
                <Link to="/login">Start Learning <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8">
                <a href="#courses">Explore Courses</a>
              </Button>
            </div>
          </motion.div>

          {/* Floating elements */}
          <motion.div className="pointer-events-none absolute left-10 top-20 text-4xl" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>🎨</motion.div>
          <motion.div className="pointer-events-none absolute right-16 top-32 text-4xl" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}>⌨️</motion.div>
          <motion.div className="pointer-events-none absolute bottom-10 left-1/4 text-4xl" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 3.5, delay: 1 }}>📚</motion.div>
          <motion.div className="pointer-events-none absolute bottom-20 right-1/4 text-4xl" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.8, delay: 0.3 }}>🏆</motion.div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="px-4 py-20">
        <div className="container mx-auto">
          <motion.div className="mb-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="mb-3 text-3xl font-extrabold text-foreground md:text-4xl">Our Courses</h2>
            <p className="text-muted-foreground">Explore subjects designed for young digital learners</p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                className="group cursor-pointer rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-card-hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4 }}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${course.color}`}>
                  <course.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{course.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{course.description}</p>
                <div className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                  <Users className="h-3.5 w-3.5" />
                  {course.students} students enrolled
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-4 py-20 bg-muted/50">
        <div className="container mx-auto">
          <motion.div className="mb-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="mb-3 text-3xl font-extrabold text-foreground md:text-4xl">Why Art_tech?</h2>
            <p className="text-muted-foreground">Built for students, teachers, and schools</p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="rounded-2xl bg-card p-6 shadow-card text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <f.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-bold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <motion.div
            className="rounded-3xl gradient-primary p-12 text-center shadow-soft"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="mb-4 text-3xl font-extrabold text-primary-foreground md:text-4xl">Ready to Start Learning?</h2>
            <p className="mx-auto mb-8 max-w-md text-primary-foreground/80">
              Join thousands of students building digital skills for the future.
            </p>
            <Button size="lg" variant="secondary" asChild className="text-base px-8 font-bold">
              <Link to="/login">Get Started Free <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="border-t border-border px-4 py-12 bg-card">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <BookOpen className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-extrabold text-foreground">Art<span className="text-primary">_tech</span></span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Art_tech. Making digital learning fun for everyone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
