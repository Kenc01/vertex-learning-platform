import Link from "next/link";

const courses = [
  {
    title: "Next.js for Production",
    description:
      "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modules: "12 modules",
    icon: "N",
    iconClass: "next-icon",
  },
  {
    title: "Docker Essentials",
    description:
      "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modules: "8 modules",
    icon: "docker",
    iconClass: "docker-icon",
  },
  {
    title: "TypeScript Deep Dive",
    description: "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modules: "10 modules",
    icon: "TS",
    iconClass: "typescript-icon",
  },
];

function VertexMark() {
  return (
    <span className="vertex-mark" aria-hidden="true">
      V
    </span>
  );
}

function SearchIcon() {
  return <span className="search-icon" aria-hidden="true" />;
}

function CourseIcon({ icon, iconClass }: { icon: string; iconClass: string }) {
  return (
    <span className={`course-icon ${iconClass}`} aria-hidden="true">
      {icon === "docker" ? "" : icon}
    </span>
  );
}

export default function Home() {
  return (
    <main className="home-page">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Vertex home">
          <VertexMark />
          <strong>Vertex</strong>
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a className="active" href="#courses">
            Courses
          </a>
          <a href="#my-learning">My Learning</a>
        </nav>
        <div className="header-actions">
          <button
            className="icon-button notification-button"
            type="button"
            aria-label="Notifications"
          >
            <span className="bell-icon" aria-hidden="true" />
          </button>
          <button
            className="profile-button"
            type="button"
            aria-label="Open profile"
          >
            <span className="profile-image" aria-hidden="true">
              K
            </span>
          </button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <span className="eyebrow">Intelligent learning</span>
        <h1 id="hero-title">
          Search your learning
          <br />
          in plain English.
        </h1>
        <p>
          Vertex understands what you want to learn and
          <br className="desktop-break" /> finds the exact lessons across all
          your courses.
        </p>
        <a className="primary-button" href="#courses">
          Explore Courses <span aria-hidden="true">&#8594;</span>
        </a>
        <label className="search-field">
          <SearchIcon />
          <input
            type="search"
            placeholder="Ask anything about your learning..."
            aria-label="Search your learning"
          />
          <kbd>⌘ K</kbd>
        </label>
      </section>

      <section
        className="courses-section"
        id="courses"
        aria-labelledby="courses-title"
      >
        <div className="section-heading">
          <h2 id="courses-title">All Courses</h2>
          <a href="#courses">
            View all courses <span aria-hidden="true">&#8594;</span>
          </a>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <a className="course-card" href="#course" key={course.title}>
              <CourseIcon icon={course.icon} iconClass={course.iconClass} />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-meta">
                <span>
                  <i className="meta-icon level-icon" aria-hidden="true" />
                  {course.level}
                </span>
                <span>
                  <i className="meta-icon clock-icon" aria-hidden="true" />
                  {course.duration}
                </span>
                <span>
                  <i className="meta-icon module-icon" aria-hidden="true" />
                  {course.modules}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section
        className="announcement"
        id="my-learning"
        aria-label="Vertex updates"
      >
        <span className="announcement-rule" aria-hidden="true" />
        <span className="star" aria-hidden="true">
          ☆
        </span>
        <p>New courses and lessons added every week.</p>
        <span className="announcement-rule" aria-hidden="true" />
      </section>

      <div className="bar-chart" aria-hidden="true">
        {[3, 5, 7, 4, 2, 1, 4, 6, 8, 5, 3, 6, 7, 4].map((height, index) => (
          <i key={index} style={{ height: `${height * 18}px` }} />
        ))}
      </div>
    </main>
  );
}
