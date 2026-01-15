import { ExternalLink, Github, Trophy, Star, Download, MessageCircle } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
    highlight?: string;
    icon: React.ReactNode;
}

const projects: Project[] = [
    {
        title: 'SkyLore',
        description: 'Full-stack citizen science platform for mapping global light pollution and cataloging cultural constellations. Built interactive data visualizations, a mobile-responsive React frontend, and a cloud-backed submission pipeline.',
        techStack: ['Python', 'Streamlit', 'React', 'Supabase', 'ML APIs'],
        githubUrl: 'https://github.com/Spacewalker215',
        highlight: 'HackTX 2025 Winner • Best Celestial-Themed Project',
        icon: <Trophy size={20} className="text-gold" />,
    },
    {
        title: 'Friendly Error Handler',
        description: 'VS Code extension with 500+ downloads that explains coding errors in plain English. Integrated directly with VS Code\'s debugging and terminal workflows to improve developer experience.',
        techStack: ['JavaScript', 'OpenAI API', 'VS Code API'],
        githubUrl: 'https://github.com/Spacewalker215',
        highlight: '500+ Downloads',
        icon: <Download size={20} className="text-teal" />,
    },
    {
        title: 'ScratchTutor',
        description: 'AI-powered chatbot extension that delivers personalized programming lessons for students using MIT Scratch. Designed to make programming concepts accessible for younger learners.',
        techStack: ['JavaScript', 'AI Chatbot', 'Education Tech'],
        githubUrl: 'https://github.com/Spacewalker215',
        icon: <MessageCircle size={20} className="text-blue" />,
    },
    {
        title: 'Buzzo Bot',
        description: 'Automated quiz bowl game to help Latin students practice and reinforce concepts through simulated gameplay and interactive learning.',
        techStack: ['React', 'Game Logic', 'Education'],
        githubUrl: 'https://github.com/Spacewalker215',
        icon: <Star size={20} className="text-purple" />,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section bg-white">
            <div className="container mx-auto">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="section-title mx-auto">Featured Projects</h2>
                        <p className="text-text-muted mt-6 max-w-2xl mx-auto">
                            A selection of projects showcasing my work in AI, full-stack development, and product engineering.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <article
                                key={project.title}
                                className={`card group ${index === 0 ? 'md:col-span-2' : ''}`}
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center">
                                            {project.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-navy group-hover:text-teal transition-colors">
                                                {project.title}
                                            </h3>
                                            {project.highlight && (
                                                <p className="text-xs font-medium text-teal flex items-center gap-1">
                                                    <Star size={12} className="fill-current" />
                                                    {project.highlight}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-2">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg text-text-muted hover:text-navy hover:bg-navy/5 transition-all"
                                                aria-label={`View ${project.title} on GitHub`}
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg text-text-muted hover:text-teal hover:bg-teal/5 transition-all"
                                                aria-label={`View ${project.title} live`}
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-text-muted text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* View More */}
                    <div className="text-center mt-8">
                        <a
                            href="https://github.com/Spacewalker215"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary inline-flex"
                        >
                            <Github size={18} />
                            View All Projects on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
