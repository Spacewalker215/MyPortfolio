import { ArrowDown, Github, Linkedin } from 'lucide-react';

export default function Hero() {
    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-teal/5">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue/10 rounded-full blur-3xl animate-float delay-200" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 py-32 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Greeting badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 border border-navy/10 mb-8 animate-fade-in">
                        <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-text-muted">Open to opportunities</span>
                    </div>

                    {/* Name */}
                    <h1 className="text-5xl md:text-7xl font-bold text-navy mb-4 animate-fade-in-up">
                        Jayden Ruddock
                    </h1>

                    {/* Title */}
                    <p className="text-xl md:text-2xl font-medium text-text-muted mb-6 animate-fade-in-up delay-100">
                        Computer Science @ <span className="text-teal font-semibold">UT Austin</span>{' '}
                        <span className="text-text-light">•</span>{' '}
                        <span className="gradient-text font-semibold">AI & Full-Stack Engineer</span>
                    </p>

                    {/* Tagline */}
                    <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
                        CS student focused on AI, automation, and shipping real, user-facing products.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
                        <button onClick={scrollToProjects} className="btn btn-primary">
                            View Projects
                            <ArrowDown size={18} />
                        </button>
                        <button onClick={scrollToContact} className="btn btn-secondary">
                            Connect With Me
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-6 animate-fade-in-up delay-400">
                        <a
                            href="https://github.com/Spacewalker215"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-text-muted hover:text-navy transition-colors group"
                        >
                            <Github size={20} className="group-hover:text-teal transition-colors" />
                            <span className="text-sm font-medium">GitHub</span>
                        </a>
                        <div className="w-px h-4 bg-border" />
                        <a
                            href="https://www.linkedin.com/in/jaydenruddock/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-text-muted hover:text-navy transition-colors group"
                        >
                            <Linkedin size={20} className="group-hover:text-teal transition-colors" />
                            <span className="text-sm font-medium">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ArrowDown size={24} className="text-text-light" />
            </div>
        </section>
    );
}
