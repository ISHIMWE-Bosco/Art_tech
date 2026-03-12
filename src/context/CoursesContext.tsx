import { createContext, useContext, useEffect, useState } from "react";

export type CourseStatus = "Active" | "Draft";

export type Course = {
  id: string;
  title: string;
  teacher: string;
  category: string;
  level: string;
  duration: string;
  enrolled: number;
  progress: number;
  nextLesson: string;
  status: CourseStatus;
};

type NewCourse = Pick<Course, "title" | "teacher" | "category" | "level" | "duration"> & {
  status?: CourseStatus;
};

type CoursesContextValue = {
  courses: Course[];
  addCourse: (course: NewCourse) => void;
  removeCourse: (courseId: string) => void;
};

const STORAGE_KEY = "art-tech-courses";

const defaultCourses: Course[] = [
  {
    id: "typing-fundamentals",
    title: "Typing Fundamentals",
    teacher: "Miriam N.",
    category: "Productivity",
    level: "Beginner",
    duration: "6 weeks",
    enrolled: 36,
    progress: 72,
    nextLesson: "Keyboard speed drills",
    status: "Active",
  },
  {
    id: "english-communication",
    title: "English Communication",
    teacher: "Peter O.",
    category: "Language",
    level: "Intermediate",
    duration: "8 weeks",
    enrolled: 28,
    progress: 45,
    nextLesson: "Presentation skills",
    status: "Active",
  },
  {
    id: "art-design-studio",
    title: "Art and Design Studio",
    teacher: "Sarah K.",
    category: "Creative",
    level: "Intermediate",
    duration: "5 weeks",
    enrolled: 18,
    progress: 88,
    nextLesson: "Poster composition",
    status: "Active",
  },
  {
    id: "office-essentials",
    title: "MS Office Essentials",
    teacher: "Daniel W.",
    category: "Technology",
    level: "Beginner",
    duration: "7 weeks",
    enrolled: 24,
    progress: 30,
    nextLesson: "Spreadsheet formulas",
    status: "Draft",
  },
];

const CoursesContext = createContext<CoursesContextValue | undefined>(undefined);

const readStoredCourses = () => {
  if (typeof window === "undefined") {
    return defaultCourses;
  }

  const rawCourses = window.localStorage.getItem(STORAGE_KEY);
  if (!rawCourses) {
    return defaultCourses;
  }

  try {
    const parsedCourses = JSON.parse(rawCourses) as Course[];
    return parsedCourses.length > 0 ? parsedCourses : defaultCourses;
  } catch {
    return defaultCourses;
  }
};

export const CoursesProvider = ({ children }: { children: React.ReactNode }) => {
  const [courses, setCourses] = useState<Course[]>(readStoredCourses);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  }, [courses]);

  const addCourse = (course: NewCourse) => {
    const idBase = course.title.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");

    setCourses((currentCourses) => [
      {
        id: `${idBase}-${Date.now()}`,
        title: course.title.trim(),
        teacher: course.teacher.trim(),
        category: course.category.trim(),
        level: course.level.trim(),
        duration: course.duration.trim(),
        enrolled: 0,
        progress: 0,
        nextLesson: "To be scheduled",
        status: course.status ?? "Draft",
      },
      ...currentCourses,
    ]);
  };

  const removeCourse = (courseId: string) => {
    setCourses((currentCourses) => currentCourses.filter((course) => course.id !== courseId));
  };

  return (
    <CoursesContext.Provider value={{ courses, addCourse, removeCourse }}>
      {children}
    </CoursesContext.Provider>
  );
};

export const useCourses = () => {
  const context = useContext(CoursesContext);

  if (!context) {
    throw new Error("useCourses must be used inside CoursesProvider");
  }

  return context;
};
