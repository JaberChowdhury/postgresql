import Link from "next/link";
import { Image as ImageIcon, Users, ListTodo, Database, ArrowRight } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Wallpaper Collection",
      description: "A database-driven gallery to manage and view stunning wallpapers. Features full CRUD capability.",
      icon: <ImageIcon className="w-6 h-6 text-blue-500" />,
      href: "/wallpapers",
      status: "active",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "User Directory",
      description: "Practicing complex SQL joins, filtering, and pagination with a large dataset of user profiles.",
      icon: <Users className="w-6 h-6 text-purple-500" />,
      href: "#",
      status: "coming_soon",
      gradient: "from-purple-500/10 to-fuchsia-500/10",
    },
    {
      title: "Task Manager",
      description: "Relational database practice with tasks, subtasks, categories, and priority status updates.",
      icon: <ListTodo className="w-6 h-6 text-emerald-500" />,
      href: "#",
      status: "coming_soon",
      gradient: "from-emerald-500/10 to-teal-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-24 sm:py-32 flex flex-col items-center">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-2xl mb-4">
            <Database className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
            Database Practice Hub
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A collection of Next.js and PostgreSQL implementations. Exploring schemas, queries, and server-side rendering patterns.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className={`group relative flex flex-col p-6 rounded-3xl border bg-card transition-all duration-300 ${
                project.status === "active"
                  ? "hover:shadow-2xl hover:-translate-y-1 hover:border-primary/50 cursor-pointer"
                  : "opacity-75 grayscale-[0.5] cursor-not-allowed"
              }`}
            >
              {/* Card Gradient Background */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-background shadow-sm ring-1 ring-border">
                    {project.icon}
                  </div>
                  {project.status === "coming_soon" ? (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                      Coming Soon
                    </span>
                  ) : (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary flex items-center gap-1">
                      Active <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    </span>
                  )}
                </div>
                
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h2>
                
                <p className="text-muted-foreground text-sm flex-grow mb-6">
                  {project.description}
                </p>

                <div className={`mt-auto flex items-center text-sm font-medium transition-colors ${project.status === 'active' ? 'text-primary' : 'text-muted-foreground'}`}>
                  {project.status === "active" ? (
                    <>Explore Project <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" /></>
                  ) : (
                    "In Development"
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
